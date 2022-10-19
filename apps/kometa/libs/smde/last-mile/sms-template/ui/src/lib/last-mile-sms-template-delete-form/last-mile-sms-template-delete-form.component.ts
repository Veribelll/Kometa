import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  LastMileSmsTemplateFragment,
  NotificationEventType,
} from '@kometa/smde/last-mile/sms-template/types';
import { getEnumKey } from '@kometa/shared/utils';

@Component({
  selector: 'kometa-last-mile-sms-template-delete-form',
  templateUrl: './last-mile-sms-template-delete-form.component.html',
  styleUrls: ['./last-mile-sms-template-delete-form.component.scss'],
})
export class LastMileSmsTemplateDeleteFormComponent {
  @Input()
  smsTemplate?: LastMileSmsTemplateFragment;

  @Output()
  readonly delete = new EventEmitter();

  @Output()
  readonly cancel = new EventEmitter();

  onDelete() {
    this.delete.emit();
  }

  onCancel() {
    this.cancel.emit();
  }

  getEventType({ eventType }: LastMileSmsTemplateFragment) {
    return getEnumKey(eventType, NotificationEventType);
  }
}
