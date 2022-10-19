import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplatesSectionComponent } from './templates-section.component';

const routes: Routes = [
  {
    path: '',
    component: TemplatesSectionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemplatesSectionRoutingModule {}
