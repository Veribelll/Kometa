import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EmexAccountCreateDialogComponent } from './emex-account-create-dialog/emex-account-create-dialog.component';
import { EmexAccountDeleteDialogComponent } from './emex-account-delete-dialog/emex-account-delete-dialog.component';
import { EmexAccountDetailDialogComponent } from './emex-account-detail-dialog/emex-account-detail-dialog.component';
import { EmexAccountUpdateDialogComponent } from './emex-account-update-dialog/emex-account-update-dialog.component';
import { EmexAccountFragment } from '@kometa/smde/emex/account/types';

@Injectable()
export class EmexAccountDialogService {
  constructor(private readonly dialogService: DialogService) {}

  openCreate(): DynamicDialogRef {
    return this.dialogService.open(EmexAccountCreateDialogComponent, {
      header: 'Добавить аккаунт EmEx',
      width: '500px',
    });
  }

  openUpdate(account: EmexAccountFragment): DynamicDialogRef {
    return this.dialogService.open(EmexAccountUpdateDialogComponent, {
      header: 'Изменить аккаунт EmEx',
      width: '500px',
      data: {
        account,
      },
    });
  }

  openDetail(account: EmexAccountFragment): DynamicDialogRef {
    return this.dialogService.open(EmexAccountDetailDialogComponent, {
      header: 'Aккаунт EmEx',
      width: '500px',
      data: {
        account,
      },
    });
  }

  openDelete(account: EmexAccountFragment): DynamicDialogRef {
    return this.dialogService.open(EmexAccountDeleteDialogComponent, {
      header: 'Удалить',
      width: '500px',
      data: {
        account,
      },
    });
  }
}
