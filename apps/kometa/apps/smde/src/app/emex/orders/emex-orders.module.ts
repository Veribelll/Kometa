import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SmdeEmexOrderFeatureModule } from '@kometa/smde/emex/order/feature';
import { EmexOrdersRoutingModule } from './emex-orders-routing.module';
import { EmexOrdersComponent } from './emex-orders.component';

@NgModule({
  imports: [CommonModule, EmexOrdersRoutingModule, SmdeEmexOrderFeatureModule],
  declarations: [EmexOrdersComponent],
})
export class EmexOrdersModule {}
