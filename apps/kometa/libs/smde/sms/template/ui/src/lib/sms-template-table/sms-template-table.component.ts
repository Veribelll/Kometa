import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { NotificationEventType, SmsTemplateFragment } from '@kometa/smde/sms/template/types';
import { getEnumKey } from '@kometa/shared/utils';

@Component({
  selector: 'kometa-sms-template-table',
  templateUrl: './sms-template-table.component.html',
  styleUrls: ['./sms-template-table.component.scss'],
})
export class SmsTemplateTableComponent {
  @Input()
  smsTemplates: SmsTemplateFragment[] = [];

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
  readonly details = new EventEmitter<SmsTemplateFragment>();

  @Output()
  readonly update = new EventEmitter<SmsTemplateFragment>();

  @Output()
  readonly delete = new EventEmitter<SmsTemplateFragment>();

  onLazyLoad(event: LazyLoadEvent): void {
    this.lazyLoad.emit(event);
  }

  onDetails(smsTemplate: SmsTemplateFragment): void {
    this.details.emit(smsTemplate);
  }

  onUpdate(smsTemplate: SmsTemplateFragment): void {
    this.update.emit(smsTemplate);
  }

  onDelete(smsTemplate: SmsTemplateFragment): void {
    this.delete.emit(smsTemplate);
  }

  getEventType({ eventType }: SmsTemplateFragment) {
    return getEnumKey(eventType, NotificationEventType);
  }
}
