import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { EmexAccountFragment } from '@kometa/smde/emex/account/types';

@Component({
  selector: 'kometa-emex-account-table',
  templateUrl: './emex-account-table.component.html',
  styleUrls: ['./emex-account-table.component.scss'],
})
export class EmexAccountTableComponent {
  @Input()
  accounts: EmexAccountFragment[] = [];

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
  readonly details = new EventEmitter<EmexAccountFragment>();

  @Output()
  update = new EventEmitter<EmexAccountFragment>();

  @Output()
  delete = new EventEmitter<EmexAccountFragment>();

  onLazyLoad(event: LazyLoadEvent): void {
    this.lazyLoad.emit(event);
  }

  onDetails(account: EmexAccountFragment): void {
    this.details.emit(account);
  }

  onUpdate(account: EmexAccountFragment): void {
    this.update.emit(account);
  }

  onDelete(account: EmexAccountFragment): void {
    this.delete.emit(account);
  }
}
