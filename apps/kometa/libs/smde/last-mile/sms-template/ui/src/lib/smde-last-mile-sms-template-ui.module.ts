import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LastMileSmsTemplateUpdateFormComponent } from './last-mile-sms-template-update-form/last-mile-sms-template-update-form.component';
import { LastMileSmsTemplateTableComponent } from './last-mile-sms-template-table/last-mile-sms-template-table.component';
import { LastMileSmsTemplateDeleteFormComponent } from './last-mile-sms-template-delete-form/last-mile-sms-template-delete-form.component';
import { TranslocoModule } from '@ngneat/transloco';
import { SharedTypedFormModule } from '@kometa/shared/typed-form';
import { SharedPrimengUiFormModule } from '@kometa/shared/primeng/ui-form';
import { SharedPrimengUiTableModule } from '@kometa/shared/primeng/ui-table';
import { SharedPrimengUiDetailModule } from '@kometa/shared/primeng/ui-detail';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { DropdownModule } from 'primeng/dropdown';
import { SharedValidateModule } from '@kometa/shared/validate';
import { SmdeSmsTemplateControlsModule } from '@kometa/smde/sms/template/controls';

@NgModule({
  imports: [
    CommonModule,
    SharedValidateModule,
    SharedTypedFormModule,
    SharedPrimengUiFormModule,
    SharedPrimengUiTableModule,
    SharedPrimengUiDetailModule,
    SmdeSmsTemplateControlsModule,
    TranslocoModule,
    TableModule,
    ButtonModule,
    RippleModule,
    DropdownModule,
  ],
  declarations: [
    LastMileSmsTemplateUpdateFormComponent,
    LastMileSmsTemplateTableComponent,
    LastMileSmsTemplateDeleteFormComponent,
  ],
  exports: [
    LastMileSmsTemplateUpdateFormComponent,
    LastMileSmsTemplateTableComponent,
    LastMileSmsTemplateDeleteFormComponent,
  ],
})
export class SmdeLastMileSmsTemplateUiModule {}
