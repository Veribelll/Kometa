import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { LastMileStoragePeriodFragment } from '@kometa/smde/last-mile/storage-period/types';
import { StoragePeriodUpdateDialogComponent } from './storage-period-update-dialog/storage-period-update-dialog.component';
import { StoragePeriodsPageDialogComponent } from './storage-periods-page-dialog/storage-periods-page-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class StoragePeriodDialogService {
  constructor(private readonly dialogService: DialogService) {}

  openPage(lastMileId: string): DynamicDialogRef {
    return this.dialogService.open(StoragePeriodsPageDialogComponent, {
      header: 'Периоды хранения',
      width: '900px',
      data: {
        lastMileId,
      },
    });
  }

  openUpdate(lastMileId: string, storagePeriod?: LastMileStoragePeriodFragment): DynamicDialogRef {
    return this.dialogService.open(StoragePeriodUpdateDialogComponent, {
      header: 'Изменить период',
      width: '500px',
      data: {
        lastMileId,
        storagePeriod,
      },
    });
  }
}
