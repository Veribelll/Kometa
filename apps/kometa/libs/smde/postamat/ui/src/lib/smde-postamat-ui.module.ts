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
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { PostamatCreateFormComponent } from './postamat-create-form/postamat-create-form.component';
import { PostamatDeleteFormComponent } from './postamat-delete-form/postamat-delete-form.component';
import { PostamatDetailFormComponent } from './postamat-detail-form/postamat-detail-form.component';
import { PostamatTableComponent } from './postamat-table/postamat-table.component';
import { PostamatUpdateFormComponent } from './postamat-update-form/postamat-update-form.component';
import { SharedDadataModule } from '@kometa/shared/dadata';
import { TranslocoModule } from '@ngneat/transloco';
import { SharedAbpModule } from '@kometa/shared/abp';
import { MenuModule } from 'primeng/menu';
import { SmdeCourierControlsModule } from '@kometa/smde/courier/controls';

@NgModule({
  imports: [
    CommonModule,
    SharedNgModule,
    SharedAbpModule,
    SharedDadataModule,
    SharedValidateModule,
    SharedTypedFormModule,
    SharedPrimengUiFormModule,
    SharedPrimengUiTableModule,
    SharedPrimengUiDetailModule,
    SmdeCourierControlsModule,
    InputTextModule,
    TableModule,
    ButtonModule,
    RippleModule,
    TranslocoModule,
    MenuModule,
  ],
  declarations: [
    PostamatCreateFormComponent,
    PostamatDeleteFormComponent,
    PostamatDetailFormComponent,
    PostamatTableComponent,
    PostamatUpdateFormComponent,
  ],
  exports: [
    PostamatCreateFormComponent,
    PostamatDeleteFormComponent,
    PostamatDetailFormComponent,
    PostamatTableComponent,
    PostamatUpdateFormComponent,
  ],
})
export class SmdePostamatUiModule {}
