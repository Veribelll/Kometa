import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmdeSmsTemplateUiModule } from '@kometa/smde/sms/template/ui';
import { SharedAbpModule } from '@kometa/shared/abp';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SmsTemplateCreateDialogComponent } from './sms-template-create-dialog/sms-template-create-dialog.component';
import { SmsTemplateDeleteDialogComponent } from './sms-template-delete-dialog/sms-template-delete-dialog.component';
import { SmsTemplateDetailDialogComponent } from './sms-template-detail-dialog/sms-template-detail-dialog.component';
import { SmsTemplateUpdateDialogComponent } from './sms-template-update-dialog/sms-template-update-dialog.component';
import { SmsTemplatesPageComponent } from './sms-templates-page/sms-templates-page.component';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
  imports: [
    CommonModule,
    SmdeSmsTemplateUiModule,
    SharedAbpModule,
    PanelModule,
    ButtonModule,
    RippleModule,
    ToolbarModule,
  ],
  declarations: [
    SmsTemplateCreateDialogComponent,
    SmsTemplateDeleteDialogComponent,
    SmsTemplateDetailDialogComponent,
    SmsTemplateUpdateDialogComponent,
    SmsTemplatesPageComponent,
  ],
  exports: [SmsTemplatesPageComponent],
})
export class SmdeSmsTemplateFeatureModule {}
