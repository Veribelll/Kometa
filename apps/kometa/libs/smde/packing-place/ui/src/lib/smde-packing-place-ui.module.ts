import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackingPlaceCreateFormComponent } from './packing-place-create-form/packing-place-create-form.component';
import { PackingPlaceDeleteFormComponent } from './packing-place-delete-form/packing-place-delete-form.component';
import { PackingPlaceTableComponent } from './packing-place-table/packing-place-table.component';
import { PackingPlaceUpdateFormComponent } from './packing-place-update-form/packing-place-update-form.component';
import { SharedNgModule } from '@kometa/shared/ng';
import { SharedValidateModule } from '@kometa/shared/validate';
import { SharedTypedFormModule } from '@kometa/shared/typed-form';
import { SharedPrimengUiFormModule } from '@kometa/shared/primeng/ui-form';
import { SharedPrimengUiTableModule } from '@kometa/shared/primeng/ui-table';
import { SharedPrimengUiDetailModule } from '@kometa/shared/primeng/ui-detail';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { TimelineModule } from 'primeng/timeline';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TranslocoModule } from '@ngneat/transloco';
import { SharedAbpModule } from '@kometa/shared/abp';
import { PackingPlaceSendFormComponent } from './packing-place-send-form/packing-place-send-form.component';
import { SharedEmployeeUiModule } from '@kometa/shared/employee/ui';
import { SmdeLastMileControlsModule } from '@kometa/smde/last-mile/controls';
import { SmdeCourierControlsModule } from '@kometa/smde/courier/controls';
import { SkeletonModule } from 'primeng/skeleton';

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
    SmdeLastMileControlsModule,
    SmdeCourierControlsModule,
    DropdownModule,
    InputTextModule,
    PanelModule,
    ButtonModule,
    RippleModule,
    TableModule,
    TooltipModule,
    TimelineModule,
    InputTextareaModule,
    TranslocoModule,
  ],
  declarations: [
    PackingPlaceCreateFormComponent,
    PackingPlaceDeleteFormComponent,
    PackingPlaceTableComponent,
    PackingPlaceUpdateFormComponent,
    PackingPlaceSendFormComponent,
  ],
  exports: [
    PackingPlaceCreateFormComponent,
    PackingPlaceDeleteFormComponent,
    PackingPlaceTableComponent,
    PackingPlaceUpdateFormComponent,
    PackingPlaceSendFormComponent,
  ],
})
export class SmdePackingPlaceUiModule {}
