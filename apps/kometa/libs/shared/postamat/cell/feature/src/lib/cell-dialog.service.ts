import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CellCreateDialogComponent } from './cell-create-dialog/cell-create-dialog.component';
import { CellDeleteDialogComponent } from './cell-delete-dialog/cell-delete-dialog.component';
import { CellUpdateDialogComponent } from './cell-update-dialog/cell-update-dialog.component';
import { CellsDialogComponent } from './cells-dialog/cells-dialog.component';
import { CellFragment } from '@kometa/shared/postamat/cell/types';
import { CellDetailDialogComponent } from './cell-detail-dialog/cell-detail-dialog.component';
import { AssignLockToCellDialogComponent } from './assign-lock-to-cell-dialog/assign-lock-to-cell-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class CellDialogService {
  constructor(private readonly dialogService: DialogService) {}

  openPage(postamatId: string): DynamicDialogRef {
    return this.dialogService.open(CellsDialogComponent, {
      header: 'Ячейки',
      width: '1300px',
      data: {
        postamatId,
      },
    });
  }

  openCreate(postamatId: string): DynamicDialogRef {
    return this.dialogService.open(CellCreateDialogComponent, {
      header: 'Добавить ячейку',
      width: '500px',
      data: {
        postamatId,
      },
    });
  }

  openUpdate(postamatId: string, cell: CellFragment): DynamicDialogRef {
    return this.dialogService.open(CellUpdateDialogComponent, {
      header: 'Изменить ячейку',
      width: '500px',
      data: {
        postamatId,
        cell,
      },
    });
  }

  openDelete(postamatId: string, cell: CellFragment): DynamicDialogRef {
    return this.dialogService.open(CellDeleteDialogComponent, {
      header: 'Удалить ячейку',
      width: '500px',
      data: {
        postamatId,
        cell,
      },
    });
  }

  openDetail(cellId: string): DynamicDialogRef {
    return this.dialogService.open(CellDetailDialogComponent, {
      header: 'Ячейка',
      width: '1000px',
      data: {
        cellId,
      },
    });
  }

  openAssignLock(postamatId: string, cell: CellFragment): DynamicDialogRef {
    return this.dialogService.open(AssignLockToCellDialogComponent, {
      header: 'Назначить замок',
      width: '500px',
      data: {
        postamatId,
        cell,
      },
    });
  }
}
