import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CellDisplayUpdateFormComponent } from './cell-display-update-form/cell-display-update-form.component';
import { TopologyUpdateFormComponent } from './topology-update-form/topology-update-form.component';
import { SharedPrimengUiFormModule } from '@kometa/shared/primeng/ui-form';
import { SharedPrimengUiTableModule } from '@kometa/shared/primeng/ui-table';
import { SharedPrimengUiDetailModule } from '@kometa/shared/primeng/ui-detail';
import { SharedNgModule } from '@kometa/shared/ng';
import { SharedAbpModule } from '@kometa/shared/abp';
import { SharedValidateModule } from '@kometa/shared/validate';
import { SharedTypedFormModule } from '@kometa/shared/typed-form';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TranslocoModule } from '@ngneat/transloco';
import { CellComponent } from './cell/cell.component';
import { PanelEditCellsComponent } from './panel-edit-cells/panel-edit-cells.component';
import { SectionComponent } from './section/section.component';
import { PostamatComponent } from './postamat/postamat.component';
import { PanelEditSectionsComponent } from './panel-edit-sections/panel-edit-sections.component';
import { ListboxModule } from 'primeng/listbox';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TableModule } from 'primeng/table';

@NgModule({
  imports: [
    CommonModule,
    SharedNgModule,
    SharedAbpModule,
    SharedValidateModule,
    SharedTypedFormModule,
    SharedPrimengUiFormModule,
    SharedPrimengUiTableModule,
    SharedPrimengUiDetailModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    TranslocoModule,
    ListboxModule,
    OverlayPanelModule,
    TableModule,
  ],
  declarations: [
    CellComponent,
    PanelEditCellsComponent,
    SectionComponent,
    PostamatComponent,
    PanelEditSectionsComponent,
    CellDisplayUpdateFormComponent,
    TopologyUpdateFormComponent,
  ],
  exports: [
    CellComponent,
    PanelEditCellsComponent,
    SectionComponent,
    PostamatComponent,
    PanelEditSectionsComponent,
    CellDisplayUpdateFormComponent,
    TopologyUpdateFormComponent,
  ],
})
export class SharedTopologyUiModule {}
