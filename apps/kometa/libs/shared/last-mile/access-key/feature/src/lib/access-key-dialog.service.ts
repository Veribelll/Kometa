import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AccessKeyDeleteDialogComponent } from './access-key-delete-dialog/access-key-delete-dialog.component';
import { AccessKeyCreateDialogComponent } from './access-key-create-dialog/access-key-create-dialog.component';
import { AccessKeyUpdateDialogComponent } from './access-key-update-dialog/access-key-update-dialog.component';
import { AccessKeysDialogComponent } from './access-keys-dialog/access-keys-dialog.component';
import { AccessKeyFragment } from '@kometa/shared/last-mile/access-key/types';

@Injectable({
  providedIn: 'root',
})
export class AccessKeyDialogService {
  constructor(private readonly dialogService: DialogService) {}

  openPage(lastMileId: string): DynamicDialogRef {
    return this.dialogService.open(AccessKeysDialogComponent, {
      header: 'Ключи доступа',
      width: '900px',
      data: {
        lastMileId,
      },
    });
  }

  openCreate(lastMileId: string): DynamicDialogRef {
    return this.dialogService.open(AccessKeyCreateDialogComponent, {
      header: 'Добавить ключ доступа',
      width: '500px',
      data: {
        lastMileId,
      },
    });
  }

  openUpdate(lastMileId: string, accessKey: AccessKeyFragment): DynamicDialogRef {
    return this.dialogService.open(AccessKeyUpdateDialogComponent, {
      header: 'Изменить ключ доступа',
      width: '500px',
      data: {
        lastMileId,
        accessKey,
      },
    });
  }

  openDelete(lastMileId: string, accessKey: AccessKeyFragment): DynamicDialogRef {
    return this.dialogService.open(AccessKeyDeleteDialogComponent, {
      header: 'Удалить ключ доступа',
      width: '500px',
      data: {
        lastMileId,
        accessKey,
      },
    });
  }
}
