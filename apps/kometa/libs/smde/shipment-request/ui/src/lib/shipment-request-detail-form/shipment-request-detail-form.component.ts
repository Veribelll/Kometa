import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ShipmentRequestFragment } from '@kometa/smde/shipment-request/types';
import { getEnumKey } from '@kometa/shared/utils';
import { PackingPlaceFragment, PackingPlaceStatus } from '@kometa/smde/packing-place/types';

@Component({
  selector: 'kometa-shipment-request-detail-form',
  templateUrl: './shipment-request-detail-form.component.html',
  styleUrls: ['./shipment-request-detail-form.component.scss'],
})
export class ShipmentRequestDetailFormComponent {
  @Input()
  request?: ShipmentRequestFragment;

  @Output()
  readonly packingPlaceDetails = new EventEmitter<PackingPlaceFragment>();

  onPackingPlaceDetails(packingPlace: PackingPlaceFragment) {
    this.packingPlaceDetails.emit(packingPlace);
  }

  getStatus({ status }: PackingPlaceFragment) {
    return getEnumKey(status, PackingPlaceStatus);
  }
}
