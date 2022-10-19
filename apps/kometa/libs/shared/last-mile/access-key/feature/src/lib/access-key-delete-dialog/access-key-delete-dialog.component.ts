import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { tap } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { finalize } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import {
  AccessKeyFragment,
  GetAccessKeysDocument,
} from '@kometa/shared/last-mile/access-key/types';
import { DeleteAccessKeyGQL } from '@kometa/shared/last-mile/access-key/data-access';

@UntilDestroy()
@Component({
  selector: 'kometa-access-key-delete-dialog',
  templateUrl: './access-key-delete-dialog.component.html',
  styleUrls: ['./access-key-delete-dialog.component.scss'],
})
export class AccessKeyDeleteDialogComponent {
  readonly accessKey: AccessKeyFragment;
  readonly lastMileId: string;

  constructor(
    private readonly deleteAccessKeyGQL: DeleteAccessKeyGQL,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    const { accessKey, lastMileId } = this.config.data;

    this.lastMileId = lastMileId;
    this.accessKey = accessKey;
  }

  async onDelete(): Promise<void> {
    await this.spinner.show();
    const { id } = this.accessKey;
    this.deleteAccessKeyGQL
      .mutate(
        { input: { lastMileId: this.lastMileId, id } },
        {
          refetchQueries: [GetAccessKeysDocument],
        }
      )
      .pipe(
        tap(({ data }) => {
          const result = data?.deleteAccessKey?.accessKey;
          const errors = data?.deleteAccessKey?.errors;

          if (result) {
            this.ref.close(result);
          }

          if (errors) {
            for (const { message } of errors) {
              this.toastrService.error(message);
            }
          }
        }),
        untilDestroyed(this),
        finalize(() => this.spinner.hide())
      )
      .subscribe();
  }

  onCancel(): void {
    this.ref.close();
  }
}
