import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PackingPlaceAcceptedFragment } from '@kometa/postamat/admin-panel/types';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'kometa-packing-place-accepted-table',
  templateUrl: './packing-place-accepted-table.component.html',
  styleUrls: ['./packing-place-accepted-table.component.scss'],
})
export class PackingPlaceAcceptedTableComponent {
  @Input()
  packingPlaces: PackingPlaceAcceptedFragment[] = [];

  @Input()
  totalRecords = 0;

  @Input()
  loading = false;

  @Input()
  permissionDetails = '';

  @Output()
  readonly lazyLoad = new EventEmitter<LazyLoadEvent>();

  @Output()
  readonly details = new EventEmitter<PackingPlaceAcceptedFragment>();

  @Output()
  readonly timeline = new EventEmitter<PackingPlaceAcceptedFragment>();

  onLazyLoad(event: LazyLoadEvent): void {
    this.lazyLoad.emit(event);
  }

  onDetails(packingPlace: PackingPlaceAcceptedFragment): void {
    this.details.emit(packingPlace);
  }

  onTimeline(packingPlace: PackingPlaceAcceptedFragment) {
    this.timeline.emit(packingPlace);
  }
}
