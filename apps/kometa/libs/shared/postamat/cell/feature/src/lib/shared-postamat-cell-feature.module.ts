import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedAbpModule } from '@kometa/shared/abp';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { MenuModule } from 'primeng/menu';
import { ToolbarModule } from 'primeng/toolbar';
import { SharedPostamatCellUiModule } from '@kometa/shared/postamat/cell/ui';
import { CellDetailDialogComponent } from './cell-detail-dialog/cell-detail-dialog.component';
import { CellCreateDialogComponent } from './cell-create-dialog/cell-create-dialog.component';
import { CellsPageComponent } from './cells-page/cells-page.component';
import { CellUpdateDialogComponent } from './cell-update-dialog/cell-update-dialog.component';
import { CellsDialogComponent } from './cells-dialog/cells-dialog.component';
import { CellDeleteDialogComponent } from './cell-delete-dialog/cell-delete-dialog.component';
import { AssignLockToCellDialogComponent } from './assign-lock-to-cell-dialog/assign-lock-to-cell-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    SharedAbpModule,
    SharedPostamatCellUiModule,
    PanelModule,
    ButtonModule,
    RippleModule,
    MenuModule,
    ToolbarModule,
  ],
  declarations: [
    CellCreateDialogComponent,
    CellDeleteDialogComponent,
    CellDetailDialogComponent,
    CellsDialogComponent,
    CellsPageComponent,
    CellUpdateDialogComponent,
    AssignLockToCellDialogComponent,
  ],
  exports: [CellsPageComponent],
})
export class SharedPostamatCellFeatureModule {}
