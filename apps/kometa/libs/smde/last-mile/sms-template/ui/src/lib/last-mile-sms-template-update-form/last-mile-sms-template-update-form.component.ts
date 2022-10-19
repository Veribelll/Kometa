import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { UpdateLastMileSmsTemplateFormModel } from '../update-last-mile-sms-template-form.model';
import { NotificationEventType } from '@kometa/smde/last-mile/sms-template/types';
import { GetSmsTemplatesQueryVariables } from '@kometa/smde/sms/template/types';

@Component({
  selector: 'kometa-last-mile-sms-template-update-form',
  templateUrl: './last-mile-sms-template-update-form.component.html',
  styleUrls: ['./last-mile-sms-template-update-form.component.scss'],
})
export class LastMileSmsTemplateUpdateFormComponent implements OnInit {
  where?: GetSmsTemplatesQueryVariables['where'];

  @Input()
  formGroup!: TypedFormGroup<UpdateLastMileSmsTemplateFormModel>;

  @Input()
  eventType!: NotificationEventType;

  @Output()
  readonly save = new EventEmitter<UpdateLastMileSmsTemplateFormModel>();

  @Output()
  readonly cancel = new EventEmitter();

  ngOnInit() {
    this.where = {
      eventType: { eq: this.eventType },
    };
  }

  onSave() {
    if (this.formGroup.valid && this.formGroup.value) {
      const { smsTemplateId } = this.formGroup.value;
      this.save.emit({ smsTemplateId });
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}
