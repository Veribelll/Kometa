import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackingPlaceDetailDialogComponent } from './packing-place-detail-dialog/packing-place-detail-dialog.component';
import { PackingPlaceTimelineDialogComponent } from './packing-place-timeline-dialog/packing-place-timeline-dialog.component';
import { EmexProductTableComponent } from './emex-product-table/emex-product-table.component';
import { SharedPackingPlaceUiModule } from '@kometa/shared/packing-place/ui';
import { TableModule } from 'primeng/table';
import { TranslocoModule } from '@ngneat/transloco';

@NgModule({
  imports: [CommonModule, SharedPackingPlaceUiModule, TableModule, TranslocoModule],
  declarations: [
    PackingPlaceDetailDialogComponent,
    PackingPlaceTimelineDialogComponent,
    EmexProductTableComponent,
  ],
  exports: [
    PackingPlaceDetailDialogComponent,
    PackingPlaceTimelineDialogComponent,
    EmexProductTableComponent,
  ],
})
export class SharedPackingPlaceFeatureModule {}
