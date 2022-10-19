import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedNgModule } from '@kometa/shared/ng';
import { SharedDadataModule } from '@kometa/shared/dadata';
import { SharedValidateModule } from '@kometa/shared/validate';
import { SharedTypedFormModule } from '@kometa/shared/typed-form';
import { SharedPrimengUiFormModule } from '@kometa/shared/primeng/ui-form';
import { SharedPrimengUiTableModule } from '@kometa/shared/primeng/ui-table';
import { SharedPrimengUiDetailModule } from '@kometa/shared/primeng/ui-detail';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { PasswordModule } from 'primeng/password';
import { TableModule } from 'primeng/table';
import { EmexAccountCreateFormComponent } from './emex-account-create-form/emex-account-create-form.component';
import { EmexAccountDeleteFormComponent } from './emex-account-delete-form/emex-account-delete-form.component';
import { EmexAccountDetailFormComponent } from './emex-account-detail-form/emex-account-detail-form.component';
import { EmexAccountTableComponent } from './emex-account-table/emex-account-table.component';
import { EmexAccountUpdateFormComponent } from './emex-account-update-form/emex-account-update-form.component';

@NgModule({
  imports: [
    CommonModule,
    SharedNgModule,
    SharedDadataModule,
    SharedValidateModule,
    SharedTypedFormModule,
    SharedPrimengUiFormModule,
    SharedPrimengUiTableModule,
    SharedPrimengUiDetailModule,
    NgxValidateCoreModule,
    DropdownModule,
    InputTextModule,
    InputNumberModule,
    PasswordModule,
    TableModule,
  ],
  declarations: [
    EmexAccountCreateFormComponent,
    EmexAccountDeleteFormComponent,
    EmexAccountDetailFormComponent,
    EmexAccountTableComponent,
    EmexAccountUpdateFormComponent,
  ],
  exports: [
    EmexAccountCreateFormComponent,
    EmexAccountDeleteFormComponent,
    EmexAccountDetailFormComponent,
    EmexAccountTableComponent,
    EmexAccountUpdateFormComponent,
  ],
})
export class SmdeEmexAccountUiModule {}
