import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmdeTopologyTemplateSectionUiModule } from '@kometa/smde/topology/template-section/ui';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SharedAbpModule } from '@kometa/shared/abp';
import { TemplateSectionCreateDialogComponent } from './template-section-create-dialog/template-section-create-dialog.component';
import { TemplateSectionDeleteDialogComponent } from './template-section-delete-dialog/template-section-delete-dialog.component';
import { TemplateSectionDetailDialogComponent } from './template-section-detail-dialog/template-section-detail-dialog.component';
import { TemplateSectionUpdateDialogComponent } from './template-section-update-dialog/template-section-update-dialog.component';
import { TemplatesSectionPageComponent } from './templates-section-page/templates-section-page.component';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
  imports: [
    CommonModule,
    SmdeTopologyTemplateSectionUiModule,
    SharedAbpModule,
    PanelModule,
    ButtonModule,
    RippleModule,
    ToolbarModule,
  ],
  declarations: [
    TemplateSectionCreateDialogComponent,
    TemplateSectionDeleteDialogComponent,
    TemplateSectionDetailDialogComponent,
    TemplateSectionUpdateDialogComponent,
    TemplatesSectionPageComponent,
  ],
  exports: [TemplatesSectionPageComponent],
})
export class SmdeTopologyTemplateSectionFeatureModule {}
