import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedTypedFormModule } from '@kometa/shared/typed-form';
import { SharedDadataModule } from '@kometa/shared/dadata';
import { CompanyCreateFormComponent } from './company-create-form/company-create-form.component';
import { CompanyDeleteFormComponent } from './company-delete-form/company-delete-form.component';
import { CompanyDetailFormComponent } from './company-detail-form/company-detail-form.component';
import { CompanyUpdateFormComponent } from './company-update-form/company-update-form.component';
import { TableModule } from 'primeng/table';
import { InputMaskModule } from 'primeng/inputmask';
import { FieldsetModule } from 'primeng/fieldset';
import { SharedPrimengUiFormModule } from '@kometa/shared/primeng/ui-form';
import { SharedPrimengUiTableModule } from '@kometa/shared/primeng/ui-table';
import { SharedPrimengUiDetailModule } from '@kometa/shared/primeng/ui-detail';
import { AccountBankFormComponent } from './account-bank-form/account-bank-form.component';
import { CompanyRequisitesFormComponent } from './company-requisites-form/company-requisites-form.component';
import { ContractorTableComponent } from './contractor-table/contractor-table.component';
import { IndividualEntrepreneurCreateFormComponent } from './individual-entrepreneur-create-form/individual-entrepreneur-create-form.component';
import { IndividualEntrepreneurDeleteFormComponent } from './individual-entrepreneur-delete-form/individual-entrepreneur-delete-form.component';
import { IndividualEntrepreneurDetailFormComponent } from './individual-entrepreneur-detail-form/individual-entrepreneur-detail-form.component';
import { IndividualEntrepreneurUpdateFormComponent } from './individual-entrepreneur-update-form/individual-entrepreneur-update-form.component';
import { IndividualEntrepreneurRequisitesFormComponent } from './individual-entrepreneur-requisites-form/individual-entrepreneur-requisites-form.component';
import { SharedValidateModule } from '@kometa/shared/validate';
import { SharedNgModule } from '@kometa/shared/ng';
import { ContractorSkeletonComponent } from './contractor-skeleton/contractor-skeleton.component';
import { SkeletonModule } from 'primeng/skeleton';

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
    TableModule,
    InputMaskModule,
    FieldsetModule,
    SkeletonModule,
  ],
  declarations: [
    ContractorTableComponent,
    CompanyCreateFormComponent,
    CompanyDeleteFormComponent,
    CompanyDetailFormComponent,
    CompanyUpdateFormComponent,
    AccountBankFormComponent,
    CompanyRequisitesFormComponent,
    IndividualEntrepreneurCreateFormComponent,
    IndividualEntrepreneurDeleteFormComponent,
    IndividualEntrepreneurDetailFormComponent,
    IndividualEntrepreneurUpdateFormComponent,
    IndividualEntrepreneurRequisitesFormComponent,
    ContractorSkeletonComponent,
  ],
  exports: [
    ContractorTableComponent,
    CompanyCreateFormComponent,
    CompanyDeleteFormComponent,
    CompanyDetailFormComponent,
    CompanyUpdateFormComponent,
    IndividualEntrepreneurCreateFormComponent,
    IndividualEntrepreneurDeleteFormComponent,
    IndividualEntrepreneurDetailFormComponent,
    IndividualEntrepreneurUpdateFormComponent,
    ContractorSkeletonComponent,
  ],
})
export class SmdeContractorUiModule {}
