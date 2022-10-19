import { Component } from '@angular/core';
import { UpdateLastMileAccountsFormModel } from '@kometa/smde/last-mile/ui';
import { TypedFormBuilder, TypedFormGroup } from '@kometa/shared/typed-form';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, finalize, tap } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import {
  GetDataForUpdateLastMileAccountsGQL,
  UpdateLastMileAccountsGQL,
} from '@kometa/smde/last-mile/data-access';

@UntilDestroy()
@Component({
  selector: 'kometa-last-mile-accounts-update-dialog',
  templateUrl: './last-mile-accounts-update-dialog.component.html',
  styleUrls: ['./last-mile-accounts-update-dialog.component.scss'],
})
export class LastMileAccountsUpdateDialogComponent {
  readonly lastMileId: string;
  readonly emexAccounts$ = new BehaviorSubject<{ id: string; name: string }[]>([]);
  readonly smsAccounts$ = new BehaviorSubject<{ id: string; name: string }[]>([]);
  formGroup?: TypedFormGroup<UpdateLastMileAccountsFormModel>;

  constructor(
    private readonly updateLastMileAccountsGQL: UpdateLastMileAccountsGQL,
    private readonly getData: GetDataForUpdateLastMileAccountsGQL,
    private readonly fb: TypedFormBuilder,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    const { lastMileId } = this.config.data;

    this.lastMileId = lastMileId;

    this.getData
      .fetch({ lastMileId })
      .pipe(
        tap(({ data }) => {
          if (data) {
            this.emexAccounts$.next(data.emexAccounts?.items ?? []);
            this.smsAccounts$.next(data.smsAccounts?.items ?? []);
            this.formGroup = this.fb.group<UpdateLastMileAccountsFormModel>({
              emexAccountId: this.fb.control(data.lastMileById.accountIds.emexAccountId ?? null),
              smsAccountId: this.fb.control(data.lastMileById.accountIds.smsAccountId ?? null),
            });
          }
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  async onSave(input: UpdateLastMileAccountsFormModel): Promise<void> {
    await this.spinner.show();
    this.updateLastMileAccountsGQL
      .mutate({
        input: {
          ...input,
          lastMileId: this.lastMileId,
        },
      })
      .pipe(
        tap(({ data }) => {
          const result = data?.updateLastMileAccounts?.lastMile;
          const errors = data?.updateLastMileAccounts?.errors;

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
