import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedNgModule } from '@kometa/shared/ng';
import { SharedAbpModule } from '@kometa/shared/abp';
import { SharedValidateModule } from '@kometa/shared/validate';
import { SharedTypedFormModule } from '@kometa/shared/typed-form';
import { SharedPrimengUiFormModule } from '@kometa/shared/primeng/ui-form';
import { SharedPrimengUiTableModule } from '@kometa/shared/primeng/ui-table';
import { SharedPrimengUiDetailModule } from '@kometa/shared/primeng/ui-detail';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TableModule } from 'primeng/table';
import { AccessKeyCreateFormComponent } from './access-key-create-form/access-key-create-form.component';
import { AccessKeyDeleteFormComponent } from './access-key-delete-form/access-key-delete-form.component';
import { AccessKeyTableComponent } from './access-key-table/access-key-table.component';
import { AccessKeyUpdateFormComponent } from './access-key-update-form/access-key-update-form.component';
import { AccessKeyDetailFormComponent } from './access-key-detail-form/access-key-detail-form.component';
import { SharedEmployeeUiModule } from '@kometa/shared/employee/ui';
import { SharedEmployeeControlsModule } from '@kometa/shared/employee/controls';

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
    SharedEmployeeUiModule,
    SharedEmployeeControlsModule,
    InputTextModule,
    ButtonModule,
    CalendarModule,
    InputSwitchModule,
    TableModule,
  ],
  declarations: [
    AccessKeyCreateFormComponent,
    AccessKeyDeleteFormComponent,
    AccessKeyDetailFormComponent,
    AccessKeyTableComponent,
    AccessKeyUpdateFormComponent,
  ],
  exports: [
    AccessKeyCreateFormComponent,
    AccessKeyDeleteFormComponent,
    AccessKeyDetailFormComponent,
    AccessKeyTableComponent,
    AccessKeyUpdateFormComponent,
  ],
})
export class SharedLastMileAccessKeyUiModule {}
