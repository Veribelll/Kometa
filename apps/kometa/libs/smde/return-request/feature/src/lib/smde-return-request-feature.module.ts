import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReturnRequestCreateDialogComponent } from './return-request-create-dialog/return-request-create-dialog.component';
import { ReturnRequestDetailDialogComponent } from './return-request-detail-dialog/return-request-detail-dialog.component';
import { ReturnRequestUpdateDialogComponent } from './return-request-update-dialog/return-request-update-dialog.component';
import { ReturnRequestsPageComponent } from './return-requests-page/return-requests-page.component';
import { SharedAbpModule } from '@kometa/shared/abp';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SmdeReturnRequestUiModule } from '@kometa/smde/return-request/ui';
import { ReturnRequestCancelDialogComponent } from './return-request-cancel-dialog/return-request-cancel-dialog.component';
import { ReturnRequestReturnDialogComponent } from './return-request-return-dialog/return-request-return-dialog.component';
import { ReturnRequestTimelineDialogComponent } from './return-request-timeline-dialog/return-request-timeline-dialog.component';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
  imports: [
    CommonModule,
    SmdeReturnRequestUiModule,
    SharedAbpModule,
    PanelModule,
    ButtonModule,
    RippleModule,
    ToolbarModule,
  ],
  declarations: [
    ReturnRequestCreateDialogComponent,
    ReturnRequestDetailDialogComponent,
    ReturnRequestUpdateDialogComponent,
    ReturnRequestsPageComponent,
    ReturnRequestCancelDialogComponent,
    ReturnRequestReturnDialogComponent,
    ReturnRequestTimelineDialogComponent,
  ],
  exports: [ReturnRequestsPageComponent],
})
export class SmdeReturnRequestFeatureModule {}
