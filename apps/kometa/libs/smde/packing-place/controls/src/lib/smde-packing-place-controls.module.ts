import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedTypedFormModule } from '@kometa/shared/typed-form';
import { SharedPrimengUiFormModule } from '@kometa/shared/primeng/ui-form';
import { SharedPrimengUiTableModule } from '@kometa/shared/primeng/ui-table';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TranslocoModule } from '@ngneat/transloco';
import { SharedEmployeeUiModule } from '@kometa/shared/employee/ui';
import { PackingPlaceSelectTableComponent } from './packing-place-select-table/packing-place-select-table.component';
import { PackingPlaceSelectControlComponent } from './packing-place-select-control/packing-place-select-control.component';

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
    TranslocoModule,
  ],
  declarations: [PackingPlaceSelectTableComponent, PackingPlaceSelectControlComponent],
  exports: [PackingPlaceSelectControlComponent],
})
export class SmdePackingPlaceControlsModule {}
