import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedNgModule } from '@kometa/shared/ng';
import { SharedValidateModule } from '@kometa/shared/validate';
import { SharedTypedFormModule } from '@kometa/shared/typed-form';
import { SharedPrimengUiFormModule } from '@kometa/shared/primeng/ui-form';
import { SharedPrimengUiTableModule } from '@kometa/shared/primeng/ui-table';
import { SharedPrimengUiDetailModule } from '@kometa/shared/primeng/ui-detail';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TemplateSectionCreateFormComponent } from './template-section-create-form/template-section-create-form.component';
import { TemplateSectionDeleteFormComponent } from './template-section-delete-form/template-section-delete-form.component';
import { TemplateSectionTableComponent } from './template-section-table/template-section-table.component';
import { TemplateSectionUpdateFormComponent } from './template-section-update-form/template-section-update-form.component';
import { TemplateSectionDetailFormComponent } from './template-section-detail-form/template-section-detail-form.component';
import { SharedTopologyUiModule } from '@kometa/shared/topology/ui';

@NgModule({
  imports: [
    CommonModule,
    SharedNgModule,
    SharedValidateModule,
    SharedTypedFormModule,
    SharedPrimengUiFormModule,
    SharedPrimengUiTableModule,
    SharedPrimengUiDetailModule,
    SharedTopologyUiModule,
    InputTextModule,
    TableModule,
  ],
  declarations: [
    TemplateSectionCreateFormComponent,
    TemplateSectionDeleteFormComponent,
    TemplateSectionDetailFormComponent,
    TemplateSectionTableComponent,
    TemplateSectionUpdateFormComponent,
  ],
  exports: [
    TemplateSectionCreateFormComponent,
    TemplateSectionDeleteFormComponent,
    TemplateSectionDetailFormComponent,
    TemplateSectionTableComponent,
    TemplateSectionUpdateFormComponent,
  ],
})
export class SmdeTopologyTemplateSectionUiModule {}
