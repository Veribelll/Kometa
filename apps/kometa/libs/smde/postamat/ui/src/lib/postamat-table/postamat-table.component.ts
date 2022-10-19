import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LazyLoadEvent, MenuItem } from 'primeng/api';
import { LastMileStatus, PostamatFragment } from '@kometa/smde/postamat/types';
import { getEnumKey } from '@kometa/shared/utils';

@Component({
  selector: 'kometa-postamat-table',
  templateUrl: './postamat-table.component.html',
  styleUrls: ['./postamat-table.component.scss'],
})
export class PostamatTableComponent {
  readonly menuItems: MenuItem[] = [
    {
      label: 'Изменить',
      command: () => this.update.emit(this.select),
    },
    {
      label: 'Детали',
      command: () => this.details.emit(this.select),
    },
    {
      label: 'Аккаунты',
      command: () => this.showAccounts.emit(this.select),
    },
    {
      label: 'Настройки',
      command: () => this.showSettings.emit(this.select),
    },
    {
      label: 'Периоды хранения',
      command: () => this.showStoragePeriods.emit(this.select),
    },
    {
      label: 'Периоды возврата',
      command: () => this.showReturnPeriods.emit(this.select),
    },
    {
      label: 'Контроллеры',
      command: () => this.showControllers.emit(this.select),
    },
    {
      label: 'Ячейки',
      command: () => this.showCells.emit(this.select),
    },
    {
      label: 'Сканер',
      command: () => this.showScanner.emit(this.select),
    },
    {
      label: 'Принтеры',
      command: () => this.showPrinters.emit(this.select),
    },
    {
      label: 'Ключи доступа',
      command: () => this.showAccessKeys.emit(this.select),
    },
    {
      label: 'Шаблоны смс',
      command: () => this.showSmsTemplates.emit(this.select),
    },
    {
      label: 'Удалить',
      command: () => this.delete.emit(this.select),
    },
  ];

  select?: PostamatFragment;

  @Input()
  postamats: PostamatFragment[] = [];

  @Input()
  loading = false;

  @Input()
  totalRecords = 0;

  @Input()
  permissionDetails = '';

  @Input()
  permissionUpdate = '';

  @Input()
  permissionDelete = '';

  @Output()
  readonly lazyLoad = new EventEmitter<LazyLoadEvent>();

  @Output()
  readonly details = new EventEmitter<PostamatFragment>();

  @Output()
  readonly update = new EventEmitter<PostamatFragment>();

  @Output()
  readonly delete = new EventEmitter<PostamatFragment>();

  @Output()
  readonly showSettings = new EventEmitter<PostamatFragment>();

  @Output()
  readonly showAccounts = new EventEmitter<PostamatFragment>();

  @Output()
  readonly showStoragePeriods = new EventEmitter<PostamatFragment>();

  @Output()
  readonly showReturnPeriods = new EventEmitter<PostamatFragment>();

  @Output()
  readonly showControllers = new EventEmitter<PostamatFragment>();

  @Output()
  readonly showCells = new EventEmitter<PostamatFragment>();

  @Output()
  readonly showScanner = new EventEmitter<PostamatFragment>();

  @Output()
  readonly showPrinters = new EventEmitter<PostamatFragment>();

  @Output()
  readonly showAccessKeys = new EventEmitter<PostamatFragment>();

  @Output()
  readonly showSmsTemplates = new EventEmitter<PostamatFragment>();

  onLazyLoad(event: LazyLoadEvent): void {
    this.lazyLoad.emit(event);
  }

  onShowMenu(postamat: PostamatFragment): void {
    this.select = postamat;
  }

  getStatus(postamat: PostamatFragment) {
    return getEnumKey(postamat.status, LastMileStatus);
  }
}
