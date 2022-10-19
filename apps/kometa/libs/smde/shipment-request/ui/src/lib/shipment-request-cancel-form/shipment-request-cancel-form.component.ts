import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ShipmentRequestFragment } from '@kometa/smde/shipment-request/types';

@Component({
  selector: 'kometa-shipment-request-cancel-form',
  templateUrl: './shipment-request-cancel-form.component.html',
  styleUrls: ['./shipment-request-cancel-form.component.scss'],
})
export class ShipmentRequestCancelFormComponent {
  @Input()
  request?: ShipmentRequestFragment;

  @Output()
  readonly delete = new EventEmitter();

  @Output()
  readonly cancel = new EventEmitter();

  onDelete() {
    this.delete.emit();
  }

  onCancel() {
    this.cancel.emit();
  }
}
