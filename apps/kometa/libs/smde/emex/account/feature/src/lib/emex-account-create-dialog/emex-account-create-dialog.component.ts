import { Component } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { EmexAccountFormService } from '../emex-account-form.service';
import { CreateEmexAccountFormModel } from '@kometa/smde/emex/account/ui';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { CreateEmexAccountGQL } from '@kometa/smde/emex/account/data-access';
import { finalize, tap } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { GetEmexAccountsDocument } from '@kometa/smde/emex/account/types';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@UntilDestroy()
@Component({
  selector: 'kometa-emex-account-create-dialog',
  templateUrl: './emex-account-create-dialog.component.html',
  styleUrls: ['./emex-account-create-dialog.component.scss'],
})
export class EmexAccountCreateDialogComponent {
  readonly formGroup: TypedFormGroup<CreateEmexAccountFormModel>;

  constructor(
    private readonly createEmexAccountGQL: CreateEmexAccountGQL,
    private readonly emexAccountFormService: EmexAccountFormService,
    private readonly ref: DynamicDialogRef,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    this.formGroup = this.emexAccountFormService.buildFormCreate();
  }

  async onSave(input: CreateEmexAccountFormModel): Promise<void> {
    await this.spinner.show();
    this.createEmexAccountGQL
      .mutate(
        { input },
        {
          refetchQueries: [GetEmexAccountsDocument],
        }
      )
      .pipe(
        tap(({ data }) => {
          const result = data?.createEmexAccount?.emexAccount;
          const errors = data?.createEmexAccount?.errors;

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
