import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CourierFragment } from '@kometa/smde/courier/types';
import { PrimeNgSelectionMode } from '@kometa/shared/primeng/ui-table';
import { LazyLoadEvent } from 'primeng/api';

type SelectedType = CourierFragment | CourierFragment[];

@Component({
  selector: 'kometa-courier-select-table',
  templateUrl: './courier-select-table.component.html',
  styleUrls: ['./courier-select-table.component.scss'],
})
export class CourierSelectTableComponent {
  @Input()
  couriers: CourierFragment[] = [];

  @Input()
  loading = false;

  @Input()
  totalRecords = 0;

  @Input()
  selected?: SelectedType;

  @Input()
  selectionMode: PrimeNgSelectionMode = 'single';

  @Output()
  readonly lazyLoad = new EventEmitter<LazyLoadEvent>();

  @Output()
  readonly details = new EventEmitter<CourierFragment>();

  @Output()
  readonly selectedChange = new EventEmitter<SelectedType>();

  onLazyLoad(event: LazyLoadEvent): void {
    this.lazyLoad.emit(event);
  }

  onDetails(courier: CourierFragment): void {
    this.details.emit(courier);
  }

  onSelectedChange(selected: SelectedType) {
    this.selectedChange.emit(selected);
  }
}
