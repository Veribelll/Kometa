import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmsAccountsComponent } from './sms-accounts.component';

const routes: Routes = [
  {
    path: '',
    component: SmsAccountsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmsAccountsRoutingModule {}
