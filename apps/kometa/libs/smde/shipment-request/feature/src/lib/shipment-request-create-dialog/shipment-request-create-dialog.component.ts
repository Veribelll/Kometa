import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { TypeOrder } from '@kometa/smde/packing-place/types';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { CreateShipmentRequestFormModel } from '@kometa/smde/shipment-request/ui';
import { ShipmentRequestFormService } from '../shipment-request-form.service';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { enumToArray } from '@kometa/shared/utils';
import { TranslocoService } from '@ngneat/transloco';
import { ToastrService } from 'ngx-toastr';
import { CreateShipmentRequestGQL } from '@kometa/smde/shipment-request/data-access';
import { GetShipmentRequestsDocument } from '@kometa/smde/shipment-request/types';
import { finalize } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';

@UntilDestroy()
@Component({
  selector: 'kometa-shipment-request-create-dialog',
  templateUrl: './shipment-request-create-dialog.component.html',
  styleUrls: ['./shipment-request-create-dialog.component.scss'],
})
export class ShipmentRequestCreateDialogComponent {
  readonly formGroup: TypedFormGroup<CreateShipmentRequestFormModel>;
  readonly typesOrder = enumToArray(TypeOrder).map(({ id, name }) => ({
    id,
    name: this.translocoService.translate('TypeOrder:' + name),
  }));

  constructor(
    private readonly createShipmentRequestGQL: CreateShipmentRequestGQL,
    private readonly shipmentRequestFormService: ShipmentRequestFormService,
    private readonly translocoService: TranslocoService,
    private readonly ref: DynamicDialogRef,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    this.formGroup = this.shipmentRequestFormService.buildFormCreate();
  }

  async onSave(input: CreateShipmentRequestFormModel) {
    await this.spinner.show();
    this.createShipmentRequestGQL
      .mutate(
        { input },
        {
          refetchQueries: [GetShipmentRequestsDocument],
        }
      )
      .pipe(
        tap(({ data }) => {
          const result = data?.createShipmentRequest?.shipmentRequest;
          const errors = data?.createShipmentRequest?.errors;

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
