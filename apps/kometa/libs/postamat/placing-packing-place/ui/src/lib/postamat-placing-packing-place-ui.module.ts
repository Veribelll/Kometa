import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackingPlaceForPlacementTableComponent } from './packing-place-for-placement-table/packing-place-for-placement-table.component';
import { PackingPlacePlacedTableComponent } from './packing-place-placed-table/packing-place-placed-table.component';
import { TableModule } from 'primeng/table';

@NgModule({
  imports: [CommonModule, TableModule],
  declarations: [PackingPlaceForPlacementTableComponent, PackingPlacePlacedTableComponent],
  exports: [PackingPlaceForPlacementTableComponent, PackingPlacePlacedTableComponent],
})
export class PostamatPlacingPackingPlaceUiModule {}
