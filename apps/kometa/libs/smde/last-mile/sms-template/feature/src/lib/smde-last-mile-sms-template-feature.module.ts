import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LastMileSmsTemplateDeleteDialogComponent } from './last-mile-sms-template-delete-dialog/last-mile-sms-template-delete-dialog.component';
import { LastMileSmsTemplatesPageDialogComponent } from './last-mile-sms-templates-page-dialog/last-mile-sms-templates-page-dialog.component';
import { LastMileSmsTemplatesPageComponent } from './last-mile-sms-templates-page/last-mile-sms-templates-page.component';
import { LastMileSmsTemplateUpdateDialogComponent } from './last-mile-sms-template-update-dialog/last-mile-sms-template-update-dialog.component';
import { SmdeLastMileSmsTemplateUiModule } from '@kometa/smde/last-mile/sms-template/ui';

@NgModule({
  imports: [CommonModule, SmdeLastMileSmsTemplateUiModule],
  declarations: [
    LastMileSmsTemplateDeleteDialogComponent,
    LastMileSmsTemplatesPageDialogComponent,
    LastMileSmsTemplatesPageComponent,
    LastMileSmsTemplateUpdateDialogComponent,
  ],
})
export class SmdeLastMileSmsTemplateFeatureModule {}
