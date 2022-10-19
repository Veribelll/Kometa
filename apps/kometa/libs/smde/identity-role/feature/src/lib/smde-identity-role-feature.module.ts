import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmdeIdentityRoleUiModule } from '@kometa/smde/identity-role/ui';
import { SharedAbpModule } from '@kometa/shared/abp';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { IdentityRoleCreateDialogComponent } from './identity-role-create-dialog/identity-role-create-dialog.component';
import { IdentityRoleDeleteDialogComponent } from './identity-role-delete-dialog/identity-role-delete-dialog.component';
import { IdentityRoleDetailDialogComponent } from './identity-role-detail-dialog/identity-role-detail-dialog.component';
import { IdentityRoleUpdateDialogComponent } from './identity-role-update-dialog/identity-role-update-dialog.component';
import { IdentityRolesPageComponent } from './identity-roles-page/identity-roles-page.component';
import { SmdePermissionFeatureModule } from '@kometa/smde/permission/feature';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
  imports: [
    CommonModule,
    SmdeIdentityRoleUiModule,
    SharedAbpModule,
    SmdePermissionFeatureModule,
    PanelModule,
    ButtonModule,
    RippleModule,
    ToolbarModule,
  ],
  declarations: [
    IdentityRoleCreateDialogComponent,
    IdentityRoleDeleteDialogComponent,
    IdentityRoleDetailDialogComponent,
    IdentityRoleUpdateDialogComponent,
    IdentityRolesPageComponent,
  ],
  exports: [IdentityRolesPageComponent],
})
export class SmdeIdentityRoleFeatureModule {}
