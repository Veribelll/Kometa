import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedTypedFormModule } from '@kometa/shared/typed-form';
import { SharedPrimengUiFormModule } from '@kometa/shared/primeng/ui-form';
import { SharedPrimengUiTableModule } from '@kometa/shared/primeng/ui-table';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { LastMileSelectControlComponent } from './last-mile-select-control/last-mile-select-control.component';
import { LastMileSelectTableComponent } from './last-mile-select-table/last-mile-select-table.component';

@NgModule({
  imports: [
    CommonModule,
    SharedTypedFormModule,
    SharedPrimengUiFormModule,
    SharedPrimengUiTableModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    DialogModule,
  ],
  declarations: [LastMileSelectControlComponent, LastMileSelectTableComponent],
  exports: [LastMileSelectControlComponent],
})
export class SmdeLastMileControlsModule {}
