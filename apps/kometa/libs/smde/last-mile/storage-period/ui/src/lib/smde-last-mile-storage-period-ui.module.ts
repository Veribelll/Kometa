import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoragePeriodTableComponent } from './storage-period-table/storage-period-table.component';
import { StoragePeriodUpdateFormComponent } from './storage-period-update-form/storage-period-update-form.component';
import { SharedNgModule } from '@kometa/shared/ng';
import { SharedAbpModule } from '@kometa/shared/abp';
import { SharedValidateModule } from '@kometa/shared/validate';
import { SharedTypedFormModule } from '@kometa/shared/typed-form';
import { SharedPrimengUiFormModule } from '@kometa/shared/primeng/ui-form';
import { SharedPrimengUiTableModule } from '@kometa/shared/primeng/ui-table';
import { SharedPrimengUiDetailModule } from '@kometa/shared/primeng/ui-detail';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
  imports: [
    CommonModule,
    SharedNgModule,
    SharedAbpModule,
    SharedValidateModule,
    SharedTypedFormModule,
    SharedPrimengUiFormModule,
    SharedPrimengUiTableModule,
    SharedPrimengUiDetailModule,
    InputTextModule,
    TableModule,
    DropdownModule,
    InputNumberModule,
  ],
  declarations: [StoragePeriodTableComponent, StoragePeriodUpdateFormComponent],
  exports: [StoragePeriodTableComponent, StoragePeriodUpdateFormComponent],
})
export class SmdeLastMileStoragePeriodUiModule {}
