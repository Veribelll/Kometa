import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PackingPlaceCreateDialogComponent } from './packing-place-create-dialog/packing-place-create-dialog.component';
import { PackingPlaceDeleteDialogComponent } from './packing-place-delete-dialog/packing-place-delete-dialog.component';
import { PackingPlaceUpdateDialogComponent } from './packing-place-update-dialog/packing-place-update-dialog.component';
import { PackingPlaceFragment } from '@kometa/smde/packing-place/types';
import { PackingPlaceSendDialogComponent } from './packing-place-send-dialog/packing-place-send-dialog.component';
import {
  PackingPlaceDetailDialogService,
  PackingPlaceTimelineDialogService,
} from '@kometa/shared/packing-place/feature';

@Injectable({
  providedIn: 'root',
})
export class PackingPlaceDialogService {
  constructor(
    private readonly dialogService: DialogService,
    private readonly detailDialogService: PackingPlaceDetailDialogService,
    private readonly timelineDialogService: PackingPlaceTimelineDialogService
  ) {}

  openCreate(barcode?: string): DynamicDialogRef {
    return this.dialogService.open(PackingPlaceCreateDialogComponent, {
      header: 'Добавить упаковочное место',
      width: '500px',
      data: {
        barcode,
      },
    });
  }

  openUpdate(packingPlace: PackingPlaceFragment): DynamicDialogRef {
    return this.dialogService.open(PackingPlaceUpdateDialogComponent, {
      header: 'Изменить упаковочное место',
      width: '500px',
      data: {
        packingPlace,
      },
    });
  }

  openDetail(packingPlaceId: string): DynamicDialogRef {
    return this.detailDialogService.open(packingPlaceId);
  }

  openDelete(packingPlace: PackingPlaceFragment): DynamicDialogRef {
    return this.dialogService.open(PackingPlaceDeleteDialogComponent, {
      header: 'Удалить',
      width: '500px',
      data: {
        packingPlace,
      },
    });
  }

  openSend(packingPlace: PackingPlaceFragment): DynamicDialogRef {
    return this.dialogService.open(PackingPlaceSendDialogComponent, {
      header: 'Отправка',
      width: '500px',
      data: {
        packingPlace,
      },
    });
  }

  openTimeline(packingPlaceId: string): DynamicDialogRef {
    return this.timelineDialogService.open(packingPlaceId);
  }
}
