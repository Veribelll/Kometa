import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedTypedFormModule } from '@kometa/shared/typed-form';
import { SharedPrimengUiFormModule } from '@kometa/shared/primeng/ui-form';
import { SharedPrimengUiTableModule } from '@kometa/shared/primeng/ui-table';
import { SharedPrimengUiDetailModule } from '@kometa/shared/primeng/ui-detail';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { TableModule } from 'primeng/table';
import { TenantCreateFormComponent } from './tenant-create-form/tenant-create-form.component';
import { TenantUpdateFormComponent } from './tenant-update-form/tenant-update-form.component';
import { TenantDeleteFormComponent } from './tenant-delete-form/tenant-delete-form.component';
import { TenantDetailFormComponent } from './tenant-detail-form/tenant-detail-form.component';
import { TenantTableComponent } from './tenant-table/tenant-table.component';
import { SmdeContractorUiModule } from '@kometa/smde/contractor/ui';
import { SharedNgModule } from '@kometa/shared/ng';
import { SharedValidateModule } from '@kometa/shared/validate';

@NgModule({
  imports: [
    CommonModule,
    SharedNgModule,
    SharedValidateModule,
    SharedTypedFormModule,
    SharedPrimengUiFormModule,
    SharedPrimengUiTableModule,
    SharedPrimengUiDetailModule,
    SmdeContractorUiModule,
    InputTextModule,
    PasswordModule,
    TableModule,
  ],
  declarations: [
    TenantCreateFormComponent,
    TenantUpdateFormComponent,
    TenantDeleteFormComponent,
    TenantDetailFormComponent,
    TenantTableComponent,
  ],
  exports: [
    TenantCreateFormComponent,
    TenantUpdateFormComponent,
    TenantDeleteFormComponent,
    TenantDetailFormComponent,
    TenantTableComponent,
  ],
})
export class SmdeTenantUiModule {}
