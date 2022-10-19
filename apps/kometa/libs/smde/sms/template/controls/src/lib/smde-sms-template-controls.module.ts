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
import { SmsTemplateSelectControlComponent } from './sms-template-select-control/sms-template-select-control.component';
import { SmsTemplateSelectTableComponent } from './sms-template-select-table/sms-template-select-table.component';

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
    TranslocoModule,
  ],
  declarations: [SmsTemplateSelectControlComponent, SmsTemplateSelectTableComponent],
  exports: [SmsTemplateSelectControlComponent],
})
export class SmdeSmsTemplateControlsModule {}
