import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { LastMileReturnPeriodFragment } from '@kometa/smde/last-mile/return-period/types';
import { ReturnPeriodsPageDialogComponent } from './return-periods-page-dialog/return-periods-page-dialog.component';
import { ReturnPeriodUpdateDialogComponent } from './return-period-update-dialog/return-period-update-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ReturnPeriodDialogService {
  constructor(private readonly dialogService: DialogService) {}

  openPage(lastMileId: string): DynamicDialogRef {
    return this.dialogService.open(ReturnPeriodsPageDialogComponent, {
      header: 'Периоды возврата',
      width: '900px',
      data: {
        lastMileId,
      },
    });
  }

  openUpdate(lastMileId: string, returnPeriod?: LastMileReturnPeriodFragment): DynamicDialogRef {
    return this.dialogService.open(ReturnPeriodUpdateDialogComponent, {
      header: 'Изменить период',
      width: '500px',
      data: {
        lastMileId,
        returnPeriod,
      },
    });
  }
}
