import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TemplateSectionCreateDialogComponent } from './template-section-create-dialog/template-section-create-dialog.component';
import { TemplateSectionDeleteDialogComponent } from './template-section-delete-dialog/template-section-delete-dialog.component';
import { TemplateSectionDetailDialogComponent } from './template-section-detail-dialog/template-section-detail-dialog.component';
import { TemplateSectionUpdateDialogComponent } from './template-section-update-dialog/template-section-update-dialog.component';
import { TemplateSectionFragment } from '@kometa/smde/topology/template-section/types';

@Injectable({
  providedIn: 'root',
})
export class TemplateSectionDialogService {
  constructor(private readonly dialogService: DialogService) {}

  openCreate(): DynamicDialogRef {
    return this.dialogService.open(TemplateSectionCreateDialogComponent, {
      header: 'Добавить шаблон секции',
      width: '700px',
    });
  }

  openUpdate(templateSection: TemplateSectionFragment): DynamicDialogRef {
    return this.dialogService.open(TemplateSectionUpdateDialogComponent, {
      header: 'Изменить шаблон секции',
      width: '500px',
      data: {
        templateSection,
      },
    });
  }

  openDetail(templateSection: TemplateSectionFragment): DynamicDialogRef {
    return this.dialogService.open(TemplateSectionDetailDialogComponent, {
      header: 'Шаблон секции',
      width: '400px',
      data: {
        templateSection,
      },
    });
  }

  openDelete(templateSection: TemplateSectionFragment): DynamicDialogRef {
    return this.dialogService.open(TemplateSectionDeleteDialogComponent, {
      header: 'Удалить',
      width: '500px',
      data: {
        templateSection,
      },
    });
  }
}
