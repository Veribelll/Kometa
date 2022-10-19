import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UpdateReturnPeriodFormModel } from '@kometa/smde/last-mile/return-period/ui';
import { NgxSpinnerService } from 'ngx-spinner';
import { TypedFormBuilder, TypedFormGroup } from '@kometa/shared/typed-form';
import { ToastrService } from 'ngx-toastr';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { UpdateLastMileReturnPeriodGQL } from '@kometa/smde/last-mile/return-period/data-access';
import {
  GetLastMileReturnPeriodsDocument,
  LastMileReturnPeriodFragment
} from '@kometa/smde/last-mile/return-period/types';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Validators } from '@angular/forms';
import { finalize, tap } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'kometa-return-period-update-dialog',
  templateUrl: './return-period-update-dialog.component.html',
  styleUrls: ['./return-period-update-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReturnPeriodUpdateDialogComponent {
  readonly formGroup: TypedFormGroup<UpdateReturnPeriodFormModel>;
  readonly lastMileId: string;
  readonly returnPeriod?: LastMileReturnPeriodFragment;

  constructor(
    private readonly fb: TypedFormBuilder,
    private readonly updateReturnPeriodGQL: UpdateLastMileReturnPeriodGQL,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    const { lastMileId, returnPeriod } = this.config.data;

    this.lastMileId = lastMileId;
    this.returnPeriod = returnPeriod;

    this.formGroup = this.fb.group<UpdateReturnPeriodFormModel>({
      typeOrder: this.fb.control(returnPeriod?.typeOrder ?? null, [Validators.required]),
      period: this.fb.control(returnPeriod?.period ?? null, [Validators.required]),
    });
  }

  async onSave(input: UpdateReturnPeriodFormModel): Promise<void> {
    await this.spinner.show();
    this.updateReturnPeriodGQL
      .mutate(
        { input: { ...input, lastMileId: this.lastMileId } },
        {
          refetchQueries: [GetLastMileReturnPeriodsDocument],
        }
      )
      .pipe(
        tap(({ data }) => {
          const result = data?.updateLastMileReturnPeriod?.lastMileReturnPeriod;
          const errors = data?.updateLastMileReturnPeriod?.errors;

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
