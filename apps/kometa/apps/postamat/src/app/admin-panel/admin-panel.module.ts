import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { AdminPanelComponent } from './admin-panel.component';
import { SharedTypedFormModule } from '@kometa/shared/typed-form';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ControllersComponent } from './controllers/controllers.component';
import { SharedAbpModule } from '@kometa/shared/abp';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { MenuModule } from 'primeng/menu';
import { LocksComponent } from './locks/locks.component';
import { CellsComponent } from './cells/cells.component';
import { ScannerComponent } from './scanner/scanner.component';
import { SettingsComponent } from './settings/settings.component';
import { InTransitComponent } from './in-transit/in-transit.component';
import { OrdersComponent } from './orders/orders.component';
import { SerialPrinterComponent } from './serial-printer/serial-printer.component';
import { AccessKeysComponent } from './access-keys/access-keys.component';
import { LogsComponent } from './logs/logs.component';
import { TableModule } from 'primeng/table';
import { TranslocoModule } from '@ngneat/transloco';
import { SharedPrimengUiTableModule } from '@kometa/shared/primeng/ui-table';
import { SharedPostamatFeatureModule } from '@kometa/shared/postamat/feature';
import { SharedPostamatControllerFeatureModule } from '@kometa/shared/postamat/controller/feature';
import { SharedPostamatCellFeatureModule } from '@kometa/shared/postamat/cell/feature';
import { SharedLastMileAccessKeyFeatureModule } from '@kometa/shared/last-mile/access-key/feature';
import { PostamatAdminPanelFeatureModule } from '@kometa/postamat/admin-panel/feature';
import { DividerModule } from 'primeng/divider';

@NgModule({
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    PostamatAdminPanelFeatureModule,
    SharedAbpModule,
    SharedTypedFormModule,
    SharedPrimengUiTableModule,
    SharedPostamatFeatureModule,
    SharedPostamatControllerFeatureModule,
    SharedPostamatCellFeatureModule,
    SharedLastMileAccessKeyFeatureModule,
    PanelModule,
    ButtonModule,
    RippleModule,
    MenuModule,
    SelectButtonModule,
    TableModule,
    TranslocoModule,
    DividerModule,
  ],
  declarations: [
    AdminPanelComponent,
    ControllersComponent,
    LocksComponent,
    CellsComponent,
    ScannerComponent,
    SettingsComponent,
    InTransitComponent,
    OrdersComponent,
    SerialPrinterComponent,
    AccessKeysComponent,
    LogsComponent,
  ],
})
export class AdminPanelModule {}
