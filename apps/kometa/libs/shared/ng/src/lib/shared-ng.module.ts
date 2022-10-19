import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgContentDefaultComponent } from './ng-content-default/ng-content-default.component';
import { SecuredImageComponent } from './secured-image/secured-image.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NgContentDefaultComponent, SecuredImageComponent],
  exports: [NgContentDefaultComponent, SecuredImageComponent],
})
export class SharedNgModule {}
