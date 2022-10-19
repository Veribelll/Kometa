import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedNgModule } from '@kometa/shared/ng';
import { SharedTypedFormModule } from '@kometa/shared/typed-form';
import { SharedPrimengUiFormModule } from '@kometa/shared/primeng/ui-form';
import { SharedPrimengUiTableModule } from '@kometa/shared/primeng/ui-table';
import { SharedPrimengUiDetailModule } from '@kometa/shared/primeng/ui-detail';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { DividerModule } from 'primeng/divider';
import { CheckboxModule } from 'primeng/checkbox';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { PermissionFieldsComponent } from './permission-fields/permission-fields.component';
import { UpdatePermissionsFormComponent } from './update-permissions-form/update-permissions-form.component';
import { PermissionSkeletonComponent } from './permission-skeleton/permission-skeleton.component';
import { SkeletonModule } from 'primeng/skeleton';

@NgModule({
  imports: [
    CommonModule,
    SharedNgModule,
    SharedTypedFormModule,
    SharedPrimengUiFormModule,
    SharedPrimengUiTableModule,
    SharedPrimengUiDetailModule,
    ButtonModule,
    RippleModule,
    DividerModule,
    CheckboxModule,
    ScrollPanelModule,
    SkeletonModule,
  ],
  declarations: [
    PermissionFieldsComponent,
    UpdatePermissionsFormComponent,
    PermissionSkeletonComponent,
  ],
  exports: [UpdatePermissionsFormComponent, PermissionSkeletonComponent],
})
export class SmdePermissionUiModule {}
