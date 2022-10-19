import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackingPlacesAcceptedPageComponent } from './packing-places-accepted-page/packing-places-accepted-page.component';
import { PackingPlacesInTransitPageComponent } from './packing-places-in-transit-page/packing-places-in-transit-page.component';
import { PostamatAdminPanelUiModule } from '@kometa/postamat/admin-panel/ui';
import { PanelModule } from 'primeng/panel';
import { SharedPackingPlaceFeatureModule } from '@kometa/shared/packing-place/feature';

@NgModule({
  imports: [CommonModule, PostamatAdminPanelUiModule, SharedPackingPlaceFeatureModule, PanelModule],
  declarations: [PackingPlacesAcceptedPageComponent, PackingPlacesInTransitPageComponent],
  exports: [PackingPlacesAcceptedPageComponent, PackingPlacesInTransitPageComponent],
})
export class PostamatAdminPanelFeatureModule {}
