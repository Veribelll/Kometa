import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IdentityRolesRoutingModule } from './identity-roles-routing.module';
import { IdentityRolesComponent } from './identity-roles.component';
import { SmdeIdentityRoleFeatureModule } from '@kometa/smde/identity-role/feature';

@NgModule({
  declarations: [IdentityRolesComponent],
  imports: [CommonModule, IdentityRolesRoutingModule, SmdeIdentityRoleFeatureModule],
})
export class IdentityRolesModule {}
