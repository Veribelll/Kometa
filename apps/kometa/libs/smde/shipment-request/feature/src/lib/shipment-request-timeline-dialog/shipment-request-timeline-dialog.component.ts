import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ShipmentRequestFragment } from '@kometa/smde/shipment-request/types';

@Component({
  selector: 'kometa-shipment-request-timeline-dialog',
  templateUrl: './shipment-request-timeline-dialog.component.html',
  styleUrls: ['./shipment-request-timeline-dialog.component.scss'],
})
export class ShipmentRequestTimelineDialogComponent {
  readonly request: ShipmentRequestFragment;

  constructor(
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig
  ) {
    const { request } = this.config.data;

    this.request = request;
  }
}
