import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'kometa-locks-page-dialog',
  templateUrl: './locks-page-dialog.component.html',
  styleUrls: ['./locks-page-dialog.component.scss'],
})
export class LocksPageDialogComponent {
  readonly postamatId: string;

  constructor(
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig
  ) {
    const { postamatId } = this.config.data;

    this.postamatId = postamatId;
  }
}
