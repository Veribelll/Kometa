import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SmdeTopologyTemplateSectionFeatureModule } from '@kometa/smde/topology/template-section/feature';
import { TemplatesSectionRoutingModule } from './templates-section-routing.module';
import { TemplatesSectionComponent } from './templates-section.component';

@NgModule({
  imports: [CommonModule, TemplatesSectionRoutingModule, SmdeTopologyTemplateSectionFeatureModule],
  declarations: [TemplatesSectionComponent],
})
export class TemplatesSectionModule {}
