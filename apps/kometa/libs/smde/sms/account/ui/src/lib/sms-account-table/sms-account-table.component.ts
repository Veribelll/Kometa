import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { SmsAccountFragment } from '@kometa/smde/sms/account/types';

@Component({
  selector: 'kometa-sms-account-table',
  templateUrl: './sms-account-table.component.html',
  styleUrls: ['./sms-account-table.component.css'],
})
export class SmsAccountTableComponent {
  @Input()
  smsAccounts: SmsAccountFragment[] = [];

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
  readonly details = new EventEmitter<SmsAccountFragment>();

  @Output()
  readonly update = new EventEmitter<SmsAccountFragment>();

  @Output()
  readonly delete = new EventEmitter<SmsAccountFragment>();

  onLazyLoad(event: LazyLoadEvent): void {
    this.lazyLoad.emit(event);
  }

  onDetails(account: SmsAccountFragment): void {
    this.details.emit(account);
  }

  onUpdate(account: SmsAccountFragment): void {
    this.update.emit(account);
  }

  onDelete(account: SmsAccountFragment): void {
    this.delete.emit(account);
  }
}
