import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReturnRequestsRoutingModule } from './return-requests-routing.module';
import { ReturnRequestsComponent } from './return-requests.component';
import { SmdeReturnRequestFeatureModule } from '@kometa/smde/return-request/feature';

@NgModule({
  imports: [CommonModule, SmdeReturnRequestFeatureModule, ReturnRequestsRoutingModule],
  declarations: [ReturnRequestsComponent],
})
export class ReturnRequestsModule {}
