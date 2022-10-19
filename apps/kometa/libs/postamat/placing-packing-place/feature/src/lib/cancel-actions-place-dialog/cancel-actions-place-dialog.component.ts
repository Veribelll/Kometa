import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import {
  GetDataForPlacingPackingPlaceQuery,
  PackingPlaceForPlacementFragment,
} from '@kometa/postamat/placing-packing-place/types';

type Cell = GetDataForPlacingPackingPlaceQuery['postamatById']['cells'][0];
type Placed = { packingPlace: PackingPlaceForPlacementFragment; cell: Cell };

@Component({
  selector: 'kometa-cancel-actions-place-dialog',
  templateUrl: './cancel-actions-place-dialog.component.html',
  styleUrls: ['./cancel-actions-place-dialog.component.scss'],
})
export class CancelActionsPlaceDialogComponent {
  selected?: Placed;
  placedList: Placed[] = [];

  constructor(
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig
  ) {
    const { placedList } = this.config.data;

    this.placedList = [...placedList];
  }

  onCancel() {
    if (this.selected) {
      this.placedList = this.placedList.filter(
        (x) => x.packingPlace.id !== this.selected?.packingPlace.id
      );
      this.selected = undefined;
    }
  }

  onExit() {
    this.ref.close(this.placedList);
  }
}
