import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'kometa-return-periods-page-dialog',
  templateUrl: './return-periods-page-dialog.component.html',
  styleUrls: ['./return-periods-page-dialog.component.scss']
})
export class ReturnPeriodsPageDialogComponent {
  readonly lastMileId: string;

  constructor(
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig
  ) {
    const { lastMileId } = this.config.data;

    this.lastMileId = lastMileId;
  }
}
