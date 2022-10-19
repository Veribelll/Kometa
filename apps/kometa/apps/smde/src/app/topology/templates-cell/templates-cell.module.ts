import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SmdeTopologyTemplateCellFeatureModule } from '@kometa/smde/topology/template-cell/feature';
import { TemplatesCellRoutingModule } from './templates-cell-routing.module';
import { TemplatesCellComponent } from './templates-cell.component';

@NgModule({
  imports: [CommonModule, TemplatesCellRoutingModule, SmdeTopologyTemplateCellFeatureModule],
  declarations: [TemplatesCellComponent],
})
export class TemplatesCellModule {}
