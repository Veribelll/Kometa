import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { LastMileReturnPeriodFragment } from '@kometa/smde/last-mile/return-period/types';

@Component({
  selector: 'kometa-return-period-table',
  templateUrl: './return-period-table.component.html',
  styleUrls: ['./return-period-table.component.scss']
})
export class ReturnPeriodTableComponent {
  @Input()
  returnPeriods: LastMileReturnPeriodFragment[] = [];

  @Input()
  loading = false;

  @Input()
  permissionUpdate = '';

  @Output()
  readonly lazyLoad = new EventEmitter<LazyLoadEvent>();

  @Output()
  update = new EventEmitter<LastMileReturnPeriodFragment>();

  onLazyLoad(event: LazyLoadEvent): void {
    this.lazyLoad.emit(event);
  }

  onUpdate(returnPeriod: LastMileReturnPeriodFragment): void {
    this.update.emit(returnPeriod);
  }
}
