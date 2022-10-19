import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmdeContractorUiModule } from '@kometa/smde/contractor/ui';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ContractorsPageComponent } from './contractors-page/contractors-page.component';
import { CompanyCreateDialogComponent } from './company-create-dialog/company-create-dialog.component';
import { CompanyDeleteDialogComponent } from './company-delete-dialog/company-delete-dialog.component';
import { CompanyDetailDialogComponent } from './company-detail-dialog/company-detail-dialog.component';
import { CompanyUpdateDialogComponent } from './company-update-dialog/company-update-dialog.component';
import { IndividualEntrepreneurCreateDialogComponent } from './individual-entrepreneur-create-dialog/individual-entrepreneur-create-dialog.component';
import { IndividualEntrepreneurDeleteDialogComponent } from './individual-entrepreneur-delete-dialog/individual-entrepreneur-delete-dialog.component';
import { IndividualEntrepreneurDetailDialogComponent } from './individual-entrepreneur-detail-dialog/individual-entrepreneur-detail-dialog.component';
import { IndividualEntrepreneurUpdateDialogComponent } from './individual-entrepreneur-update-dialog/individual-entrepreneur-update-dialog.component';
import { SharedAbpModule } from '@kometa/shared/abp';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
  imports: [
    CommonModule,
    SharedAbpModule,
    SmdeContractorUiModule,
    PanelModule,
    TieredMenuModule,
    ButtonModule,
    RippleModule,
    ToolbarModule,
  ],
  declarations: [
    ContractorsPageComponent,
    CompanyCreateDialogComponent,
    CompanyDeleteDialogComponent,
    CompanyDetailDialogComponent,
    CompanyUpdateDialogComponent,
    IndividualEntrepreneurCreateDialogComponent,
    IndividualEntrepreneurDeleteDialogComponent,
    IndividualEntrepreneurDetailDialogComponent,
    IndividualEntrepreneurUpdateDialogComponent,
  ],
  exports: [ContractorsPageComponent],
})
export class SmdeContractorFeatureModule {}
