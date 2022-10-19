import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { CreateShipmentRequestFormModel } from '../create-shipment-request-form.model';
import {
  GetPackingPlacesQueryVariables,
  PackingPlaceStatus,
} from '@kometa/smde/packing-place/types';

@Component({
  selector: 'kometa-shipment-request-create-form',
  templateUrl: './shipment-request-create-form.component.html',
  styleUrls: ['./shipment-request-create-form.component.scss'],
})
export class ShipmentRequestCreateFormComponent {
  readonly packingPlaceWhere: GetPackingPlacesQueryVariables['where'] = {
    status: { eq: PackingPlaceStatus.Created },
  };

  @Input()
  formGroup!: TypedFormGroup<CreateShipmentRequestFormModel>;

  @Output()
  readonly save = new EventEmitter<CreateShipmentRequestFormModel>();

  @Output()
  readonly cancel = new EventEmitter();

  onSave() {
    if (this.formGroup.valid && this.formGroup.value) {
      const { packingPlaceIds, code, courierId, lastMileId, cause, comment } = this.formGroup.value;
      this.save.emit({
        packingPlaceIds,
        code,
        courierId,
        lastMileId,
        cause,
        comment,
      });
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}
