import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CellDetailFragment, CellStatus, TypeCell } from '@kometa/shared/postamat/cell/types';
import { PackingPlaceFragment, PackingPlaceStatus } from '@kometa/smde/packing-place/types';
import { getEnumKey } from '@kometa/shared/utils';

@Component({
  selector: 'kometa-cell-detail-form',
  templateUrl: './cell-detail-form.component.html',
  styleUrls: ['./cell-detail-form.component.scss'],
})
export class CellDetailFormComponent {
  @Input()
  cell?: CellDetailFragment;

  @Output()
  readonly packingPlaceDetails = new EventEmitter<PackingPlaceFragment>();

  onPackingPlaceDetails(packingPlace: PackingPlaceFragment) {
    this.packingPlaceDetails.emit(packingPlace);
  }

  getTypeCell({ type }: CellDetailFragment) {
    return getEnumKey(type, TypeCell);
  }

  getStatusCell({ status }: CellDetailFragment) {
    return getEnumKey(status, CellStatus);
  }

  getStatusPackingPlace({ status }: PackingPlaceFragment) {
    return getEnumKey(status, PackingPlaceStatus);
  }
}
