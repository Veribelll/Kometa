import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TemplateCellCreateDialogComponent } from './template-cell-create-dialog/template-cell-create-dialog.component';
import { TemplateCellDeleteDialogComponent } from './template-cell-delete-dialog/template-cell-delete-dialog.component';
import { TemplateCellDetailDialogComponent } from './template-cell-detail-dialog/template-cell-detail-dialog.component';
import { TemplateCellUpdateDialogComponent } from './template-cell-update-dialog/template-cell-update-dialog.component';
import { TemplateCellFragment } from '@kometa/smde/topology/template-cell/types';

@Injectable({
  providedIn: 'root',
})
export class TemplateCellDialogService {
  constructor(private readonly dialogService: DialogService) {}

  openCreate(): DynamicDialogRef {
    return this.dialogService.open(TemplateCellCreateDialogComponent, {
      header: 'Добавить шаблон ячейки',
      width: '600px',
    });
  }

  openUpdate(templateCell: TemplateCellFragment): DynamicDialogRef {
    return this.dialogService.open(TemplateCellUpdateDialogComponent, {
      header: 'Изменить шаблон ячейки',
      width: '500px',
      data: {
        templateCell,
      },
    });
  }

  openDetail(templateCell: TemplateCellFragment): DynamicDialogRef {
    return this.dialogService.open(TemplateCellDetailDialogComponent, {
      header: 'Шаблон ячейки',
      width: '500px',
      data: {
        templateCell,
      },
    });
  }

  openDelete(templateCell: TemplateCellFragment): DynamicDialogRef {
    return this.dialogService.open(TemplateCellDeleteDialogComponent, {
      header: 'Удалить',
      width: '500px',
      data: {
        templateCell,
      },
    });
  }
}
