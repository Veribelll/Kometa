import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackingPlaceInTransitTableComponent } from './packing-place-in-transit-table/packing-place-in-transit-table.component';
import { PackingPlaceAcceptedTableComponent } from './packing-place-accepted-table/packing-place-accepted-table.component';
import { TranslocoModule } from '@ngneat/transloco';
import { TableModule } from 'primeng/table';
import { SharedPrimengUiTableModule } from '@kometa/shared/primeng/ui-table';
import { SharedAbpModule } from '@kometa/shared/abp';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SharedEmployeeUiModule } from '@kometa/shared/employee/ui';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  imports: [
    CommonModule,
    SharedAbpModule,
    SharedPrimengUiTableModule,
    SharedEmployeeUiModule,
    TranslocoModule,
    TableModule,
    ButtonModule,
    RippleModule,
    TooltipModule,
  ],
  declarations: [PackingPlaceInTransitTableComponent, PackingPlaceAcceptedTableComponent],
  exports: [PackingPlaceInTransitTableComponent, PackingPlaceAcceptedTableComponent],
})
export class PostamatAdminPanelUiModule {}
