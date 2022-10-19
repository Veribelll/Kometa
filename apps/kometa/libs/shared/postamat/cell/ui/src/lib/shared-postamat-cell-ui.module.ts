import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedNgModule } from '@kometa/shared/ng';
import { SharedAbpModule } from '@kometa/shared/abp';
import { SharedValidateModule } from '@kometa/shared/validate';
import { SharedTypedFormModule } from '@kometa/shared/typed-form';
import { SharedPostamatUiModule } from '@kometa/shared/postamat/ui';
import { SharedPrimengUiFormModule } from '@kometa/shared/primeng/ui-form';
import { SharedPrimengUiTableModule } from '@kometa/shared/primeng/ui-table';
import { SharedPrimengUiDetailModule } from '@kometa/shared/primeng/ui-detail';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { TableModule } from 'primeng/table';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TranslocoModule } from '@ngneat/transloco';
import { TooltipModule } from 'primeng/tooltip';
import { CellCreateFormComponent } from './cell-create-form/cell-create-form.component';
import { CellTableComponent } from './cell-table/cell-table.component';
import { CellDetailFormComponent } from './cell-detail-form/cell-detail-form.component';
import { CellUpdateFormComponent } from './cell-update-form/cell-update-form.component';
import { CellDeleteFormComponent } from './cell-delete-form/cell-delete-form.component';
import { PanelModule } from 'primeng/panel';
import { CellDetailSkeletonComponent } from './cell-detail-skeleton/cell-detail-skeleton.component';
import { SkeletonModule } from 'primeng/skeleton';
import { AssignLockToCellFormComponent } from './assign-lock-to-cell-form/assign-lock-to-cell-form.component';

@NgModule({
  imports: [
    CommonModule,
    SharedNgModule,
    SharedAbpModule,
    SharedValidateModule,
    SharedTypedFormModule,
    SharedPostamatUiModule,
    SharedPrimengUiFormModule,
    SharedPrimengUiTableModule,
    SharedPrimengUiDetailModule,
    DropdownModule,
    InputTextModule,
    InputNumberModule,
    TableModule,
    InputSwitchModule,
    ButtonModule,
    RippleModule,
    TranslocoModule,
    TooltipModule,
    PanelModule,
    SkeletonModule,
  ],
  declarations: [
    CellCreateFormComponent,
    CellDeleteFormComponent,
    CellDetailFormComponent,
    CellTableComponent,
    CellUpdateFormComponent,
    CellDetailSkeletonComponent,
    AssignLockToCellFormComponent,
  ],
  exports: [
    CellCreateFormComponent,
    CellDeleteFormComponent,
    CellDetailFormComponent,
    CellTableComponent,
    CellUpdateFormComponent,
    CellDetailSkeletonComponent,
    AssignLockToCellFormComponent,
  ],
})
export class SharedPostamatCellUiModule {}
