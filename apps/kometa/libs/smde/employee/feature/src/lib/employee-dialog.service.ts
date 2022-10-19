import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EmployeeCreateDialogComponent } from './employee-create-dialog/employee-create-dialog.component';
import { EmployeeDeleteDialogComponent } from './employee-delete-dialog/employee-delete-dialog.component';
import { EmployeeDetailDialogComponent } from './employee-detail-dialog/employee-detail-dialog.component';
import { EmployeeUpdateDialogComponent } from './employee-update-dialog/employee-update-dialog.component';
import { EmployeeFragment } from '@kometa/smde/employee/types';
import { PermissionDialogService } from '@kometa/smde/permission/feature';

@Injectable()
export class EmployeeDialogService {
  constructor(
    private readonly dialogService: DialogService,
    private readonly permissionDialogService: PermissionDialogService
  ) {}

  openCreate(): DynamicDialogRef {
    return this.dialogService.open(EmployeeCreateDialogComponent, {
      header: 'Добавить работника',
      width: '500px',
    });
  }

  openUpdate(employee: EmployeeFragment): DynamicDialogRef {
    return this.dialogService.open(EmployeeUpdateDialogComponent, {
      header: 'Изменить работника',
      width: '500px',
      data: {
        employee,
      },
    });
  }

  openDetail(employee: EmployeeFragment): DynamicDialogRef {
    return this.dialogService.open(EmployeeDetailDialogComponent, {
      header: 'Работник',
      width: '500px',
      data: {
        employee,
      },
    });
  }

  openDelete(employee: EmployeeFragment): DynamicDialogRef {
    return this.dialogService.open(EmployeeDeleteDialogComponent, {
      header: 'Удалить',
      width: '500px',
      data: {
        employee,
      },
    });
  }

  openUpdatePermissions(id: string): DynamicDialogRef {
    return this.permissionDialogService.openUpdate('U', id);
  }
}
