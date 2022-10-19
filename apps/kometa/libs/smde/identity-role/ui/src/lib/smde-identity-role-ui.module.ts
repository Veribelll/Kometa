import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdentityRoleCreateFormComponent } from './identity-role-create-form/identity-role-create-form.component';
import { IdentityRoleDeleteFormComponent } from './identity-role-delete-form/identity-role-delete-form.component';
import { IdentityRoleDetailFormComponent } from './identity-role-detail-form/identity-role-detail-form.component';
import { IdentityRoleTableComponent } from './identity-role-table/identity-role-table.component';
import { IdentityRoleUpdateFormComponent } from './identity-role-update-form/identity-role-update-form.component';
import { SharedNgModule } from '@kometa/shared/ng';
import { SharedTypedFormModule } from '@kometa/shared/typed-form';
import { SharedPrimengUiFormModule } from '@kometa/shared/primeng/ui-form';
import { SharedPrimengUiTableModule } from '@kometa/shared/primeng/ui-table';
import { SharedPrimengUiDetailModule } from '@kometa/shared/primeng/ui-detail';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SharedAbpModule } from '@kometa/shared/abp';

@NgModule({
  imports: [
    CommonModule,
    SharedNgModule,
    SharedAbpModule,
    SharedTypedFormModule,
    SharedPrimengUiFormModule,
    SharedPrimengUiTableModule,
    SharedPrimengUiDetailModule,
    NgxValidateCoreModule,
    InputTextModule,
    TableModule,
    ButtonModule,
    RippleModule,
  ],
  declarations: [
    IdentityRoleCreateFormComponent,
    IdentityRoleDeleteFormComponent,
    IdentityRoleDetailFormComponent,
    IdentityRoleTableComponent,
    IdentityRoleUpdateFormComponent,
  ],
  exports: [
    IdentityRoleCreateFormComponent,
    IdentityRoleDeleteFormComponent,
    IdentityRoleDetailFormComponent,
    IdentityRoleTableComponent,
    IdentityRoleUpdateFormComponent,
  ],
})
export class SmdeIdentityRoleUiModule {}
