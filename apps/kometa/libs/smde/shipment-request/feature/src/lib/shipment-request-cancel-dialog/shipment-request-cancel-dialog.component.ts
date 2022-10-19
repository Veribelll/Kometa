import { Component } from '@angular/core';
import {
  GetShipmentRequestsDocument,
  ShipmentRequestFragment,
} from '@kometa/smde/shipment-request/types';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CancelShipmentRequestGQL } from '@kometa/smde/shipment-request/data-access';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { finalize, tap } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'kometa-shipment-request-cancel-dialog',
  templateUrl: './shipment-request-cancel-dialog.component.html',
  styleUrls: ['./shipment-request-cancel-dialog.component.scss'],
})
export class ShipmentRequestCancelDialogComponent {
  readonly request: ShipmentRequestFragment;

  constructor(
    private readonly cancelShipmentRequestGQL: CancelShipmentRequestGQL,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    const { request } = this.config.data;

    this.request = request;
  }

  async onDelete(): Promise<void> {
    await this.spinner.show();
    const { id } = this.request;
    this.cancelShipmentRequestGQL
      .mutate(
        { input: { id } },
        {
          refetchQueries: [GetShipmentRequestsDocument],
        }
      )
      .pipe(
        tap(({ data }) => {
          const result = data?.cancelShipmentRequest?.shipmentRequest;
          const errors = data?.cancelShipmentRequest?.errors;

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
