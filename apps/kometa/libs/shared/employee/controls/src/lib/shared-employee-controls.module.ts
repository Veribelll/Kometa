import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedTypedFormModule } from '@kometa/shared/typed-form';
import { SharedPrimengUiFormModule } from '@kometa/shared/primeng/ui-form';
import { SharedPrimengUiTableModule } from '@kometa/shared/primeng/ui-table';
import { SharedEmployeeUiModule } from '@kometa/shared/employee/ui';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { EmployeeSelectControlComponent } from './employee-select-control/employee-select-control.component';
import { EmployeeSelectTableComponent } from './employee-select-table/employee-select-table.component';

@NgModule({
  imports: [
    CommonModule,
    SharedTypedFormModule,
    SharedPrimengUiFormModule,
    SharedPrimengUiTableModule,
    SharedEmployeeUiModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    DialogModule,
  ],
  declarations: [EmployeeSelectControlComponent, EmployeeSelectTableComponent],
  exports: [EmployeeSelectControlComponent],
})
export class SharedEmployeeControlsModule {}
