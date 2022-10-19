import { Injectable } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { LastMileAccountsUpdateDialogComponent } from './last-mile-accounts-update-dialog/last-mile-accounts-update-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class LastMileDialogService {
  constructor(private readonly dialogService: DialogService) {}

  openUpdateAccounts(lastMileId: string) {
    return this.dialogService.open(LastMileAccountsUpdateDialogComponent, {
      header: 'Аккаунты',
      width: '500px',
      data: {
        lastMileId,
      },
    });
  }
}
