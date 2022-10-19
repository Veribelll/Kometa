import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmdeTenantUiModule } from '@kometa/smde/tenant/ui';
import { SharedAbpModule } from '@kometa/shared/abp';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TenantCreateDialogComponent } from './tenant-create-dialog/tenant-create-dialog.component';
import { TenantDeleteDialogComponent } from './tenant-delete-dialog/tenant-delete-dialog.component';
import { TenantDetailDialogComponent } from './tenant-detail-dialog/tenant-detail-dialog.component';
import { TenantUpdateDialogComponent } from './tenant-update-dialog/tenant-update-dialog.component';
import { TenantsPageComponent } from './tenants-page/tenants-page.component';
import { SmdeContractorUiModule } from '@kometa/smde/contractor/ui';
import { SharedPrimengUiFormModule } from '@kometa/shared/primeng/ui-form';
import { StepsModule } from 'primeng/steps';
import { DropdownModule } from 'primeng/dropdown';
import { SharedTypedFormModule } from '@kometa/shared/typed-form';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
  imports: [
    CommonModule,
    SmdeTenantUiModule,
    SharedPrimengUiFormModule,
    SharedTypedFormModule,
    SmdeContractorUiModule,
    SharedAbpModule,
    PanelModule,
    ButtonModule,
    RippleModule,
    StepsModule,
    DropdownModule,
    ToolbarModule,
  ],
  declarations: [
    TenantCreateDialogComponent,
    TenantDeleteDialogComponent,
    TenantDetailDialogComponent,
    TenantUpdateDialogComponent,
    TenantsPageComponent,
  ],
  exports: [TenantsPageComponent],
})
export class SmdeTenantFeatureModule {}
