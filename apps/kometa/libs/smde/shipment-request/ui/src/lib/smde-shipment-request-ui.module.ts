import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipmentRequestCreateFormComponent } from './shipment-request-create-form/shipment-request-create-form.component';
import { ShipmentRequestDetailFormComponent } from './shipment-request-detail-form/shipment-request-detail-form.component';
import { ShipmentRequestTableComponent } from './shipment-request-table/shipment-request-table.component';
import { ShipmentRequestUpdateFormComponent } from './shipment-request-update-form/shipment-request-update-form.component';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SharedNgModule } from '@kometa/shared/ng';
import { SharedValidateModule } from '@kometa/shared/validate';
import { SharedTypedFormModule } from '@kometa/shared/typed-form';
import { SharedPrimengUiFormModule } from '@kometa/shared/primeng/ui-form';
import { SharedPrimengUiTableModule } from '@kometa/shared/primeng/ui-table';
import { SharedPrimengUiDetailModule } from '@kometa/shared/primeng/ui-detail';
import { PanelModule } from 'primeng/panel';
import { TranslocoModule } from '@ngneat/transloco';
import { SharedAbpModule } from '@kometa/shared/abp';
import { RippleModule } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';
import { ShipmentRequestCancelFormComponent } from './shipment-request-cancel-form/shipment-request-cancel-form.component';
import { ShipmentRequestTimelineFormComponent } from './shipment-request-timeline-form/shipment-request-timeline-form.component';
import { TimelineModule } from 'primeng/timeline';
import { SmdeCourierControlsModule } from '@kometa/smde/courier/controls';
import { SmdeLastMileControlsModule } from '@kometa/smde/last-mile/controls';
import { SmdePackingPlaceControlsModule } from '@kometa/smde/packing-place/controls';
import { SharedEmployeeUiModule } from '@kometa/shared/employee/ui';

@NgModule({
  imports: [
    CommonModule,
    SharedNgModule,
    SharedAbpModule,
    SharedValidateModule,
    SharedTypedFormModule,
    SharedPrimengUiFormModule,
    SharedPrimengUiTableModule,
    SharedPrimengUiDetailModule,
    SharedEmployeeUiModule,
    SmdeCourierControlsModule,
    SmdeLastMileControlsModule,
    SmdePackingPlaceControlsModule,
    InputTextModule,
    DropdownModule,
    TableModule,
    ButtonModule,
    InputTextareaModule,
    PanelModule,
    TranslocoModule,
    RippleModule,
    TooltipModule,
    TimelineModule,
  ],
  declarations: [
    ShipmentRequestCreateFormComponent,
    ShipmentRequestDetailFormComponent,
    ShipmentRequestTableComponent,
    ShipmentRequestUpdateFormComponent,
    ShipmentRequestCancelFormComponent,
    ShipmentRequestTimelineFormComponent,
  ],
  exports: [
    ShipmentRequestCreateFormComponent,
    ShipmentRequestDetailFormComponent,
    ShipmentRequestTableComponent,
    ShipmentRequestUpdateFormComponent,
    ShipmentRequestCancelFormComponent,
    ShipmentRequestTimelineFormComponent,
  ],
})
export class SmdeShipmentRequestUiModule {}
