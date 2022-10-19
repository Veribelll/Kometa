import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackingPlaceCreateDialogComponent } from './packing-place-create-dialog/packing-place-create-dialog.component';
import { PackingPlaceDeleteDialogComponent } from './packing-place-delete-dialog/packing-place-delete-dialog.component';
import { PackingPlacesPageComponent } from './packing-places-page/packing-places-page.component';
import { PackingPlaceUpdateDialogComponent } from './packing-place-update-dialog/packing-place-update-dialog.component';
import { SharedAbpModule } from '@kometa/shared/abp';
import { SmdePackingPlaceUiModule } from '@kometa/smde/packing-place/ui';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SharedPrimengUiFormModule } from '@kometa/shared/primeng/ui-form';
import { TranslocoModule } from '@ngneat/transloco';
import { PackingPlaceSendDialogComponent } from './packing-place-send-dialog/packing-place-send-dialog.component';
import { ToolbarModule } from 'primeng/toolbar';
import { SharedPackingPlaceFeatureModule } from '@kometa/shared/packing-place/feature';

@NgModule({
  imports: [
    CommonModule,
    SmdePackingPlaceUiModule,
    SharedPackingPlaceFeatureModule,
    SharedAbpModule,
    SharedPrimengUiFormModule,
    PanelModule,
    ButtonModule,
    RippleModule,
    TableModule,
    TranslocoModule,
    ToolbarModule,
  ],
  declarations: [
    PackingPlaceCreateDialogComponent,
    PackingPlaceDeleteDialogComponent,
    PackingPlacesPageComponent,
    PackingPlaceUpdateDialogComponent,
    PackingPlaceSendDialogComponent,
  ],
  exports: [PackingPlacesPageComponent],
})
export class SmdePackingPlaceFeatureModule {}
