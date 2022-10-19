import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmdePermissionUiModule } from '@kometa/smde/permission/ui';
import { UpdatePermissionsDialogComponent } from './update-permissions-dialog/update-permissions-dialog.component';

@NgModule({
  imports: [CommonModule, SmdePermissionUiModule],
  declarations: [UpdatePermissionsDialogComponent],
})
export class SmdePermissionFeatureModule {}
