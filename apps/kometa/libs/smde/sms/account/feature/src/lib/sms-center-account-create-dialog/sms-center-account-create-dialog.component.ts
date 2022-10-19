import { Component } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { SmsCenterAccountFormService } from '../sms-center-account-form.service';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { CreateSmsCenterAccountFormModel } from '@kometa/smde/sms/account/ui';
import { CreateSmsCenterAccountGQL } from '@kometa/smde/sms/account/data-access';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { GetSmsAccountsDocument } from '@kometa/smde/sms/account/types';
import { finalize, tap } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'kometa-sms-center-account-create-dialog',
  templateUrl: './sms-center-account-create-dialog.component.html',
  styleUrls: ['./sms-center-account-create-dialog.component.scss'],
})
export class SmsCenterAccountCreateDialogComponent {
  readonly formGroup: TypedFormGroup<CreateSmsCenterAccountFormModel>;

  constructor(
    private readonly createSmsCenterAccountGQL: CreateSmsCenterAccountGQL,
    private readonly smsCenterAccountFormService: SmsCenterAccountFormService,
    private readonly ref: DynamicDialogRef,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    this.formGroup = this.smsCenterAccountFormService.buildFormCreate();
  }

  async onSave(input: CreateSmsCenterAccountFormModel): Promise<void> {
    await this.spinner.show();
    this.createSmsCenterAccountGQL
      .mutate(
        { input },
        {
          refetchQueries: [GetSmsAccountsDocument],
        }
      )
      .pipe(
        tap(({ data }) => {
          const result = data?.createSmsCenterAccount?.smsCenterAccount;
          const errors = data?.createSmsCenterAccount?.errors;

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
