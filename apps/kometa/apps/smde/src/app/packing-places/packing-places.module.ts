import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackingPlacesRoutingModule } from './packing-places-routing.module';
import { PackingPlacesComponent } from './packing-places.component';
import { SmdePackingPlaceFeatureModule } from '@kometa/smde/packing-place/feature';

@NgModule({
  imports: [CommonModule, PackingPlacesRoutingModule, SmdePackingPlaceFeatureModule],
  declarations: [PackingPlacesComponent],
})
export class PackingPlacesModule {}
