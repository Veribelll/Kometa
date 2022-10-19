import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PrimeNgSelectionMode } from '@kometa/shared/primeng/ui-table';
import { PackingPlaceFragment, PackingPlaceStatus } from '@kometa/smde/packing-place/types';
import { LazyLoadEvent } from 'primeng/api';
import { getEnumKey } from '@kometa/shared/utils';

type SelectedType = PackingPlaceFragment | PackingPlaceFragment[];

@Component({
  selector: 'kometa-packing-place-select-table',
  templateUrl: './packing-place-select-table.component.html',
  styleUrls: ['./packing-place-select-table.component.scss'],
})
export class PackingPlaceSelectTableComponent {
  @Input()
  packingPlaces: PackingPlaceFragment[] = [];

  @Input()
  totalRecords = 0;

  @Input()
  loading = false;

  @Input()
  permissionDetails = '';

  @Input()
  selected?: SelectedType;

  @Input()
  selectionMode?: PrimeNgSelectionMode;

  @Output()
  readonly lazyLoad = new EventEmitter<LazyLoadEvent>();

  @Output()
  readonly details = new EventEmitter<PackingPlaceFragment>();

  @Output()
  readonly selectedChange = new EventEmitter<SelectedType>();

  onLazyLoad(event: LazyLoadEvent): void {
    this.lazyLoad.emit(event);
  }

  onDetails(packingPlace: PackingPlaceFragment): void {
    this.details.emit(packingPlace);
  }

  onSelectedChange(selected: SelectedType) {
    this.selectedChange.emit(selected);
  }

  getStatus(packingPlace: PackingPlaceFragment) {
    return getEnumKey(packingPlace.status, PackingPlaceStatus);
  }
}
