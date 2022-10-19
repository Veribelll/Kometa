import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedAbpModule } from '@kometa/shared/abp';
import { SmdeSmsAccountUiModule } from '@kometa/smde/sms/account/ui';
import { PanelModule } from 'primeng/panel';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SmsAccountsPageComponent } from './sms-accounts-page/sms-accounts-page.component';
import { SmsCenterAccountCreateDialogComponent } from './sms-center-account-create-dialog/sms-center-account-create-dialog.component';
import { SmsCenterAccountDeleteDialogComponent } from './sms-center-account-delete-dialog/sms-center-account-delete-dialog.component';
import { SmsCenterAccountDetailDialogComponent } from './sms-center-account-detail-dialog/sms-center-account-detail-dialog.component';
import { SmsCenterAccountUpdateDialogComponent } from './sms-center-account-update-dialog/sms-center-account-update-dialog.component';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
  imports: [
    CommonModule,
    SmdeSmsAccountUiModule,
    SharedAbpModule,
    PanelModule,
    TieredMenuModule,
    ButtonModule,
    RippleModule,
    ToolbarModule,
  ],
  declarations: [
    SmsAccountsPageComponent,
    SmsCenterAccountCreateDialogComponent,
    SmsCenterAccountDeleteDialogComponent,
    SmsCenterAccountDetailDialogComponent,
    SmsCenterAccountUpdateDialogComponent,
  ],
  exports: [SmsAccountsPageComponent],
})
export class SmdeSmsAccountFeatureModule {}
