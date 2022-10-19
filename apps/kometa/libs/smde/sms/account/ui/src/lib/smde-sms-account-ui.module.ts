import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedNgModule } from '@kometa/shared/ng';
import { SharedValidateModule } from '@kometa/shared/validate';
import { SharedTypedFormModule } from '@kometa/shared/typed-form';
import { SharedPrimengUiFormModule } from '@kometa/shared/primeng/ui-form';
import { SharedPrimengUiTableModule } from '@kometa/shared/primeng/ui-table';
import { SharedPrimengUiDetailModule } from '@kometa/shared/primeng/ui-detail';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { SmsAccountTableComponent } from './sms-account-table/sms-account-table.component';
import { SmsCenterAccountCreateFormComponent } from './sms-center-account-create-form/sms-center-account-create-form.component';
import { SmsCenterAccountDeleteFormComponent } from './sms-center-account-delete-form/sms-center-account-delete-form.component';
import { SmsCenterAccountDetailFormComponent } from './sms-center-account-detail-form/sms-center-account-detail-form.component';
import { SmsCenterAccountUpdateFormComponent } from './sms-center-account-update-form/sms-center-account-update-form.component';

@NgModule({
  imports: [
    CommonModule,
    SharedNgModule,
    SharedValidateModule,
    SharedTypedFormModule,
    SharedPrimengUiFormModule,
    SharedPrimengUiTableModule,
    SharedPrimengUiDetailModule,
    TableModule,
    DropdownModule,
    InputTextModule,
    PasswordModule,
  ],
  declarations: [
    SmsAccountTableComponent,
    SmsCenterAccountCreateFormComponent,
    SmsCenterAccountDeleteFormComponent,
    SmsCenterAccountDetailFormComponent,
    SmsCenterAccountUpdateFormComponent,
  ],
  exports: [
    SmsAccountTableComponent,
    SmsCenterAccountCreateFormComponent,
    SmsCenterAccountDeleteFormComponent,
    SmsCenterAccountDetailFormComponent,
    SmsCenterAccountUpdateFormComponent,
  ],
})
export class SmdeSmsAccountUiModule {}
