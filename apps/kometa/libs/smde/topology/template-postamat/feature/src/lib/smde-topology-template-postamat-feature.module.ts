import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SharedAbpModule } from '@kometa/shared/abp';
import { SmdeTopologyTemplatePostamatUiModule } from '@kometa/smde/topology/template-postamat/ui';
import { TemplatePostamatCreateDialogComponent } from './template-postamat-create-dialog/template-postamat-create-dialog.component';
import { TemplatePostamatDeleteDialogComponent } from './template-postamat-delete-dialog/template-postamat-delete-dialog.component';
import { TemplatePostamatDetailDialogComponent } from './template-postamat-detail-dialog/template-postamat-detail-dialog.component';
import { TemplatePostamatUpdateDialogComponent } from './template-postamat-update-dialog/template-postamat-update-dialog.component';
import { TemplatesPostamatPageComponent } from './templates-postamat-page/templates-postamat-page.component';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
  imports: [
    CommonModule,
    SmdeTopologyTemplatePostamatUiModule,
    SharedAbpModule,
    PanelModule,
    ButtonModule,
    RippleModule,
    ToolbarModule,
  ],
  declarations: [
    TemplatePostamatCreateDialogComponent,
    TemplatePostamatDeleteDialogComponent,
    TemplatePostamatDetailDialogComponent,
    TemplatePostamatUpdateDialogComponent,
    TemplatesPostamatPageComponent,
  ],
  exports: [TemplatesPostamatPageComponent],
})
export class SmdeTopologyTemplatePostamatFeatureModule {}
