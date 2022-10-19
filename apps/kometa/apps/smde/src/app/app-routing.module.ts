import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard, ContractorGuard, PermissionGuard } from '@kometa/shared/abp';

const routes: Routes = [
  {
    path: 'tenants',
    loadChildren: () => import('./tenants').then((m) => m.TenantsModule),
    canActivate: [AuthGuard, PermissionGuard],
    data: {
      requiredPolicy: 'AbpTenantManagement.Tenants',
    },
  },
  {
    path: 'contractors',
    loadChildren: () => import('./contractors').then((m) => m.ContractorsModule),
    canActivate: [AuthGuard, PermissionGuard],
    data: {
      requiredPolicy: 'ContractorManagement.Contractors',
    },
  },
  {
    path: 'employees',
    loadChildren: () => import('./employees').then((m) => m.EmployeesModule),
    canActivate: [AuthGuard, PermissionGuard, ContractorGuard],
    data: {
      requiredPolicy: 'ContractorManagement.Employees',
    },
  },
  {
    path: 'roles',
    loadChildren: () => import('./identity-roles').then((m) => m.IdentityRolesModule),
    canActivate: [AuthGuard, PermissionGuard],
    data: {
      requiredPolicy: 'AbpIdentity.Roles',
    },
  },
  {
    path: 'packing-places',
    loadChildren: () => import('./packing-places').then((m) => m.PackingPlacesModule),
    canActivate: [AuthGuard, PermissionGuard, ContractorGuard],
    data: {
      requiredPolicy: 'PackingPlaceManagement.PackingPlaces',
    },
  },
  {
    path: 'shipment-requests',
    loadChildren: () => import('./shipment-requests').then((m) => m.ShipmentRequestsModule),
    canActivate: [AuthGuard, PermissionGuard, ContractorGuard],
    data: {
      requiredPolicy: 'PackingPlaceManagement.ShipmentRequests',
    },
  },
  {
    path: 'return-requests',
    loadChildren: () => import('./return-requests').then((m) => m.ReturnRequestsModule),
    canActivate: [AuthGuard, PermissionGuard, ContractorGuard],
    data: {
      requiredPolicy: 'PackingPlaceManagement.ReturnRequests',
    },
  },
  {
    path: 'emex',
    loadChildren: () => import('./emex').then((m) => m.EmexModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'postamats',
    loadChildren: () => import('./postamats').then((m) => m.PostamatsModule),
    canActivate: [AuthGuard, PermissionGuard, ContractorGuard],
    data: {
      requiredPolicy: 'LastMileManagement.LastMiles',
    },
  },
  {
    path: 'topology',
    loadChildren: () => import('./topology').then((m) => m.TopologyModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'sms',
    loadChildren: () => import('./sms').then((m) => m.SmsModule),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
