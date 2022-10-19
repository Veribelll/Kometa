import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SmdeSmsTemplateFeatureModule } from '@kometa/smde/sms/template/feature';
import { SmsTemplatesRoutingModule } from './sms-templates-routing.module';
import { SmsTemplatesComponent } from './sms-templates.component';

@NgModule({
  imports: [CommonModule, SmsTemplatesRoutingModule, SmdeSmsTemplateFeatureModule],
  declarations: [SmsTemplatesComponent],
})
export class SmsTemplatesModule {}
