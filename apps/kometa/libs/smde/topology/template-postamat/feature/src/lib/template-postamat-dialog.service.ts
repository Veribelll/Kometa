import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TemplatePostamatCreateDialogComponent } from './template-postamat-create-dialog/template-postamat-create-dialog.component';
import { TemplatePostamatDeleteDialogComponent } from './template-postamat-delete-dialog/template-postamat-delete-dialog.component';
import { TemplatePostamatDetailDialogComponent } from './template-postamat-detail-dialog/template-postamat-detail-dialog.component';
import { TemplatePostamatUpdateDialogComponent } from './template-postamat-update-dialog/template-postamat-update-dialog.component';
import { TemplatePostamatFragment } from '@kometa/smde/topology/template-postamat/types';

@Injectable({
  providedIn: 'root',
})
export class TemplatePostamatDialogService {
  constructor(private readonly dialogService: DialogService) {}

  openCreate(): DynamicDialogRef {
    return this.dialogService.open(TemplatePostamatCreateDialogComponent, {
      header: 'Добавить шаблон постамата',
      width: '1400px',
    });
  }

  openUpdate(templatePostamat: TemplatePostamatFragment): DynamicDialogRef {
    return this.dialogService.open(TemplatePostamatUpdateDialogComponent, {
      header: 'Изменить шаблон постамата',
      width: '1400px',
      data: {
        templatePostamat,
      },
    });
  }

  openDetail(templatePostamat: TemplatePostamatFragment): DynamicDialogRef {
    return this.dialogService.open(TemplatePostamatDetailDialogComponent, {
      header: 'Шаблон постамата',
      width: '1400px',
      data: {
        templatePostamat,
      },
    });
  }

  openDelete(templatePostamat: TemplatePostamatFragment): DynamicDialogRef {
    return this.dialogService.open(TemplatePostamatDeleteDialogComponent, {
      header: 'Удалить',
      width: '500px',
      data: {
        templatePostamat,
      },
    });
  }
}
