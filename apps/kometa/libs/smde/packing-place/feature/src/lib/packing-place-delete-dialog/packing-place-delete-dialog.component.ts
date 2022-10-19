import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import {
  GetPackingPlacesDocument,
  PackingPlaceFragment,
} from '@kometa/smde/packing-place/types';
import { DeletePackingPlaceGQL } from '@kometa/smde/packing-place/data-access';
import { tap } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { finalize } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@UntilDestroy()
@Component({
  selector: 'kometa-packing-place-delete-dialog',
  templateUrl: './packing-place-delete-dialog.component.html',
  styleUrls: ['./packing-place-delete-dialog.component.scss'],
})
export class PackingPlaceDeleteDialogComponent {
  readonly packingPlace: PackingPlaceFragment;

  constructor(
    private readonly deletePackingPlaceGQL: DeletePackingPlaceGQL,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    const { packingPlace } = this.config.data;

    this.packingPlace = packingPlace;
  }

  async onDelete(): Promise<void> {
    await this.spinner.show();
    const { id } = this.packingPlace;
    this.deletePackingPlaceGQL
      .mutate(
        { input: { id } },
        {
          refetchQueries: [GetPackingPlacesDocument],
        }
      )
      .pipe(
        tap(({ data }) => {
          const result = data?.deletePackingPlace?.packingPlace;
          const errors = data?.deletePackingPlace?.errors;

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
