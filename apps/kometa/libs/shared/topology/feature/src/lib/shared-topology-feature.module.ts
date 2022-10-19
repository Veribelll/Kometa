import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedTopologyUiModule } from '@kometa/shared/topology/ui';
import { CellDisplayUpdateDialogComponent } from './cell-display-update-dialog/cell-display-update-dialog.component';
import { TopologyUpdateDialogComponent } from './topology-update-dialog/topology-update-dialog.component';
import { PostamatViewPageComponent } from './postamat-view-page/postamat-view-page.component';

@NgModule({
  imports: [CommonModule, SharedTopologyUiModule],
  declarations: [
    CellDisplayUpdateDialogComponent,
    TopologyUpdateDialogComponent,
    PostamatViewPageComponent,
  ],
  exports: [PostamatViewPageComponent],
})
export class SharedTopologyFeatureModule {}
