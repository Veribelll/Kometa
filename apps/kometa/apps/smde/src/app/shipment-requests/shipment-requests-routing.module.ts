import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShipmentRequestsComponent } from './shipment-requests.component';

const routes: Routes = [
  {
    path: '',
    component: ShipmentRequestsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShipmentRequestsRoutingModule {}
