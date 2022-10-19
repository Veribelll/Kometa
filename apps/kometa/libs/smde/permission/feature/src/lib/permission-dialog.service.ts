import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { UpdatePermissionsDialogComponent } from './update-permissions-dialog/update-permissions-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class PermissionDialogService {
  constructor(private readonly dialogService: DialogService) {}

  openUpdate(providerName: 'R' | 'U' | 'C', providerKey: string): DynamicDialogRef {
    return this.dialogService.open(UpdatePermissionsDialogComponent, {
      header: 'Назначить права',
      width: '850px',
      data: {
        providerName,
        providerKey,
      },
    });
  }
}
