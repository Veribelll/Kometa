import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedAbpModule } from '@kometa/shared/abp';
import { SmdePostamatUiModule } from '@kometa/smde/postamat/ui';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { PostamatCreateDialogComponent } from './postamat-create-dialog/postamat-create-dialog.component';
import { PostamatDeleteDialogComponent } from './postamat-delete-dialog/postamat-delete-dialog.component';
import { PostamatDetailDialogComponent } from './postamat-detail-dialog/postamat-detail-dialog.component';
import { PostamatUpdateDialogComponent } from './postamat-update-dialog/postamat-update-dialog.component';
import { PostamatsPageComponent } from './postamats-page/postamats-page.component';
import { PostamatScannerUpdateDialogComponent } from './postamat-scanner-update-dialog/postamat-scanner-update-dialog.component';
import { PostamatSettingsUpdateDialogComponent } from './postamat-settings-update-dialog/postamat-settings-update-dialog.component';
import { MenuModule } from 'primeng/menu';
import { ToolbarModule } from 'primeng/toolbar';
import { PostamatPrintersUpdateDialogComponent } from './postamat-printers-update-dialog/postamat-printers-update-dialog.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { SharedPostamatFeatureModule } from '@kometa/shared/postamat/feature';
import { SharedPostamatCellFeatureModule } from '@kometa/shared/postamat/cell/feature';
import { SharedPostamatControllerFeatureModule } from '@kometa/shared/postamat/controller/feature';
import { SharedLastMileAccessKeyFeatureModule } from '@kometa/shared/last-mile/access-key/feature';
import { SmdeLastMileFeatureModule } from '@kometa/smde/last-mile/feature';
import { SmdeLastMileStoragePeriodFeatureModule } from '@kometa/smde/last-mile/storage-period/feature';
import { SmdeLastMileReturnPeriodFeatureModule } from '@kometa/smde/last-mile/return-period/feature';
import { SmdeLastMileSmsTemplateFeatureModule } from '@kometa/smde/last-mile/sms-template/feature';

@NgModule({
  imports: [
    CommonModule,
    SmdePostamatUiModule,
    SharedPostamatFeatureModule,
    SharedPostamatCellFeatureModule,
    SharedPostamatControllerFeatureModule,
    SharedLastMileAccessKeyFeatureModule,
    SharedAbpModule,
    SmdeLastMileFeatureModule,
    SmdeLastMileStoragePeriodFeatureModule,
    SmdeLastMileReturnPeriodFeatureModule,
    SmdeLastMileSmsTemplateFeatureModule,
    PanelModule,
    ButtonModule,
    RippleModule,
    MenuModule,
    ToolbarModule,
    TabMenuModule,
  ],
  declarations: [
    PostamatCreateDialogComponent,
    PostamatDeleteDialogComponent,
    PostamatDetailDialogComponent,
    PostamatUpdateDialogComponent,
    PostamatsPageComponent,
    PostamatScannerUpdateDialogComponent,
    PostamatSettingsUpdateDialogComponent,
    PostamatPrintersUpdateDialogComponent,
  ],
  exports: [PostamatsPageComponent],
})
export class SmdePostamatFeatureModule {}
