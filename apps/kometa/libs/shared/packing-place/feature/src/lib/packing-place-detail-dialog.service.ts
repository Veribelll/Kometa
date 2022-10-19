import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PackingPlaceDetailDialogComponent } from './packing-place-detail-dialog/packing-place-detail-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class PackingPlaceDetailDialogService {
  constructor(private readonly dialogService: DialogService) {}

  open(packingPlaceId: string, config?: DynamicDialogConfig): DynamicDialogRef {
    return this.dialogService.open(PackingPlaceDetailDialogComponent, {
      header: 'Упаковочное место',
      width: '1100px',
      data: {
        packingPlaceId,
      },
      ...config,
    });
  }
}
