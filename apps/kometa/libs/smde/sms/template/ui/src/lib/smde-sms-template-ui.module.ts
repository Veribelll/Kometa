import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedNgModule } from '@kometa/shared/ng';
import { SharedValidateModule } from '@kometa/shared/validate';
import { SharedTypedFormModule } from '@kometa/shared/typed-form';
import { SharedPrimengUiFormModule } from '@kometa/shared/primeng/ui-form';
import { SharedPrimengUiTableModule } from '@kometa/shared/primeng/ui-table';
import { SharedPrimengUiDetailModule } from '@kometa/shared/primeng/ui-detail';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SmsTemplateCreateFormComponent } from './sms-template-create-form/sms-template-create-form.component';
import { SmsTemplateUpdateFormComponent } from './sms-template-update-form/sms-template-update-form.component';
import { SmsTemplateTableComponent } from './sms-template-table/sms-template-table.component';
import { SmsTemplateDetailFormComponent } from './sms-template-detail-form/sms-template-detail-form.component';
import { SmsTemplateDeleteFormComponent } from './sms-template-delete-form/sms-template-delete-form.component';
import { SmsTemplateFieldsAvailableComponent } from './sms-template-fields-available/sms-template-fields-available.component';
import { TranslocoModule } from '@ngneat/transloco';

@NgModule({
  imports: [
    CommonModule,
    SharedNgModule,
    SharedValidateModule,
    SharedTypedFormModule,
    SharedPrimengUiFormModule,
    SharedPrimengUiTableModule,
    SharedPrimengUiDetailModule,
    TranslocoModule,
    DropdownModule,
    InputTextareaModule,
    InputTextModule,
    TableModule,
    ButtonModule,
    RippleModule,
  ],
  declarations: [
    SmsTemplateCreateFormComponent,
    SmsTemplateDeleteFormComponent,
    SmsTemplateDetailFormComponent,
    SmsTemplateTableComponent,
    SmsTemplateUpdateFormComponent,
    SmsTemplateFieldsAvailableComponent,
  ],
  exports: [
    SmsTemplateCreateFormComponent,
    SmsTemplateDeleteFormComponent,
    SmsTemplateDetailFormComponent,
    SmsTemplateTableComponent,
    SmsTemplateUpdateFormComponent,
  ],
})
export class SmdeSmsTemplateUiModule {}
