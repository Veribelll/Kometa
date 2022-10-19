import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { SmsCenterAccountCreateDialogComponent } from './sms-center-account-create-dialog/sms-center-account-create-dialog.component';
import { SmsCenterAccountDeleteDialogComponent } from './sms-center-account-delete-dialog/sms-center-account-delete-dialog.component';
import { SmsCenterAccountDetailDialogComponent } from './sms-center-account-detail-dialog/sms-center-account-detail-dialog.component';
import { SmsCenterAccountUpdateDialogComponent } from './sms-center-account-update-dialog/sms-center-account-update-dialog.component';
import { SmsCenterAccountFragment } from '@kometa/smde/sms/account/types';

@Injectable({
  providedIn: 'root',
})
export class SmsCenterAccountDialogService {
  constructor(private readonly dialogService: DialogService) {}

  openCreate(): DynamicDialogRef {
    return this.dialogService.open(SmsCenterAccountCreateDialogComponent, {
      header: 'Добавить аккаунт smsc',
      width: '700px',
    });
  }

  openUpdate(account: SmsCenterAccountFragment): DynamicDialogRef {
    return this.dialogService.open(SmsCenterAccountUpdateDialogComponent, {
      header: 'Изменить аккаунт smsc',
      width: '700px',
      data: {
        account,
      },
    });
  }

  openDetail(account: SmsCenterAccountFragment): DynamicDialogRef {
    return this.dialogService.open(SmsCenterAccountDetailDialogComponent, {
      header: 'Аккаунт smsc',
      width: '700px',
      data: {
        account,
      },
    });
  }

  openDelete(account: SmsCenterAccountFragment): DynamicDialogRef {
    return this.dialogService.open(SmsCenterAccountDeleteDialogComponent, {
      header: 'Удалить',
      width: '500px',
      data: {
        account,
      },
    });
  }
}
