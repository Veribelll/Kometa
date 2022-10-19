import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmexAccountsComponent } from './emex-accounts.component';

const routes: Routes = [
  {
    path: '',
    component: EmexAccountsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmexAccountsRoutingModule {}
