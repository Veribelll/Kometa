import { Component } from '@angular/core';
import { ShipmentRequestFragment } from '@kometa/smde/shipment-request/types';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PackingPlaceDetailDialogService } from '@kometa/shared/packing-place/feature';

@Component({
  selector: 'kometa-shipment-request-detail-dialog',
  templateUrl: './shipment-request-detail-dialog.component.html',
  styleUrls: ['./shipment-request-detail-dialog.component.scss'],
})
export class ShipmentRequestDetailDialogComponent {
  readonly request: ShipmentRequestFragment;

  constructor(
    private readonly packingPlaceDialogService: PackingPlaceDetailDialogService,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig
  ) {
    const { request } = this.config.data;

    this.request = request;
  }

  onPackingPlaceDetails({ id }: { id: string }) {
    this.packingPlaceDialogService.open(id);
  }

  onCancel(): void {
    this.ref.close();
  }
}
