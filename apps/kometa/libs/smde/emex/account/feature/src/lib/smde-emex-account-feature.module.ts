import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmexAccountCreateDialogComponent } from './emex-account-create-dialog/emex-account-create-dialog.component';
import { EmexAccountDeleteDialogComponent } from './emex-account-delete-dialog/emex-account-delete-dialog.component';
import { EmexAccountDetailDialogComponent } from './emex-account-detail-dialog/emex-account-detail-dialog.component';
import { EmexAccountUpdateDialogComponent } from './emex-account-update-dialog/emex-account-update-dialog.component';
import { EmexAccountsPageComponent } from './emex-accounts-page/emex-accounts-page.component';
import { SmdeEmexAccountUiModule } from '@kometa/smde/emex/account/ui';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SharedAbpModule } from '@kometa/shared/abp';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
  imports: [
    CommonModule,
    SmdeEmexAccountUiModule,
    SharedAbpModule,
    PanelModule,
    ButtonModule,
    RippleModule,
    ToolbarModule,
  ],
  declarations: [
    EmexAccountCreateDialogComponent,
    EmexAccountDeleteDialogComponent,
    EmexAccountDetailDialogComponent,
    EmexAccountUpdateDialogComponent,
    EmexAccountsPageComponent,
  ],
  exports: [EmexAccountsPageComponent],
})
export class SmdeEmexAccountFeatureModule {}
