import { Component, Input } from '@angular/core';
import {
  ShipmentRequestFragment,
  ShipmentRequestStatus,
} from '@kometa/smde/shipment-request/types';
import { getEnumKey } from '@kometa/shared/utils';

@Component({
  selector: 'kometa-shipment-request-timeline-form',
  templateUrl: './shipment-request-timeline-form.component.html',
  styleUrls: ['./shipment-request-timeline-form.component.scss'],
})
export class ShipmentRequestTimelineFormComponent {
  @Input()
  request?: ShipmentRequestFragment;

  get changesHistory() {
    return this.request?.changesHistory ?? [];
  }

  getStatus(request: ShipmentRequestFragment) {
    return getEnumKey(request.status, ShipmentRequestStatus);
  }
}
