import { Component } from '@angular/core';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AccessKeyFormService } from '../access-key-form.service';
import { tap } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { finalize } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { UpdateAccessKeyFormModel } from '@kometa/shared/last-mile/access-key/ui';
import {
  AccessKeyFragment,
  GetAccessKeysDocument,
} from '@kometa/shared/last-mile/access-key/types';
import { UpdateAccessKeyGQL } from '@kometa/shared/last-mile/access-key/data-access';

@UntilDestroy()
@Component({
  selector: 'kometa-access-key-update-dialog',
  templateUrl: './access-key-update-dialog.component.html',
  styleUrls: ['./access-key-update-dialog.component.scss'],
})
export class AccessKeyUpdateDialogComponent {
  readonly formGroup: TypedFormGroup<UpdateAccessKeyFormModel>;
  readonly lastMileId: string;
  readonly accessKey: AccessKeyFragment;

  constructor(
    private readonly updateAccessKeyGQL: UpdateAccessKeyGQL,
    private readonly accessKeyFormService: AccessKeyFormService,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    const { accessKey, lastMileId } = this.config.data;

    this.lastMileId = lastMileId;
    this.accessKey = accessKey;
    this.formGroup = this.accessKeyFormService.buildFormUpdate(this.lastMileId, this.accessKey);
  }

  async onSave(input: UpdateAccessKeyFormModel): Promise<void> {
    await this.spinner.show();
    const { id } = this.accessKey;
    this.updateAccessKeyGQL
      .mutate(
        { input: { ...input, lastMileId: this.lastMileId, id } },
        {
          refetchQueries: [GetAccessKeysDocument],
        }
      )
      .pipe(
        tap(({ data }) => {
          const result = data?.updateAccessKey?.accessKey;
          const errors = data?.updateAccessKey?.errors;

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
