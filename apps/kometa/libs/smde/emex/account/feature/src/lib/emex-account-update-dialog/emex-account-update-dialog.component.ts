import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EmexAccountFragment, GetEmexAccountsDocument } from '@kometa/smde/emex/account/types';
import { EmexAccountFormService } from '../emex-account-form.service';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { UpdateEmexAccountFormModel } from '@kometa/smde/emex/account/ui';
import { finalize, tap } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { UpdateEmexAccountGQL } from '@kometa/smde/emex/account/data-access';

@UntilDestroy()
@Component({
  selector: 'kometa-emex-account-update-dialog',
  templateUrl: './emex-account-update-dialog.component.html',
  styleUrls: ['./emex-account-update-dialog.component.scss'],
})
export class EmexAccountUpdateDialogComponent {
  readonly formGroup: TypedFormGroup<UpdateEmexAccountFormModel>;
  readonly account: EmexAccountFragment;

  constructor(
    private readonly updateEmexAccountGQL: UpdateEmexAccountGQL,
    private readonly emexAccountFormService: EmexAccountFormService,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    const { account } = this.config.data;

    this.account = account;
    this.formGroup = this.emexAccountFormService.buildFormUpdate(this.account);
  }

  async onSave(input: UpdateEmexAccountFormModel): Promise<void> {
    await this.spinner.show();
    const { id } = this.account;
    this.updateEmexAccountGQL
      .mutate(
        { input: { ...input, id } },
        {
          refetchQueries: [GetEmexAccountsDocument],
        }
      )
      .pipe(
        tap(({ data }) => {
          const result = data?.updateEmexAccount?.emexAccount;
          const errors = data?.updateEmexAccount?.errors;

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
