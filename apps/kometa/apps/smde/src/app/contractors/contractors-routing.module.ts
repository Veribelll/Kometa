import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractorsComponent } from './contractors.component';

const routes: Routes = [
  {
    path: '',
    component: ContractorsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContractorsRoutingModule {}
