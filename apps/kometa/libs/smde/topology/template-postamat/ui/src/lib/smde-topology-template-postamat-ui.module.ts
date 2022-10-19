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
import { TemplatePostamatCreateFormComponent } from './template-postamat-create-form/template-postamat-create-form.component';
import { TemplatePostamatDeleteFormComponent } from './template-postamat-delete-form/template-postamat-delete-form.component';
import { TemplatePostamatDetailFormComponent } from './template-postamat-detail-form/template-postamat-detail-form.component';
import { TemplatePostamatTableComponent } from './template-postamat-table/template-postamat-table.component';
import { TemplatePostamatUpdateFormComponent } from './template-postamat-update-form/template-postamat-update-form.component';
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
    TemplatePostamatCreateFormComponent,
    TemplatePostamatDeleteFormComponent,
    TemplatePostamatDetailFormComponent,
    TemplatePostamatTableComponent,
    TemplatePostamatUpdateFormComponent,
  ],
  exports: [
    TemplatePostamatCreateFormComponent,
    TemplatePostamatDeleteFormComponent,
    TemplatePostamatDetailFormComponent,
    TemplatePostamatTableComponent,
    TemplatePostamatUpdateFormComponent,
  ],
})
export class SmdeTopologyTemplatePostamatUiModule {}
