import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  ShipmentRequestFragment,
  ShipmentRequestStatus,
} from '@kometa/smde/shipment-request/types';
import { LazyLoadEvent } from 'primeng/api';
import { getEnumKey } from '@kometa/shared/utils';

@Component({
  selector: 'kometa-shipment-request-table',
  templateUrl: './shipment-request-table.component.html',
  styleUrls: ['./shipment-request-table.component.scss'],
})
export class ShipmentRequestTableComponent {
  @Input()
  shipmentRequests: ShipmentRequestFragment[] = [];

  @Input()
  loading = false;

  @Input()
  totalRecords = 0;

  @Input()
  permissionDetails = '';

  @Input()
  permissionUpdate = '';

  @Input()
  permissionDelete = '';

  @Output()
  readonly lazyLoad = new EventEmitter<LazyLoadEvent>();

  @Output()
  readonly details = new EventEmitter<ShipmentRequestFragment>();

  @Output()
  readonly update = new EventEmitter<ShipmentRequestFragment>();

  @Output()
  readonly cancel = new EventEmitter<ShipmentRequestFragment>();

  @Output()
  readonly timeline = new EventEmitter<ShipmentRequestFragment>();

  onLazyLoad(event: LazyLoadEvent): void {
    this.lazyLoad.emit(event);
  }

  onDetails(request: ShipmentRequestFragment): void {
    this.details.emit(request);
  }

  onUpdate(request: ShipmentRequestFragment): void {
    this.update.emit(request);
  }

  onCancel(request: ShipmentRequestFragment): void {
    this.cancel.emit(request);
  }

  onTimeline(request: ShipmentRequestFragment) {
    this.timeline.emit(request);
  }

  showUpdate({ status }: ShipmentRequestFragment) {
    return status === ShipmentRequestStatus.Created || status === ShipmentRequestStatus.Sent;
  }

  showCancel({ status }: ShipmentRequestFragment) {
    return status === ShipmentRequestStatus.Created;
  }

  getStatus({ status }: ShipmentRequestFragment) {
    return getEnumKey(status, ShipmentRequestStatus);
  }
}
