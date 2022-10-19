import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { UpdateLastMileStoragePeriodGQL } from '@kometa/smde/last-mile/storage-period/data-access';
import { TypedFormBuilder, TypedFormGroup } from '@kometa/shared/typed-form';
import { UpdateStoragePeriodFormModel } from '@kometa/smde/last-mile/storage-period/ui';
import { tap } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { finalize } from 'rxjs/operators';
import {
  GetLastMileStoragePeriodsDocument,
  LastMileStoragePeriodFragment,
} from '@kometa/smde/last-mile/storage-period/types';
import { Validators } from '@angular/forms';

@UntilDestroy()
@Component({
  selector: 'kometa-storage-period-update-dialog',
  templateUrl: './storage-period-update-dialog.component.html',
  styleUrls: ['./storage-period-update-dialog.component.scss'],
})
export class StoragePeriodUpdateDialogComponent {
  readonly formGroup: TypedFormGroup<UpdateStoragePeriodFormModel>;
  readonly lastMileId: string;
  readonly storagePeriod?: LastMileStoragePeriodFragment;

  constructor(
    private readonly fb: TypedFormBuilder,
    private readonly updateStoragePeriodGQL: UpdateLastMileStoragePeriodGQL,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    const { lastMileId, storagePeriod } = this.config.data;

    this.lastMileId = lastMileId;
    this.storagePeriod = storagePeriod;

    this.formGroup = this.fb.group<UpdateStoragePeriodFormModel>({
      typeOrder: this.fb.control(storagePeriod?.typeOrder ?? null, [Validators.required]),
      period: this.fb.control(storagePeriod?.period ?? null, [Validators.required]),
    });
  }

  async onSave(input: UpdateStoragePeriodFormModel): Promise<void> {
    await this.spinner.show();
    this.updateStoragePeriodGQL
      .mutate(
        { input: { ...input, lastMileId: this.lastMileId } },
        {
          refetchQueries: [GetLastMileStoragePeriodsDocument],
        }
      )
      .pipe(
        tap(({ data }) => {
          const result = data?.updateLastMileStoragePeriod?.lastMileStoragePeriod;
          const errors = data?.updateLastMileStoragePeriod?.errors;

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
