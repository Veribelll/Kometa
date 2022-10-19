import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PackingPlaceTimelineDialogComponent } from './packing-place-timeline-dialog/packing-place-timeline-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class PackingPlaceTimelineDialogService {
  constructor(private readonly dialogService: DialogService) {}

  open(packingPlaceId: string, config?: DynamicDialogConfig): DynamicDialogRef {
    return this.dialogService.open(PackingPlaceTimelineDialogComponent, {
      header: 'История',
      width: '600px',
      data: {
        packingPlaceId,
      },
      ...config,
    });
  }
}
