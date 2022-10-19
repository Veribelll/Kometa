import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SmsTemplateFragment } from '@kometa/smde/sms/template/types';

@Component({
  selector: 'kometa-sms-template-delete-form',
  templateUrl: './sms-template-delete-form.component.html',
  styleUrls: ['./sms-template-delete-form.component.scss'],
})
export class SmsTemplateDeleteFormComponent {
  @Input()
  smsTemplate?: SmsTemplateFragment;

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
}
