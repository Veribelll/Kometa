import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'kometa-storage-periods-page-dialog',
  templateUrl: './storage-periods-page-dialog.component.html',
  styleUrls: ['./storage-periods-page-dialog.component.scss'],
})
export class StoragePeriodsPageDialogComponent {
  readonly lastMileId: string;

  constructor(
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig
  ) {
    const { lastMileId } = this.config.data;

    this.lastMileId = lastMileId;
  }
}
