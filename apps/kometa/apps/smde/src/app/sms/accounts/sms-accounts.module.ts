import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SmdeSmsAccountFeatureModule } from '@kometa/smde/sms/account/feature';
import { SmsAccountsRoutingModule } from './sms-accounts-routing.module';
import { SmsAccountsComponent } from './sms-accounts.component';

@NgModule({
  imports: [CommonModule, SmsAccountsRoutingModule, SmdeSmsAccountFeatureModule],
  declarations: [SmsAccountsComponent],
})
export class SmsAccountsModule {}
