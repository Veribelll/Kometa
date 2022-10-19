import { Component } from '@angular/core';
import { ReturnRequestFragment } from '@kometa/smde/return-request/types';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'kometa-return-request-timeline-dialog',
  templateUrl: './return-request-timeline-dialog.component.html',
  styleUrls: ['./return-request-timeline-dialog.component.scss'],
})
export class ReturnRequestTimelineDialogComponent {
  readonly request: ReturnRequestFragment;

  constructor(
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig
  ) {
    const { request } = this.config.data;

    this.request = request;
  }
}
