import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard, ContractorGuard, PermissionGuard } from '@kometa/shared/abp';

const routes: Routes = [
  {
    path: 'accounts',
    loadChildren: () => import('./accounts').then((m) => m.SmsAccountsModule),
    canActivate: [AuthGuard, PermissionGuard, ContractorGuard],
    data: {
      requiredPolicy: 'NotificationManagement.SmsAccounts',
    },
  },
  {
    path: 'templates',
    loadChildren: () => import('./templates').then((m) => m.SmsTemplatesModule),
    canActivate: [AuthGuard, PermissionGuard, ContractorGuard],
    data: {
      requiredPolicy: 'NotificationManagement.SmsTemplates',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmsRoutingModule {}
