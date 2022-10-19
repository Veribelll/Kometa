import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel.component';
import { ControllersComponent } from './controllers/controllers.component';
import { LocksComponent } from './locks/locks.component';
import { CellsComponent } from './cells/cells.component';
import { ScannerComponent } from './scanner/scanner.component';
import { SettingsComponent } from './settings/settings.component';
import { InTransitComponent } from './in-transit/in-transit.component';
import { OrdersComponent } from './orders/orders.component';
import { SerialPrinterComponent } from './serial-printer/serial-printer.component';
import { LogsComponent } from './logs/logs.component';
import { AccessKeysComponent } from './access-keys/access-keys.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPanelComponent,
    children: [
      {
        path: 'controllers',
        component: ControllersComponent,
      },
      {
        path: 'locks',
        component: LocksComponent,
      },
      {
        path: 'cells',
        component: CellsComponent,
      },
      {
        path: 'scanner',
        component: ScannerComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
      {
        path: 'in-transit',
        component: InTransitComponent,
      },
      {
        path: 'orders',
        component: OrdersComponent,
      },
      {
        path: 'logs',
        component: LogsComponent,
      },
      {
        path: 'serial-printer',
        component: SerialPrinterComponent,
      },
      {
        path: 'access-keys',
        component: AccessKeysComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPanelRoutingModule {}
