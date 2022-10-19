import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { AccessKeyFragment } from '@kometa/shared/last-mile/access-key/types';

@Component({
  selector: 'kometa-access-key-table',
  templateUrl: './access-key-table.component.html',
  styleUrls: ['./access-key-table.component.scss'],
})
export class AccessKeyTableComponent {
  @Input()
  accessKeys: AccessKeyFragment[] = [];

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
  update = new EventEmitter<AccessKeyFragment>();

  @Output()
  delete = new EventEmitter<AccessKeyFragment>();

  onLazyLoad(event: LazyLoadEvent): void {
    this.lazyLoad.emit(event);
  }

  onUpdate(accessKey: AccessKeyFragment): void {
    this.update.emit(accessKey);
  }

  onDelete(accessKey: AccessKeyFragment): void {
    this.delete.emit(accessKey);
  }
}
