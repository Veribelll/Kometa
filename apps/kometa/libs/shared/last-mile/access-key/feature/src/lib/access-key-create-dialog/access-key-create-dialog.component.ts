import { Component } from '@angular/core';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AccessKeyFormService } from '../access-key-form.service';
import { tap } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs/operators';
import { CreateAccessKeyFormModel } from '@kometa/shared/last-mile/access-key/ui';
import { GetAccessKeysDocument } from '@kometa/shared/last-mile/access-key/types';
import { CreateAccessKeyGQL } from '@kometa/shared/last-mile/access-key/data-access';

@UntilDestroy()
@Component({
  selector: 'kometa-access-key-create-dialog',
  templateUrl: './access-key-create-dialog.component.html',
  styleUrls: ['./access-key-create-dialog.component.scss'],
})
export class AccessKeyCreateDialogComponent {
  readonly formGroup: TypedFormGroup<CreateAccessKeyFormModel>;
  readonly lastMileId: string;

  constructor(
    private readonly createAccessKeyGQL: CreateAccessKeyGQL,
    private readonly accessKeyFormService: AccessKeyFormService,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    const { lastMileId } = this.config.data;

    this.lastMileId = lastMileId;
    this.formGroup = this.accessKeyFormService.buildFormCreate(this.lastMileId);
  }

  async onSave(input: CreateAccessKeyFormModel): Promise<void> {
    await this.spinner.show();
    this.createAccessKeyGQL
      .mutate(
        { input: { ...input, lastMileId: this.lastMileId } },
        {
          refetchQueries: [GetAccessKeysDocument],
        }
      )
      .pipe(
        tap(({ data }) => {
          const result = data?.createAccessKey?.accessKey;
          const errors = data?.createAccessKey?.errors;

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
