import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeCreateDialogComponent } from './employee-create-dialog/employee-create-dialog.component';
import { EmployeeDeleteDialogComponent } from './employee-delete-dialog/employee-delete-dialog.component';
import { EmployeeDetailDialogComponent } from './employee-detail-dialog/employee-detail-dialog.component';
import { EmployeeUpdateDialogComponent } from './employee-update-dialog/employee-update-dialog.component';
import { EmployeesPageComponent } from './employees-page/employees-page.component';
import { SharedAbpModule } from '@kometa/shared/abp';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SmdeEmployeeUiModule } from '@kometa/smde/employee/ui';
import { SharedPrimengUiFormModule } from '@kometa/shared/primeng/ui-form';
import { SmdePermissionFeatureModule } from '@kometa/smde/permission/feature';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
  imports: [
    CommonModule,
    SharedAbpModule,
    SharedPrimengUiFormModule,
    SmdeEmployeeUiModule,
    SmdePermissionFeatureModule,
    PanelModule,
    ButtonModule,
    RippleModule,
    ToolbarModule,
  ],
  declarations: [
    EmployeeCreateDialogComponent,
    EmployeeDeleteDialogComponent,
    EmployeeDetailDialogComponent,
    EmployeeUpdateDialogComponent,
    EmployeesPageComponent,
  ],
  exports: [EmployeesPageComponent],
})
export class SmdeEmployeeFeatureModule {}
