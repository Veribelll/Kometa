import { Component } from '@angular/core';
import {
  GetPackingPlacesDocument,
  PackingPlaceFragment,
} from '@kometa/smde/packing-place/types';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { SendPackingPlaceGQL } from '@kometa/smde/packing-place/data-access';
import { tap } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { finalize } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@UntilDestroy()
@Component({
  selector: 'kometa-packing-place-send-dialog',
  templateUrl: './packing-place-send-dialog.component.html',
  styleUrls: ['./packing-place-send-dialog.component.scss'],
})
export class PackingPlaceSendDialogComponent {
  readonly packingPlace: PackingPlaceFragment;

  constructor(
    private readonly sendPackingPlaceGQL: SendPackingPlaceGQL,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    const { packingPlace } = this.config.data;

    this.packingPlace = packingPlace;
  }

  async onSend(): Promise<void> {
    await this.spinner.show();
    const { id } = this.packingPlace;
    this.sendPackingPlaceGQL
      .mutate(
        { input: { id } },
        {
          refetchQueries: [GetPackingPlacesDocument],
        }
      )
      .pipe(
        tap(({ data }) => {
          const result = data?.sendPackingPlace?.packingPlace;
          const errors = data?.sendPackingPlace?.errors;

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
