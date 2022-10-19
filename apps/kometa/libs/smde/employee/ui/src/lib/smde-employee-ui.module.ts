import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedNgModule } from '@kometa/shared/ng';
import { SharedTypedFormModule } from '@kometa/shared/typed-form';
import { SharedPrimengUiFormModule } from '@kometa/shared/primeng/ui-form';
import { SharedPrimengUiTableModule } from '@kometa/shared/primeng/ui-table';
import { SharedPrimengUiDetailModule } from '@kometa/shared/primeng/ui-detail';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { PasswordModule } from 'primeng/password';
import { TableModule } from 'primeng/table';
import { EmployeeCreateFormComponent } from './employee-create-form/employee-create-form.component';
import { EmployeeDeleteFormComponent } from './employee-delete-form/employee-delete-form.component';
import { EmployeeDetailFormComponent } from './employee-detail-form/employee-detail-form.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { EmployeeUpdateFormComponent } from './employee-update-form/employee-update-form.component';
import { FioFormComponent } from './fio-form/fio-form.component';
import { SelectContractorsFieldComponent } from './select-contractors-field/select-contractors-field.component';
import { SelectRolesFieldComponent } from './select-roles-field/select-roles-field.component';
import { SharedAbpModule } from '@kometa/shared/abp';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SharedValidateModule } from '@kometa/shared/validate';
import { SharedEmployeeUiModule } from '@kometa/shared/employee/ui';

@NgModule({
  imports: [
    CommonModule,
    SharedEmployeeUiModule,
    SharedNgModule,
    SharedAbpModule,
    SharedValidateModule,
    SharedTypedFormModule,
    SharedPrimengUiFormModule,
    SharedPrimengUiTableModule,
    SharedPrimengUiDetailModule,
    MultiSelectModule,
    InputTextModule,
    InputMaskModule,
    PasswordModule,
    TableModule,
    ButtonModule,
    RippleModule,
  ],
  declarations: [
    EmployeeCreateFormComponent,
    EmployeeDeleteFormComponent,
    EmployeeDetailFormComponent,
    EmployeeTableComponent,
    EmployeeUpdateFormComponent,
    FioFormComponent,
    SelectContractorsFieldComponent,
    SelectRolesFieldComponent,
  ],
  exports: [
    EmployeeCreateFormComponent,
    EmployeeDeleteFormComponent,
    EmployeeDetailFormComponent,
    EmployeeTableComponent,
    EmployeeUpdateFormComponent,
  ],
})
export class SmdeEmployeeUiModule {}
