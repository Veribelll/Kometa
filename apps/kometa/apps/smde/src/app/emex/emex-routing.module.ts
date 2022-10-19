import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard, ContractorGuard, PermissionGuard } from '@kometa/shared/abp';

const routes: Routes = [
  {
    path: 'accounts',
    loadChildren: () => import('./accounts').then((x) => x.EmexAccountsModule),
    canActivate: [AuthGuard, PermissionGuard, ContractorGuard],
    data: {
      requiredPolicy: 'Emex.Accounts',
    },
  },
  {
    path: 'orders',
    loadChildren: () => import('./orders').then((m) => m.EmexOrdersModule),
    canActivate: [AuthGuard, PermissionGuard, ContractorGuard],
    data: {
      requiredPolicy: 'Emex.Orders',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmexRoutingModule {}
