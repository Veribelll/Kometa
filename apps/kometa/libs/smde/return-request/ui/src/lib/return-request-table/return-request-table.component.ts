import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReturnRequestFragment, ReturnRequestStatus } from '@kometa/smde/return-request/types';
import { LazyLoadEvent } from 'primeng/api';
import { getEnumKey } from '@kometa/shared/utils';

@Component({
  selector: 'kometa-return-request-table',
  templateUrl: './return-request-table.component.html',
  styleUrls: ['./return-request-table.component.scss'],
})
export class ReturnRequestTableComponent {
  @Input()
  returnRequests: ReturnRequestFragment[] = [];

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

  @Input()
  permissionReturn = '';

  @Input()
  permissionCancel = '';

  @Output()
  readonly lazyLoad = new EventEmitter<LazyLoadEvent>();

  @Output()
  readonly details = new EventEmitter<ReturnRequestFragment>();

  @Output()
  readonly update = new EventEmitter<ReturnRequestFragment>();

  @Output()
  readonly delete = new EventEmitter<ReturnRequestFragment>();

  @Output()
  readonly return = new EventEmitter<ReturnRequestFragment>();

  @Output()
  readonly cancel = new EventEmitter<ReturnRequestFragment>();

  @Output()
  readonly timeline = new EventEmitter<ReturnRequestFragment>();

  showUpdate({ status }: ReturnRequestFragment) {
    return status !== ReturnRequestStatus.Returned && status !== ReturnRequestStatus.Canceled;
  }

  showReturn({ status }: ReturnRequestFragment) {
    return status === ReturnRequestStatus.AtCourier;
  }

  showCancel({ status }: ReturnRequestFragment) {
    return status === ReturnRequestStatus.AtCourier || status === ReturnRequestStatus.InLastMile;
  }

  onLazyLoad(event: LazyLoadEvent): void {
    this.lazyLoad.emit(event);
  }

  onDetails(request: ReturnRequestFragment): void {
    this.details.emit(request);
  }

  onUpdate(request: ReturnRequestFragment): void {
    this.update.emit(request);
  }

  onDelete(request: ReturnRequestFragment): void {
    this.delete.emit(request);
  }

  onReturn(request: ReturnRequestFragment) {
    this.return.emit(request);
  }

  onCancel(request: ReturnRequestFragment): void {
    this.cancel.emit(request);
  }

  onTimeline(request: ReturnRequestFragment) {
    this.timeline.emit(request);
  }

  getStatus({ status }: ReturnRequestFragment) {
    return getEnumKey(status, ReturnRequestStatus);
  }
}
