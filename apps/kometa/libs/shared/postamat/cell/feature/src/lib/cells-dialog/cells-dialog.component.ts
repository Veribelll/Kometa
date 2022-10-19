import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'kometa-cells-dialog',
  templateUrl: './cells-dialog.component.html',
  styleUrls: ['./cells-dialog.component.scss'],
})
export class CellsDialogComponent {
  readonly postamatId: string;

  constructor(
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig
  ) {
    const { postamatId } = this.config.data;

    this.postamatId = postamatId;
  }
}
