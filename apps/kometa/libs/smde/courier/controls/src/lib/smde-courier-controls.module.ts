import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedTypedFormModule } from '@kometa/shared/typed-form';
import { SharedPrimengUiFormModule } from '@kometa/shared/primeng/ui-form';
import { SharedPrimengUiTableModule } from '@kometa/shared/primeng/ui-table';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { SharedEmployeeUiModule } from '@kometa/shared/employee/ui';
import { CourierSelectControlComponent } from './courier-select-control/courier-select-control.component';
import { CourierSelectTableComponent } from './courier-select-table/courier-select-table.component';

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
  declarations: [CourierSelectControlComponent, CourierSelectTableComponent],
  exports: [CourierSelectControlComponent],
})
export class SmdeCourierControlsModule {}
