import { Component, EventEmitter, Input, Output } from '@angular/core';
import { getEnumKey } from '@kometa/shared/utils';
import { LazyLoadEvent } from 'primeng/api';
import { CellFragment, TypeCell, CellStatus } from '@kometa/shared/postamat/cell/types';

@Component({
  selector: 'kometa-cell-table',
  templateUrl: './cell-table.component.html',
  styleUrls: ['./cell-table.component.scss'],
})
export class CellTableComponent {
  @Input()
  cells: CellFragment[] = [];

  @Input()
  loading = false;

  @Input()
  scrollable = false;

  @Input()
  scrollHeight?: string;

  @Input()
  permissionDetails = '';

  @Input()
  permissionUpdate = '';

  @Input()
  permissionDelete = '';

  @Output()
  readonly lazyLoad = new EventEmitter<LazyLoadEvent>();

  @Output()
  details = new EventEmitter<CellFragment>();

  @Output()
  update = new EventEmitter<CellFragment>();

  @Output()
  activate = new EventEmitter<CellFragment>();

  @Output()
  deactivate = new EventEmitter<CellFragment>();

  @Output()
  assignLock = new EventEmitter<CellFragment>();

  @Output()
  delete = new EventEmitter<CellFragment>();

  showAssignLock({ type }: CellFragment) {
    return type === TypeCell.Cell || type === TypeCell.Service;
  }

  onLazyLoad(event: LazyLoadEvent): void {
    this.lazyLoad.emit(event);
  }

  onDetails(cell: CellFragment): void {
    this.details.emit(cell);
  }

  onUpdate(cell: CellFragment): void {
    this.update.emit(cell);
  }

  onActivate(cell: CellFragment): void {
    this.activate.emit(cell);
  }

  onDeactivate(cell: CellFragment): void {
    this.deactivate.emit(cell);
  }

  onAssignLock(cell: CellFragment) {
    this.assignLock.emit(cell);
  }

  onDelete(cell: CellFragment): void {
    this.delete.emit(cell);
  }

  getType(cell: CellFragment) {
    return getEnumKey(cell.type, TypeCell);
  }

  getStatus(cell: CellFragment) {
    return getEnumKey(cell.status, CellStatus);
  }
}
