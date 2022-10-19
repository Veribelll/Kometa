import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SmdeTopologyTemplatePostamatFeatureModule } from '@kometa/smde/topology/template-postamat/feature';
import { TemplatesPostamatRoutingModule } from './templates-postamat-routing.module';
import { TemplatesPostamatComponent } from './templates-postamat.component';

@NgModule({
  imports: [
    CommonModule,
    TemplatesPostamatRoutingModule,
    SmdeTopologyTemplatePostamatFeatureModule,
  ],
  declarations: [TemplatesPostamatComponent],
})
export class TemplatesPostamatModule {}
