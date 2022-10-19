import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EmexAccountFragment, GetEmexAccountsDocument } from '@kometa/smde/emex/account/types';
import { DeleteEmexAccountGQL } from '@kometa/smde/emex/account/data-access';
import { finalize, tap } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@UntilDestroy()
@Component({
  selector: 'kometa-emex-account-delete-dialog',
  templateUrl: './emex-account-delete-dialog.component.html',
  styleUrls: ['./emex-account-delete-dialog.component.scss'],
})
export class EmexAccountDeleteDialogComponent {
  readonly account: EmexAccountFragment;

  constructor(
    private readonly deleteEmexAccountGQL: DeleteEmexAccountGQL,
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
    this.deleteEmexAccountGQL
      .mutate(
        { input: { id } },
        {
          refetchQueries: [GetEmexAccountsDocument],
        }
      )
      .pipe(
        tap(({ data }) => {
          const result = data?.deleteEmexAccount?.emexAccount;
          const errors = data?.deleteEmexAccount?.errors;

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
