import { Component } from '@angular/core';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { CreatePackingPlaceFormModel } from '@kometa/smde/packing-place/ui';
import { BehaviorSubject, tap } from 'rxjs';
import { PackingPlaceFormService } from '../packing-place-form.service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { finalize } from 'rxjs/operators';
import { GetPackingPlacesDocument, TypeOrder } from '@kometa/smde/packing-place/types';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { LastMileFragment } from '@kometa/smde/last-mile/types';
import {
  CreatePackingPlaceGQL,
  GetDataForCreatePackingPlaceGQL,
} from '@kometa/smde/packing-place/data-access';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@UntilDestroy()
@Component({
  selector: 'kometa-packing-place-create-dialog',
  templateUrl: './packing-place-create-dialog.component.html',
  styleUrls: ['./packing-place-create-dialog.component.scss'],
})
export class PackingPlaceCreateDialogComponent {
  readonly formGroup: TypedFormGroup<CreatePackingPlaceFormModel>;
  readonly typeOrder?: TypeOrder;
  readonly sizes$ = new BehaviorSubject<{ id: string; name: string }[]>([]);
  readonly selectedLastMile$ = new BehaviorSubject<LastMileFragment | null>(null);

  constructor(
    private readonly createPackingPlaceGQL: CreatePackingPlaceGQL,
    private readonly getDataForCreatePackingPlaceGQL: GetDataForCreatePackingPlaceGQL,
    private readonly packingPlaceFormService: PackingPlaceFormService,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    const { typeOrder } = this.config.data;

    this.typeOrder = typeOrder;
    this.formGroup = this.packingPlaceFormService.buildFormCreate();

    this.getDataForCreatePackingPlaceGQL
      .watch({}, { useInitialLoading: false })
      .valueChanges.pipe(
        tap(({ data }) => {
          this.sizes$.next(data.sizes?.items ?? []);
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  async onSave(input: CreatePackingPlaceFormModel): Promise<void> {
    await this.spinner.show();
    this.createPackingPlaceGQL
      .mutate(
        { input },
        {
          refetchQueries: [GetPackingPlacesDocument],
        }
      )
      .pipe(
        tap(({ data }) => {
          const result = data?.createPackingPlace?.packingPlace;
          const errors = data?.createPackingPlace?.errors;

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
