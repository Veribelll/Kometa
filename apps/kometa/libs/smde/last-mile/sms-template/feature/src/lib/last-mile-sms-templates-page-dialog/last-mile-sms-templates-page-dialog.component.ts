import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'kometa-last-mile-sms-templates-page-dialog',
  templateUrl: './last-mile-sms-templates-page-dialog.component.html',
  styleUrls: ['./last-mile-sms-templates-page-dialog.component.scss'],
})
export class LastMileSmsTemplatesPageDialogComponent {
  readonly lastMileId: string;

  constructor(
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig
  ) {
    const { lastMileId } = this.config.data;

    this.lastMileId = lastMileId;
  }
}
