import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostamatsComponent } from './postamats.component';

const routes: Routes = [
  {
    path: '',
    component: PostamatsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostamatsRoutingModule {}
