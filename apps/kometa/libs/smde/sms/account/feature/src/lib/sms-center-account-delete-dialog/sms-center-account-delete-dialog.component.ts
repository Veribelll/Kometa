import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import {
  GetSmsAccountsDocument,
  SmsCenterAccountFragment,
} from '@kometa/smde/sms/account/types';
import { finalize, tap } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { DeleteSmsCenterAccountGQL } from '@kometa/smde/sms/account/data-access';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@UntilDestroy()
@Component({
  selector: 'kometa-sms-center-account-delete-dialog',
  templateUrl: './sms-center-account-delete-dialog.component.html',
  styleUrls: ['./sms-center-account-delete-dialog.component.scss'],
})
export class SmsCenterAccountDeleteDialogComponent {
  readonly account: SmsCenterAccountFragment;

  constructor(
    private readonly deleteSmsCenterAccountGQL: DeleteSmsCenterAccountGQL,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    const { account } = this.config.data;

    this.account = account;
  }

  async onDelete(): Promise<void> {
    await this.spinner.show();
    const { id } = this.account;
    this.deleteSmsCenterAccountGQL
      .mutate(
        { input: { id } },
        {
          refetchQueries: [GetSmsAccountsDocument],
        }
      )
      .pipe(
        tap(({ data }) => {
          const result = data?.deleteSmsCenterAccount?.smsCenterAccount;
          const errors = data?.deleteSmsCenterAccount?.errors;

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
