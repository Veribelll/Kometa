import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedNgModule } from '@kometa/shared/ng';
import { SharedValidateModule } from '@kometa/shared/validate';
import { SharedTypedFormModule } from '@kometa/shared/typed-form';
import { SharedPrimengUiFormModule } from '@kometa/shared/primeng/ui-form';
import { SharedPrimengUiTableModule } from '@kometa/shared/primeng/ui-table';
import { SharedPrimengUiDetailModule } from '@kometa/shared/primeng/ui-detail';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TemplateCellCreateFormComponent } from './template-cell-create-form/template-cell-create-form.component';
import { TemplateCellDeleteFormComponent } from './template-cell-delete-form/template-cell-delete-form.component';
import { TemplateCellTableComponent } from './template-cell-table/template-cell-table.component';
import { TemplateCellUpdateFormComponent } from './template-cell-update-form/template-cell-update-form.component';
import { TemplateCellDetailFormComponent } from './template-cell-detail-form/template-cell-detail-form.component';
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
    InputSwitchModule,
    InputNumberModule,
    DropdownModule,
    FileUploadModule,
    InputTextModule,
    TableModule,
  ],
  declarations: [
    TemplateCellCreateFormComponent,
    TemplateCellDeleteFormComponent,
    TemplateCellDetailFormComponent,
    TemplateCellTableComponent,
    TemplateCellUpdateFormComponent,
  ],
  exports: [
    TemplateCellCreateFormComponent,
    TemplateCellDeleteFormComponent,
    TemplateCellDetailFormComponent,
    TemplateCellTableComponent,
    TemplateCellUpdateFormComponent,
  ],
})
export class SmdeTopologyTemplateCellUiModule {}
