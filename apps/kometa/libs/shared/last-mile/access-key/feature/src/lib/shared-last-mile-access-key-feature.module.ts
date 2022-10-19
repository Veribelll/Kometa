import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedAbpModule } from '@kometa/shared/abp';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { MenuModule } from 'primeng/menu';
import { ToolbarModule } from 'primeng/toolbar';
import { AccessKeyCreateDialogComponent } from './access-key-create-dialog/access-key-create-dialog.component';
import { AccessKeyDeleteDialogComponent } from './access-key-delete-dialog/access-key-delete-dialog.component';
import { AccessKeyUpdateDialogComponent } from './access-key-update-dialog/access-key-update-dialog.component';
import { AccessKeysDialogComponent } from './access-keys-dialog/access-keys-dialog.component';
import { AccessKeyDetailDialogComponent } from './access-key-detail-dialog/access-key-detail-dialog.component';
import { AccessKeysPageComponent } from './access-keys-page/access-keys-page.component';
import { SharedLastMileAccessKeyUiModule } from '@kometa/shared/last-mile/access-key/ui';
import { SharedEmployeeUiModule } from '@kometa/shared/employee/ui';

@NgModule({
  imports: [
    CommonModule,
    SharedAbpModule,
    SharedLastMileAccessKeyUiModule,
    SharedEmployeeUiModule,
    PanelModule,
    ButtonModule,
    RippleModule,
    MenuModule,
    ToolbarModule,
  ],
  declarations: [
    AccessKeyCreateDialogComponent,
    AccessKeyDeleteDialogComponent,
    AccessKeyDetailDialogComponent,
    AccessKeyUpdateDialogComponent,
    AccessKeysPageComponent,
    AccessKeysDialogComponent,
  ],
  exports: [AccessKeysPageComponent],
})
export class SharedLastMileAccessKeyFeatureModule {}
