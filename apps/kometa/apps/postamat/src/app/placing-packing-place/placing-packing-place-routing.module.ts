import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlacingPackingPlaceComponent } from './placing-packing-place.component';

const routes: Routes = [
  {
    path: '',
    component: PlacingPackingPlaceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacingPackingPlaceRoutingModule {}
