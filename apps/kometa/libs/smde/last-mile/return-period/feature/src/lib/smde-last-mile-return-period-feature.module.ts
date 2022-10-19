import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReturnPeriodUpdateDialogComponent } from './return-period-update-dialog/return-period-update-dialog.component';
import { ReturnPeriodsPageComponent } from './return-periods-page/return-periods-page.component';
import { SharedAbpModule } from '@kometa/shared/abp';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToolbarModule } from 'primeng/toolbar';
import { SmdeLastMileReturnPeriodUiModule } from '@kometa/smde/last-mile/return-period/ui';
import { ReturnPeriodsPageDialogComponent } from './return-periods-page-dialog/return-periods-page-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    SharedAbpModule,
    SmdeLastMileReturnPeriodUiModule,
    PanelModule,
    ButtonModule,
    RippleModule,
    ToolbarModule
  ],
  declarations: [
    ReturnPeriodUpdateDialogComponent,
    ReturnPeriodsPageComponent,
    ReturnPeriodsPageDialogComponent
  ],
  exports: [
    ReturnPeriodsPageComponent,
  ]
})
export class SmdeLastMileReturnPeriodFeatureModule {
}
