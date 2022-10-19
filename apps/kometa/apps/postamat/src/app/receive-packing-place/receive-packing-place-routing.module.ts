import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceivePackingPlaceComponent } from './receive-packing-place.component';

const routes: Routes = [
  {
    path: '',
    component: ReceivePackingPlaceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceivePackingPlaceRoutingModule {}
