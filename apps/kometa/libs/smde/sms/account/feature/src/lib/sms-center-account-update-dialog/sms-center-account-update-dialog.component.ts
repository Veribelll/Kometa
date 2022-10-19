import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import {
  GetSmsAccountsDocument,
  SmsCenterAccountFragment,
} from '@kometa/smde/sms/account/types';
import { SmsCenterAccountFormService } from '../sms-center-account-form.service';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { UpdateSmsCenterAccountFormModel } from '@kometa/smde/sms/account/ui';
import { UpdateSmsCenterAccountGQL } from '@kometa/smde/sms/account/data-access';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { finalize, tap } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@UntilDestroy()
@Component({
  selector: 'kometa-sms-center-account-update-dialog',
  templateUrl: './sms-center-account-update-dialog.component.html',
  styleUrls: ['./sms-center-account-update-dialog.component.scss'],
})
export class SmsCenterAccountUpdateDialogComponent {
  readonly formGroup: TypedFormGroup<UpdateSmsCenterAccountFormModel>;
  readonly account: SmsCenterAccountFragment;

  constructor(
    private readonly updateSmsCenterAccountGQL: UpdateSmsCenterAccountGQL,
    private readonly smsCenterAccountFormService: SmsCenterAccountFormService,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    const { account } = this.config.data;

    this.account = account;
    this.formGroup = this.smsCenterAccountFormService.buildFormUpdate(this.account);
  }

  async onSave(input: UpdateSmsCenterAccountFormModel): Promise<void> {
    await this.spinner.show();
    const { id } = this.account;
    this.updateSmsCenterAccountGQL
      .mutate(
        { input: { ...input, id } },
        {
          refetchQueries: [GetSmsAccountsDocument],
        }
      )
      .pipe(
        tap(({ data }) => {
          const result = data?.updateSmsCenterAccount?.smsCenterAccount;
          const errors = data?.updateSmsCenterAccount?.errors;

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
