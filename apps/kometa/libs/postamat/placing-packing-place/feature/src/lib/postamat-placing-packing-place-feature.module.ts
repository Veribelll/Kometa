import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlacingPackingPlacePageComponent } from './placing-packing-place-page/placing-packing-place-page.component';
import { PostamatPlacingPackingPlaceUiModule } from '@kometa/postamat/placing-packing-place/ui';
import { SharedPrimengUiFormModule } from '@kometa/shared/primeng/ui-form';
import { SharedPrimengUiDetailModule } from '@kometa/shared/primeng/ui-detail';
import { NgxBarcode6Module } from 'ngx-barcode6';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { RouterModule } from '@angular/router';
import { SharedTypedFormModule } from '@kometa/shared/typed-form';
import { CancelActionsPlaceDialogComponent } from './cancel-actions-place-dialog/cancel-actions-place-dialog.component';
import { ShiftPackingPlaceDialogComponent } from './shift-packing-place-dialog/shift-packing-place-dialog.component';
import { SharedTopologyFeatureModule } from '@kometa/shared/topology/feature';
import { SharedTopologyUiModule } from '@kometa/shared/topology/ui';
import { SelectCellDialogComponent } from './select-cell-dialog/select-cell-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    PostamatPlacingPackingPlaceUiModule,
    SharedTypedFormModule,
    SharedPrimengUiFormModule,
    SharedPrimengUiDetailModule,
    SharedTopologyUiModule,
    SharedTopologyFeatureModule,
    NgxBarcode6Module,
    ButtonModule,
    RippleModule,
    InputTextModule,
    TableModule,
    RouterModule,
  ],
  declarations: [
    PlacingPackingPlacePageComponent,
    CancelActionsPlaceDialogComponent,
    ShiftPackingPlaceDialogComponent,
    SelectCellDialogComponent,
  ],
  exports: [PlacingPackingPlacePageComponent],
})
export class PostamatPlacingPackingPlaceFeatureModule {}
