import { Component } from '@angular/core';
import {
  GetPackingPlacesDocument,
  PackingPlaceFragment,
} from '@kometa/smde/packing-place/types';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { UpdatePackingPlaceFormModel } from '@kometa/smde/packing-place/ui';
import { BehaviorSubject, tap } from 'rxjs';
import { PackingPlaceFormService } from '../packing-place-form.service';
import { finalize } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import {
  GetDataForUpdatePackingPlaceGQL,
  UpdatePackingPlaceGQL,
} from '@kometa/smde/packing-place/data-access';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@UntilDestroy()
@Component({
  selector: 'kometa-packing-place-update-dialog',
  templateUrl: './packing-place-update-dialog.component.html',
  styleUrls: ['./packing-place-update-dialog.component.scss'],
})
export class PackingPlaceUpdateDialogComponent {
  readonly packingPlace: PackingPlaceFragment;
  readonly formGroup: TypedFormGroup<UpdatePackingPlaceFormModel>;
  readonly sizes$ = new BehaviorSubject<{ id: string; name: string }[]>([]);

  constructor(
    private readonly updatePackingPlaceGQL: UpdatePackingPlaceGQL,
    private readonly getDataForUpdatePackingPlaceGQL: GetDataForUpdatePackingPlaceGQL,
    private readonly packingPlaceFormService: PackingPlaceFormService,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    const { packingPlace } = this.config.data;

    this.packingPlace = packingPlace;

    this.formGroup = this.packingPlaceFormService.buildFormUpdate(this.packingPlace);

    this.getDataForUpdatePackingPlaceGQL
      .watch({}, { useInitialLoading: false })
      .valueChanges.pipe(
        tap(({ data }) => {
          this.sizes$.next(data.sizes?.items ?? []);
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  async onSave(input: UpdatePackingPlaceFormModel): Promise<void> {
    await this.spinner.show();
    const { id } = this.packingPlace;
    this.updatePackingPlaceGQL
      .mutate(
        { input: { ...input, id } },
        {
          refetchQueries: [GetPackingPlacesDocument],
        }
      )
      .pipe(
        tap(({ data }) => {
          const result = data?.updatePackingPlace?.packingPlace;
          const errors = data?.updatePackingPlace?.errors;

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
