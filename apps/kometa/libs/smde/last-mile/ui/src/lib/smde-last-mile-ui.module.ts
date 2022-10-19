import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LastMileAccountsUpdateFormComponent } from './last-mile-accounts-update-form/last-mile-accounts-update-form.component';
import { SharedNgModule } from '@kometa/shared/ng';
import { SharedValidateModule } from '@kometa/shared/validate';
import { SharedTypedFormModule } from '@kometa/shared/typed-form';
import { SharedPrimengUiFormModule } from '@kometa/shared/primeng/ui-form';
import { SharedPrimengUiTableModule } from '@kometa/shared/primeng/ui-table';
import { SharedPrimengUiDetailModule } from '@kometa/shared/primeng/ui-detail';
import { DropdownModule } from 'primeng/dropdown';
import { LastMileAccountsUpdateSkeletonComponent } from './last-mile-accounts-update-skeleton/last-mile-accounts-update-skeleton.component';
import { SkeletonModule } from 'primeng/skeleton';

@NgModule({
  imports: [
    CommonModule,
    SharedNgModule,
    SharedValidateModule,
    SharedTypedFormModule,
    SharedPrimengUiFormModule,
    SharedPrimengUiTableModule,
    SharedPrimengUiDetailModule,
    DropdownModule,
    SkeletonModule,
  ],
  declarations: [LastMileAccountsUpdateFormComponent, LastMileAccountsUpdateSkeletonComponent],
  exports: [LastMileAccountsUpdateFormComponent, LastMileAccountsUpdateSkeletonComponent],
})
export class SmdeLastMileUiModule {}
