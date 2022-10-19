import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplatesPostamatComponent } from './templates-postamat.component';

const routes: Routes = [
  {
    path: '',
    component: TemplatesPostamatComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemplatesPostamatRoutingModule {}
