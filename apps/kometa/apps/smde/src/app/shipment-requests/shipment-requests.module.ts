import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipmentRequestsRoutingModule } from './shipment-requests-routing.module';
import { ShipmentRequestsComponent } from './shipment-requests.component';
import { SmdeShipmentRequestFeatureModule } from '@kometa/smde/shipment-request/feature';

@NgModule({
  imports: [CommonModule, ShipmentRequestsRoutingModule, SmdeShipmentRequestFeatureModule],
  declarations: [ShipmentRequestsComponent],
})
export class ShipmentRequestsModule {}
