import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'kometa-shift-packing-place-dialog',
  templateUrl: './shift-packing-place-dialog.component.html',
  styleUrls: ['./shift-packing-place-dialog.component.scss'],
})
export class ShiftPackingPlaceDialogComponent {
  readonly postamatId: string;

  constructor(
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig
  ) {
    const { postamatId } = this.config.data;

    this.postamatId = postamatId;
  }
}
