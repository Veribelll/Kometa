import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReturnRequestCreateFormComponent } from './return-request-create-form/return-request-create-form.component';
import { ReturnRequestDetailFormComponent } from './return-request-detail-form/return-request-detail-form.component';
import { ReturnRequestTableComponent } from './return-request-table/return-request-table.component';
import { ReturnRequestUpdateFormComponent } from './return-request-update-form/return-request-update-form.component';
import { SharedNgModule } from '@kometa/shared/ng';
import { SharedValidateModule } from '@kometa/shared/validate';
import { SharedTypedFormModule } from '@kometa/shared/typed-form';
import { SharedPrimengUiFormModule } from '@kometa/shared/primeng/ui-form';
import { SharedPrimengUiTableModule } from '@kometa/shared/primeng/ui-table';
import { SharedPrimengUiDetailModule } from '@kometa/shared/primeng/ui-detail';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ReturnRequestCancelFormComponent } from './return-request-cancel-form/return-request-cancel-form.component';
import { TranslocoModule } from '@ngneat/transloco';
import { SharedAbpModule } from '@kometa/shared/abp';
import { RippleModule } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';
import { ReturnRequestReturnFormComponent } from './return-request-return-form/return-request-return-form.component';
import { ReturnRequestTimelineFormComponent } from './return-request-timeline-form/return-request-timeline-form.component';
import { TimelineModule } from 'primeng/timeline';
import { SharedEmployeeUiModule } from '@kometa/shared/employee/ui';
import { SmdeCourierControlsModule } from '@kometa/smde/courier/controls';
import { SmdePackingPlaceControlsModule } from '@kometa/smde/packing-place/controls';

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
    SmdePackingPlaceControlsModule,
    InputTextModule,
    DropdownModule,
    TableModule,
    ButtonModule,
    InputTextareaModule,
    TranslocoModule,
    RippleModule,
    TooltipModule,
    TimelineModule,
  ],
  declarations: [
    ReturnRequestCreateFormComponent,
    ReturnRequestDetailFormComponent,
    ReturnRequestTableComponent,
    ReturnRequestUpdateFormComponent,
    ReturnRequestCancelFormComponent,
    ReturnRequestReturnFormComponent,
    ReturnRequestTimelineFormComponent,
  ],
  exports: [
    ReturnRequestCreateFormComponent,
    ReturnRequestDetailFormComponent,
    ReturnRequestTableComponent,
    ReturnRequestUpdateFormComponent,
    ReturnRequestCancelFormComponent,
    ReturnRequestReturnFormComponent,
    ReturnRequestTimelineFormComponent,
  ],
})
export class SmdeReturnRequestUiModule {}
