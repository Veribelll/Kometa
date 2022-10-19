import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TenantsRoutingModule } from './tenants-routing.module';
import { TenantsComponent } from './tenants.component';
import { SmdeTenantFeatureModule } from '@kometa/smde/tenant/feature';

@NgModule({
  imports: [CommonModule, TenantsRoutingModule, SmdeTenantFeatureModule],
  declarations: [TenantsComponent],
})
export class TenantsModule {}
