import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicDialogConfig } from 'primeng/dynamicdialog/dynamicdialog-config';
import { TenantCreateDialogComponent } from './tenant-create-dialog/tenant-create-dialog.component';
import { TenantDeleteDialogComponent } from './tenant-delete-dialog/tenant-delete-dialog.component';
import { TenantDetailDialogComponent } from './tenant-detail-dialog/tenant-detail-dialog.component';
import { TenantUpdateDialogComponent } from './tenant-update-dialog/tenant-update-dialog.component';
import { TenantFragment } from '@kometa/smde/tenant/types';

@Injectable({
  providedIn: 'root',
})
export class TenantDialogService {
  constructor(private readonly dialogService: DialogService) {}

  openCreate(config: DynamicDialogConfig = {}): DynamicDialogRef {
    return this.dialogService.open(TenantCreateDialogComponent, {
      header: 'Добавить арендатора',
      width: '900px',
      ...config,
    });
  }

  openUpdate(tenant: TenantFragment, config: DynamicDialogConfig = {}): DynamicDialogRef {
    return this.dialogService.open(TenantUpdateDialogComponent, {
      header: 'Изменить арендатора',
      width: '500px',
      data: {
        tenant,
      },
      ...config,
    });
  }

  openDetail(tenant: TenantFragment, config: DynamicDialogConfig = {}): DynamicDialogRef {
    return this.dialogService.open(TenantDetailDialogComponent, {
      header: 'Арендатор',
      width: '500px',
      data: {
        tenant,
      },
      ...config,
    });
  }

  openDelete(tenant: TenantFragment, config: DynamicDialogConfig = {}): DynamicDialogRef {
    return this.dialogService.open(TenantDeleteDialogComponent, {
      header: 'Удалить',
      width: '500px',
      data: {
        tenant,
      },
      ...config,
    });
  }
}
