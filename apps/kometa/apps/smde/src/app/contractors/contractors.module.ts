import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractorsRoutingModule } from './contractors-routing.module';
import { ContractorsComponent } from './contractors.component';
import { SmdeContractorFeatureModule } from '@kometa/smde/contractor/feature';

@NgModule({
  imports: [CommonModule, ContractorsRoutingModule, SmdeContractorFeatureModule],
  declarations: [ContractorsComponent],
})
export class ContractorsModule {}
