import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { ControllerFragment } from '@kometa/shared/postamat/controller/types';

@Component({
  selector: 'kometa-controller-table',
  templateUrl: './controller-table.component.html',
  styleUrls: ['./controller-table.component.scss'],
})
export class ControllerTableComponent {
  @Input()
  controllers: ControllerFragment[] = [];

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
  readonly update = new EventEmitter<ControllerFragment>();

  @Output()
  readonly delete = new EventEmitter<ControllerFragment>();

  onLazyLoad(event: LazyLoadEvent): void {
    this.lazyLoad.emit(event);
  }

  onUpdate(controller: ControllerFragment): void {
    this.update.emit(controller);
  }

  onDelete(controller: ControllerFragment): void {
    this.delete.emit(controller);
  }
}
