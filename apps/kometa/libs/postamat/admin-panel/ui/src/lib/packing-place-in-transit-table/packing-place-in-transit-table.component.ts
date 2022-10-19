import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PackingPlaceInTransitFragment } from '@kometa/postamat/admin-panel/types';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'kometa-packing-place-in-transit-table',
  templateUrl: './packing-place-in-transit-table.component.html',
  styleUrls: ['./packing-place-in-transit-table.component.scss'],
})
export class PackingPlaceInTransitTableComponent {
  @Input()
  packingPlaces: PackingPlaceInTransitFragment[] = [];

  @Input()
  totalRecords = 0;

  @Input()
  loading = false;

  @Input()
  permissionDetails = '';

  @Output()
  readonly lazyLoad = new EventEmitter<LazyLoadEvent>();

  @Output()
  readonly details = new EventEmitter<PackingPlaceInTransitFragment>();

  @Output()
  readonly timeline = new EventEmitter<PackingPlaceInTransitFragment>();

  onLazyLoad(event: LazyLoadEvent): void {
    this.lazyLoad.emit(event);
  }

  onDetails(packingPlace: PackingPlaceInTransitFragment): void {
    this.details.emit(packingPlace);
  }

  onTimeline(packingPlace: PackingPlaceInTransitFragment) {
    this.timeline.emit(packingPlace);
  }
}
