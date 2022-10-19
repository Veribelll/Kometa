import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackingPlacesComponent } from './packing-places.component';

const routes: Routes = [
  {
    path: '',
    component: PackingPlacesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PackingPlacesRoutingModule {}
