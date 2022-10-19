import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoragePeriodUpdateDialogComponent } from './storage-period-update-dialog/storage-period-update-dialog.component';
import { StoragePeriodsPageComponent } from './storage-periods-page/storage-periods-page.component';
import { StoragePeriodsPageDialogComponent } from './storage-periods-page-dialog/storage-periods-page-dialog.component';
import { ToolbarModule } from 'primeng/toolbar';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SharedAbpModule } from '@kometa/shared/abp';
import { SmdeLastMileStoragePeriodUiModule } from '@kometa/smde/last-mile/storage-period/ui';

@NgModule({
  imports: [
    CommonModule,
    SmdeLastMileStoragePeriodUiModule,
    SharedAbpModule,
    PanelModule,
    ButtonModule,
    RippleModule,
    ToolbarModule,
  ],
  declarations: [
    StoragePeriodUpdateDialogComponent,
    StoragePeriodsPageComponent,
    StoragePeriodsPageDialogComponent,
  ],
  exports: [StoragePeriodsPageComponent],
})
export class SmdeLastMileStoragePeriodFeatureModule {}
