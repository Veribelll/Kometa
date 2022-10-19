import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceivePackingPlaceRoutingModule } from './receive-packing-place-routing.module';
import { ReceivePackingPlaceComponent } from './receive-packing-place.component';
import { PostamatReceivePackingPlaceFeatureModule } from '@kometa/postamat/receive-packing-place/feature';
import { PostamatUiModule } from '@kometa/postamat/ui';

@NgModule({
  imports: [
    CommonModule,
    ReceivePackingPlaceRoutingModule,
    PostamatReceivePackingPlaceFeatureModule,
    PostamatUiModule,
  ],
  declarations: [ReceivePackingPlaceComponent],
})
export class ReceivePackingPlaceModule {}
