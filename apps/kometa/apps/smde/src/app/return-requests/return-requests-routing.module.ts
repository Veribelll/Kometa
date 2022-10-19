import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReturnRequestsComponent } from './return-requests.component';

const routes: Routes = [
  {
    path: '',
    component: ReturnRequestsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReturnRequestsRoutingModule {}
