import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlacingPackingPlaceRoutingModule } from './placing-packing-place-routing.module';
import { PlacingPackingPlaceComponent } from './placing-packing-place.component';
import { PostamatPlacingPackingPlaceFeatureModule } from '@kometa/postamat/placing-packing-place/feature';
import { PostamatUiModule } from '@kometa/postamat/ui';

@NgModule({
  imports: [
    CommonModule,
    PlacingPackingPlaceRoutingModule,
    PostamatPlacingPackingPlaceFeatureModule,
    PostamatUiModule,
  ],
  declarations: [PlacingPackingPlaceComponent],
})
export class PlacingPackingPlaceModule {}
