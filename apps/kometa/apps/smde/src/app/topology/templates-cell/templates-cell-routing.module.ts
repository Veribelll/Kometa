import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplatesCellComponent } from './templates-cell.component';

const routes: Routes = [
  {
    path: '',
    component: TemplatesCellComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemplatesCellRoutingModule {}
