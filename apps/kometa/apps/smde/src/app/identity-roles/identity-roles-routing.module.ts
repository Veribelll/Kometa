import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdentityRolesComponent } from './identity-roles.component';

const routes: Routes = [
  {
    path: '',
    component: IdentityRolesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdentityRolesRoutingModule {}
