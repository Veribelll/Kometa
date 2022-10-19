import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'kometa-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss'],
})
export class AdminPanelComponent {
  url?: string;

  readonly menu = [
    {
      label: 'Контроллеры',
      active: 'assets/admin-panel/lock-active.png',
      inactive: 'assets/admin-panel/lock-not-active.png',
      value: 'controllers',
    },
    {
      label: 'Замки',
      active: 'assets/admin-panel/lock-active.png',
      inactive: 'assets/admin-panel/lock-not-active.png',
      value: 'locks',
    },
    {
      label: 'Ячейки',
      active: 'assets/admin-panel/cude-active.png',
      inactive: 'assets/admin-panel/cude-not-active.png',
      value: 'cells',
    },
    {
      label: 'Сканер ШК',
      active: 'assets/admin-panel/scanner-active.png',
      inactive: 'assets/admin-panel/scanner-not-active.png',
      value: 'scanner',
    },
    {
      label: 'Настройки',
      active: 'assets/admin-panel/settings-active.png',
      inactive: 'assets/admin-panel/settings-not-active.png',
      value: 'settings',
    },
    {
      label: 'В пути',
      active: 'assets/admin-panel/truck-active.png',
      inactive: 'assets/admin-panel/truck-not-active.png',
      value: 'in-transit',
    },
    {
      label: 'Заказы',
      active: 'assets/admin-panel/todo-active.png',
      inactive: 'assets/admin-panel/todo-not-active.png',
      value: 'orders',
    },
    {
      label: 'Лог',
      active: 'assets/admin-panel/folder-active.png',
      inactive: 'assets/admin-panel/folder-not-active.png',
      value: 'logs',
    },
    {
      label: 'Принтер',
      active: 'assets/admin-panel/printer-active.png',
      inactive: 'assets/admin-panel/printer-not-active.png',
      value: 'serial-printer',
    },
    {
      label: 'Ключи доступа',
      active: 'assets/admin-panel/key-active.png',
      inactive: 'assets/admin-panel/key-not-active.png',
      value: 'access-keys',
    },
  ];

  constructor(private readonly activatedRoute: ActivatedRoute, private readonly router: Router) {}

  async onChange() {
    await this.router.navigate([this.url], { relativeTo: this.activatedRoute });
  }

  async onExit() {
    await this.router.navigate(['/']);
  }
}
