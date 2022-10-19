import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { LocksPageDialogComponent } from './locks-page-dialog/locks-page-dialog.component';

@Injectable()
export class LockDialogService {
  constructor(private readonly dialogService: DialogService) {}

  openPage(postamatId: string): DynamicDialogRef {
    return this.dialogService.open(LocksPageDialogComponent, {
      header: 'Замки',
      width: '750px',
      data: {
        postamatId,
      },
    });
  }
}
