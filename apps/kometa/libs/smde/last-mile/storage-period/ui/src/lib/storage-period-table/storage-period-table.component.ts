import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LastMileStoragePeriodFragment } from '@kometa/smde/last-mile/storage-period/types';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'kometa-storage-period-table',
  templateUrl: './storage-period-table.component.html',
  styleUrls: ['./storage-period-table.component.scss'],
})
export class StoragePeriodTableComponent {
  @Input()
  storagePeriods: LastMileStoragePeriodFragment[] = [];

  @Input()
  loading = false;

  @Input()
  permissionUpdate = '';

  @Output()
  readonly lazyLoad = new EventEmitter<LazyLoadEvent>();

  @Output()
  update = new EventEmitter<LastMileStoragePeriodFragment>();

  onLazyLoad(event: LazyLoadEvent): void {
    this.lazyLoad.emit(event);
  }

  onUpdate(storagePeriod: LastMileStoragePeriodFragment): void {
    this.update.emit(storagePeriod);
  }
}
