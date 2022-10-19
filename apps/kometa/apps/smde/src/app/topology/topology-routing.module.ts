import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard, PermissionGuard } from '@kometa/shared/abp';

const routes: Routes = [
  {
    path: 'templates-cell',
    loadChildren: () => import('./templates-cell').then((x) => x.TemplatesCellModule),
    canActivate: [AuthGuard, PermissionGuard],
    data: {
      requiredPolicy: 'TopologyManagement.Templates',
    },
  },
  {
    path: 'templates-section',
    loadChildren: () => import('./templates-section').then((x) => x.TemplatesSectionModule),
    canActivate: [AuthGuard, PermissionGuard],
    data: {
      requiredPolicy: 'TopologyManagement.Templates',
    },
  },
  {
    path: 'templates-postamat',
    loadChildren: () => import('./templates-postamat').then((x) => x.TemplatesPostamatModule),
    canActivate: [AuthGuard, PermissionGuard],
    data: {
      requiredPolicy: 'TopologyManagement.Templates',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopologyRoutingModule {}
