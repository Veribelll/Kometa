import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipmentRequestCreateDialogComponent } from './shipment-request-create-dialog/shipment-request-create-dialog.component';
import { ShipmentRequestDetailDialogComponent } from './shipment-request-detail-dialog/shipment-request-detail-dialog.component';
import { ShipmentRequestUpdateDialogComponent } from './shipment-request-update-dialog/shipment-request-update-dialog.component';
import { ShipmentRequestsPageComponent } from './shipment-requests-page/shipment-requests-page.component';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SharedAbpModule } from '@kometa/shared/abp';
import { SmdeShipmentRequestUiModule } from '@kometa/smde/shipment-request/ui';
import { SharedPrimengUiFormModule } from '@kometa/shared/primeng/ui-form';
import { DropdownModule } from 'primeng/dropdown';
import { SharedTypedFormModule } from '@kometa/shared/typed-form';
import { ShipmentRequestCancelDialogComponent } from './shipment-request-cancel-dialog/shipment-request-cancel-dialog.component';
import { ShipmentRequestTimelineDialogComponent } from './shipment-request-timeline-dialog/shipment-request-timeline-dialog.component';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
  imports: [
    CommonModule,
    SharedTypedFormModule,
    SharedPrimengUiFormModule,
    SmdeShipmentRequestUiModule,
    SharedAbpModule,
    PanelModule,
    ButtonModule,
    RippleModule,
    DropdownModule,
    ToolbarModule,
  ],
  declarations: [
    ShipmentRequestCreateDialogComponent,
    ShipmentRequestDetailDialogComponent,
    ShipmentRequestUpdateDialogComponent,
    ShipmentRequestsPageComponent,
    ShipmentRequestCancelDialogComponent,
    ShipmentRequestTimelineDialogComponent,
  ],
  exports: [ShipmentRequestsPageComponent],
})
export class SmdeShipmentRequestFeatureModule {}
