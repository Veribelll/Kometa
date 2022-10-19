import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CompanyCreateDialogComponent } from './company-create-dialog/company-create-dialog.component';
import { CompanyDeleteDialogComponent } from './company-delete-dialog/company-delete-dialog.component';
import { CompanyDetailDialogComponent } from './company-detail-dialog/company-detail-dialog.component';
import { CompanyUpdateDialogComponent } from './company-update-dialog/company-update-dialog.component';
import { CompanyFragment } from '@kometa/smde/contractor/types';

@Injectable()
export class CompanyDialogService {
  constructor(private readonly dialogService: DialogService) {}

  openCreate(): DynamicDialogRef {
    return this.dialogService.open(CompanyCreateDialogComponent, {
      header: 'Добавить компанию',
      width: '700px',
    });
  }

  openUpdate(id: string): DynamicDialogRef {
    return this.dialogService.open(CompanyUpdateDialogComponent, {
      header: 'Изменить компанию',
      width: '700px',
      data: {
        id,
      },
    });
  }

  openDetail(id: string): DynamicDialogRef {
    return this.dialogService.open(CompanyDetailDialogComponent, {
      header: 'Компания',
      width: '700px',
      data: {
        id,
      },
    });
  }

  openDelete(company: CompanyFragment): DynamicDialogRef {
    return this.dialogService.open(CompanyDeleteDialogComponent, {
      header: 'Удалить',
      width: '500px',
      data: {
        company,
      },
    });
  }
}
