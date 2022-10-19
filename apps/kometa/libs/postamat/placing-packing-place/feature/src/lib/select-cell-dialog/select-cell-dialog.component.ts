import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PackingPlaceForPlacementFragment } from '@kometa/postamat/placing-packing-place/types';
import { Cell } from '@kometa/shared/topology/ui';

@Component({
  selector: 'kometa-select-cell-dialog',
  templateUrl: './select-cell-dialog.component.html',
  styleUrls: ['./select-cell-dialog.component.scss'],
})
export class SelectCellDialogComponent {
  readonly postamatId: string;
  readonly disables: { cellId: string }[];
  select?: Cell;

  constructor(
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig
  ) {
    const { postamatId, disables } = this.config.data;

    this.postamatId = postamatId;
    this.disables = disables;
  }

  onSelect() {
    this.ref.close(this.select?.cellId);
  }

  onCancel() {
    this.ref.close();
  }
}
