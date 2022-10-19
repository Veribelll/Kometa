import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { EmexOrderFragment, EmexOrderStatus } from '@kometa/smde/emex/order/types';
import { getEnumKey } from '@kometa/shared/utils';

@Component({
  selector: 'kometa-emex-order-table',
  templateUrl: './emex-order-table.component.html',
  styleUrls: ['./emex-order-table.component.scss'],
})
export class EmexOrderTableComponent {
  @Input()
  orders: EmexOrderFragment[] = [];

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
  readonly details = new EventEmitter<EmexOrderFragment>();

  @Output()
  readonly update = new EventEmitter<EmexOrderFragment>();

  @Output()
  readonly delete = new EventEmitter<EmexOrderFragment>();

  onLazyLoad(event: LazyLoadEvent): void {
    this.lazyLoad.emit(event);
  }

  onDetails(order: EmexOrderFragment): void {
    this.details.emit(order);
  }

  onUpdate(order: EmexOrderFragment): void {
    this.update.emit(order);
  }

  onDelete(order: EmexOrderFragment): void {
    this.delete.emit(order);
  }

  getStatus(order: EmexOrderFragment) {
    return getEnumKey(order.status, EmexOrderStatus);
  }
}
