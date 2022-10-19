import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { IdentityRoleCreateDialogComponent } from './identity-role-create-dialog/identity-role-create-dialog.component';
import { IdentityRoleDeleteDialogComponent } from './identity-role-delete-dialog/identity-role-delete-dialog.component';
import { IdentityRoleDetailDialogComponent } from './identity-role-detail-dialog/identity-role-detail-dialog.component';
import { IdentityRoleUpdateDialogComponent } from './identity-role-update-dialog/identity-role-update-dialog.component';
import { IdentityRoleFragment } from '@kometa/smde/identity-role/types';
import { PermissionDialogService } from '@kometa/smde/permission/feature';

@Injectable()
export class IdentityRoleDialogService {
  constructor(
    private readonly dialogService: DialogService,
    private readonly permissionDialogService: PermissionDialogService
  ) {}

  openCreate(): DynamicDialogRef {
    return this.dialogService.open(IdentityRoleCreateDialogComponent, {
      header: 'Добавить роль',
      width: '500px',
    });
  }

  openUpdate(identityRole: IdentityRoleFragment): DynamicDialogRef {
    return this.dialogService.open(IdentityRoleUpdateDialogComponent, {
      header: 'Изменить роль',
      width: '500px',
      data: {
        identityRole,
      },
    });
  }

  openDetail(identityRole: IdentityRoleFragment): DynamicDialogRef {
    return this.dialogService.open(IdentityRoleDetailDialogComponent, {
      header: 'Роль',
      width: '500px',
      data: {
        identityRole,
      },
    });
  }

  openDelete(identityRole: IdentityRoleFragment): DynamicDialogRef {
    return this.dialogService.open(IdentityRoleDeleteDialogComponent, {
      header: 'Удалить',
      width: '500px',
      data: {
        identityRole,
      },
    });
  }

  openUpdatePermissions(roleName: string): DynamicDialogRef {
    return this.permissionDialogService.openUpdate('R', roleName);
  }
}
