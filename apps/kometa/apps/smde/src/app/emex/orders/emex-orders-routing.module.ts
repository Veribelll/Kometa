import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmexOrdersComponent } from './emex-orders.component';

const routes: Routes = [
  {
    path: '',
    component: EmexOrdersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmexOrdersRoutingModule {}
