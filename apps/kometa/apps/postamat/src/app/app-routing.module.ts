import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@kometa/shared/abp';
import { MenuComponent } from './core';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
  },
  {
    path: 'admin-panel',
    loadChildren: () => import('./admin-panel').then((x) => x.AdminPanelModule),
    //canActivate: [AuthGuard],
  },
  {
    path: 'placing-packing-place',
    loadChildren: () => import('./placing-packing-place').then((x) => x.PlacingPackingPlaceModule),
    //canActivate: [AuthGuard],
  },
  {
    path: 'receive-packing-place',
    loadChildren: () => import('./receive-packing-place').then((x) => x.ReceivePackingPlaceModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
