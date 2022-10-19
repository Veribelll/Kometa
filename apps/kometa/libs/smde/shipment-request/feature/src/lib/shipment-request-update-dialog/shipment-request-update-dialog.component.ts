import { Component } from '@angular/core';
import {
  GetShipmentRequestsDocument,
  ShipmentRequestFragment,
} from '@kometa/smde/shipment-request/types';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { UpdateShipmentRequestFormModel } from '@kometa/smde/shipment-request/ui';
import { ShipmentRequestFormService } from '../shipment-request-form.service';
import { tap } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { UpdateShipmentRequestGQL } from '@kometa/smde/shipment-request/data-access';
import { finalize } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@UntilDestroy()
@Component({
  selector: 'kometa-shipment-request-update-dialog',
  templateUrl: './shipment-request-update-dialog.component.html',
  styleUrls: ['./shipment-request-update-dialog.component.scss'],
})
export class ShipmentRequestUpdateDialogComponent {
  readonly request: ShipmentRequestFragment;
  readonly formGroup: TypedFormGroup<UpdateShipmentRequestFormModel>;

  constructor(
    private readonly updateShipmentRequestGQL: UpdateShipmentRequestGQL,
    private readonly shipmentRequestFormService: ShipmentRequestFormService,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    const { request } = this.config.data;

    this.request = request;
    this.formGroup = this.shipmentRequestFormService.buildFormUpdate(this.request);
  }

  async onSave(input: UpdateShipmentRequestFormModel): Promise<void> {
    await this.spinner.show();
    const { id } = this.request;
    this.updateShipmentRequestGQL
      .mutate(
        { input: { ...input, id } },
        {
          refetchQueries: [GetShipmentRequestsDocument],
        }
      )
      .pipe(
        tap(({ data }) => {
          const result = data?.updateShipmentRequest?.shipmentRequest;
          const errors = data?.updateShipmentRequest?.errors;

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
