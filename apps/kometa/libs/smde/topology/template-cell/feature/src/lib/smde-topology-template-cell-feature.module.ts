import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmdeTopologyTemplateCellUiModule } from '@kometa/smde/topology/template-cell/ui';
import { SharedAbpModule } from '@kometa/shared/abp';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TemplateCellCreateDialogComponent } from './template-cell-create-dialog/template-cell-create-dialog.component';
import { TemplateCellDeleteDialogComponent } from './template-cell-delete-dialog/template-cell-delete-dialog.component';
import { TemplateCellDetailDialogComponent } from './template-cell-detail-dialog/template-cell-detail-dialog.component';
import { TemplateCellUpdateDialogComponent } from './template-cell-update-dialog/template-cell-update-dialog.component';
import { TemplatesCellPageComponent } from './templates-cell-page/templates-cell-page.component';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
  imports: [
    CommonModule,
    SmdeTopologyTemplateCellUiModule,
    SharedAbpModule,
    PanelModule,
    ButtonModule,
    RippleModule,
    ToolbarModule,
  ],
  declarations: [
    TemplateCellCreateDialogComponent,
    TemplateCellDeleteDialogComponent,
    TemplateCellDetailDialogComponent,
    TemplateCellUpdateDialogComponent,
    TemplatesCellPageComponent,
  ],
  exports: [TemplatesCellPageComponent],
})
export class SmdeTopologyTemplateCellFeatureModule {}
