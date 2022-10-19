import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LastMileFragment } from '@kometa/smde/last-mile/types';
import { PrimeNgSelectionMode } from '@kometa/shared/primeng/ui-table';
import { LazyLoadEvent } from 'primeng/api';

type SelectedType = LastMileFragment | LastMileFragment[];

@Component({
  selector: 'kometa-last-mile-select-table',
  templateUrl: './last-mile-select-table.component.html',
  styleUrls: ['./last-mile-select-table.component.scss'],
})
export class LastMileSelectTableComponent {
  @Input()
  lastMiles: LastMileFragment[] = [];

  @Input()
  totalRecords = 0;

  @Input()
  loading = false;

  @Input()
  selected?: SelectedType;

  @Input()
  selectionMode?: PrimeNgSelectionMode;

  @Output()
  readonly lazyLoad = new EventEmitter<LazyLoadEvent>();

  @Output()
  readonly selectedChange = new EventEmitter<SelectedType>();

  onLazyLoad(event: LazyLoadEvent): void {
    this.lazyLoad.emit(event);
  }

  onSelectedChange(selected: SelectedType) {
    this.selectedChange.emit(selected);
  }
}
