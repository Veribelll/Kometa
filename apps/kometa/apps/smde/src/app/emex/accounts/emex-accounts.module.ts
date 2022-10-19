import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmexAccountsRoutingModule } from './emex-accounts-routing.module';
import { EmexAccountsComponent } from './emex-accounts.component';
import { SmdeEmexAccountFeatureModule } from '@kometa/smde/emex/account/feature';

@NgModule({
  imports: [CommonModule, EmexAccountsRoutingModule, SmdeEmexAccountFeatureModule],
  declarations: [EmexAccountsComponent],
})
export class EmexAccountsModule {}
