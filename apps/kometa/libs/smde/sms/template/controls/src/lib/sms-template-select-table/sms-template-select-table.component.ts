import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NotificationEventType, SmsTemplateFragment } from '@kometa/smde/sms/template/types';
import { LazyLoadEvent } from 'primeng/api';
import { PrimeNgSelectionMode } from '@kometa/shared/primeng/ui-table';
import { getEnumKey } from '@kometa/shared/utils';

type SelectedType = SmsTemplateFragment | SmsTemplateFragment[];

@Component({
  selector: 'kometa-sms-template-select-table',
  templateUrl: './sms-template-select-table.component.html',
  styleUrls: ['./sms-template-select-table.component.scss'],
})
export class SmsTemplateSelectTableComponent {
  @Input()
  smsTemplates: SmsTemplateFragment[] = [];

  @Input()
  loading = false;

  @Input()
  totalRecords = 0;

  @Input()
  selected?: SelectedType;

  @Input()
  selectionMode: PrimeNgSelectionMode = 'single';

  @Output()
  readonly lazyLoad = new EventEmitter<LazyLoadEvent>();

  @Output()
  readonly details = new EventEmitter<SmsTemplateFragment>();

  @Output()
  readonly selectedChange = new EventEmitter<SelectedType>();

  onLazyLoad(event: LazyLoadEvent): void {
    this.lazyLoad.emit(event);
  }

  onDetails(smsTemplate: SmsTemplateFragment): void {
    this.details.emit(smsTemplate);
  }

  onSelectedChange(selected: SelectedType) {
    this.selectedChange.emit(selected);
  }

  getEventType({ eventType }: SmsTemplateFragment) {
    return getEnumKey(eventType, NotificationEventType);
  }
}
