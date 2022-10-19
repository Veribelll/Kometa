import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  LastMileSmsTemplateFragment,
  NotificationEventType,
  TypeOrder,
} from '@kometa/smde/last-mile/sms-template/types';
import { LazyLoadEvent } from 'primeng/api';
import { getEnumKey } from '@kometa/shared/utils';
import { sortBy } from 'lodash';

@Component({
  selector: 'kometa-last-mile-sms-template-table',
  templateUrl: './last-mile-sms-template-table.component.html',
  styleUrls: ['./last-mile-sms-template-table.component.scss'],
})
export class LastMileSmsTemplateTableComponent {
  private items: LastMileSmsTemplateFragment[] = [];
  rowGroupMetadata: { [key: string]: { index: number; size: number } } = {};

  @Input()
  get smsTemplates(): LastMileSmsTemplateFragment[] {
    return this.items;
  }
  set smsTemplates(value: LastMileSmsTemplateFragment[]) {
    if (value) {
      this.items = sortBy(value, ['typeOrder', 'eventType']);
      this.updateRowGroupMetaData();
    }
  }

  @Input()
  loading = false;

  @Input()
  permissionUpdate = '';

  @Input()
  permissionDelete = '';

  @Output()
  readonly lazyLoad = new EventEmitter<LazyLoadEvent>();

  @Output()
  readonly update = new EventEmitter<LastMileSmsTemplateFragment>();

  @Output()
  readonly delete = new EventEmitter<LastMileSmsTemplateFragment>();

  onLazyLoad(event: LazyLoadEvent): void {
    this.lazyLoad.emit(event);
  }

  onUpdate(smsTemplate: LastMileSmsTemplateFragment): void {
    this.update.emit(smsTemplate);
  }

  onDelete(smsTemplate: LastMileSmsTemplateFragment): void {
    this.delete.emit(smsTemplate);
  }

  updateRowGroupMetaData(): void {
    this.rowGroupMetadata = {};

    if (this.smsTemplates) {
      for (let i = 0; i < this.smsTemplates.length; i++) {
        const rowData = this.smsTemplates[i];
        const typeOrder = rowData.typeOrder;

        if (i === 0) {
          this.rowGroupMetadata[typeOrder] = { index: 0, size: 1 };
        } else {
          const previousRowData = this.smsTemplates[i - 1];
          const previousRowGroup = previousRowData.typeOrder;
          if (typeOrder === previousRowGroup) {
            this.rowGroupMetadata[typeOrder].size++;
          } else {
            this.rowGroupMetadata[typeOrder] = { index: i, size: 1 };
          }
        }
      }
    }
  }

  getTypeOrder({ typeOrder }: LastMileSmsTemplateFragment) {
    return getEnumKey(typeOrder, TypeOrder);
  }

  getEventType({ eventType }: LastMileSmsTemplateFragment) {
    return getEnumKey(eventType, NotificationEventType);
  }
}
