import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'kometa-access-keys-dialog',
  templateUrl: './access-keys-dialog.component.html',
  styleUrls: ['./access-keys-dialog.component.scss'],
})
export class AccessKeysDialogComponent {
  readonly lastMileId: string;

  constructor(
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig
  ) {
    const { lastMileId } = this.config.data;

    this.lastMileId = lastMileId;
  }
}
