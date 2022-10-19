import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PackingPlaceFragment, PackingPlaceStatus } from '@kometa/smde/packing-place/types';
import { LazyLoadEvent } from 'primeng/api';
import { getEnumKey } from '@kometa/shared/utils';

@Component({
  selector: 'kometa-packing-place-table',
  templateUrl: './packing-place-table.component.html',
  styleUrls: ['./packing-place-table.component.scss'],
})
export class PackingPlaceTableComponent {
  @Input()
  packingPlaces: PackingPlaceFragment[] = [];

  @Input()
  totalRecords = 0;

  @Input()
  loading = false;

  @Input()
  permissionDetails = '';

  @Input()
  permissionUpdate = '';

  @Input()
  permissionDelete = '';

  @Output()
  readonly lazyLoad = new EventEmitter<LazyLoadEvent>();

  @Output()
  readonly details = new EventEmitter<PackingPlaceFragment>();

  @Output()
  readonly update = new EventEmitter<PackingPlaceFragment>();

  @Output()
  readonly delete = new EventEmitter<PackingPlaceFragment>();

  @Output()
  readonly send = new EventEmitter<PackingPlaceFragment>();

  @Output()
  readonly timeline = new EventEmitter<PackingPlaceFragment>();

  showSend({ status }: PackingPlaceFragment) {
    return status === PackingPlaceStatus.Created || status === PackingPlaceStatus.InProcessSend;
  }

  onLazyLoad(event: LazyLoadEvent): void {
    this.lazyLoad.emit(event);
  }

  onDetails(packingPlace: PackingPlaceFragment): void {
    this.details.emit(packingPlace);
  }

  onUpdate(packingPlace: PackingPlaceFragment): void {
    this.update.emit(packingPlace);
  }

  onDelete(packingPlace: PackingPlaceFragment): void {
    this.delete.emit(packingPlace);
  }

  onSend(packingPlace: PackingPlaceFragment) {
    this.send.emit(packingPlace);
  }

  onTimeline(packingPlace: PackingPlaceFragment) {
    this.timeline.emit(packingPlace);
  }

  getStatus(packingPlace: PackingPlaceFragment) {
    return getEnumKey(packingPlace.status, PackingPlaceStatus);
  }
}
