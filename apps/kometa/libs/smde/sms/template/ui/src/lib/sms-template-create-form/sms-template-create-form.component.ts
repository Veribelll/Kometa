import { Component, Input, Output, EventEmitter } from '@angular/core';
import { enumToArray } from '@kometa/shared/utils';
import { NotificationEventType } from '@kometa/smde/sms/template/types';
import { CreateSmsTemplateFormModel } from '../create-sms-template-form.model';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'kometa-sms-template-create-form',
  templateUrl: './sms-template-create-form.component.html',
  styleUrls: ['./sms-template-create-form.component.scss'],
})
export class SmsTemplateCreateFormComponent {
  readonly notificationEventType = enumToArray(NotificationEventType).map(({ id, name }) => ({
    id,
    name: this.translocoService.translate('NotificationEventType:' + name),
  }));

  @Input()
  formGroup!: TypedFormGroup<CreateSmsTemplateFormModel>;

  @Output()
  readonly save = new EventEmitter<CreateSmsTemplateFormModel>();

  @Output()
  readonly cancel = new EventEmitter();

  get eventType() {
    return this.formGroup.get('eventType')?.value;
  }

  constructor(private translocoService: TranslocoService) {}

  onSelectField(template: string) {
    const control = this.formGroup.get('template');
    const value = control?.value;
    control?.setValue(value + template);
  }

  onSave() {
    if (this.formGroup.valid && this.formGroup.value) {
      const { eventType, name, template, comment } = this.formGroup.value;

      this.save.emit({
        eventType,
        name,
        template,
        comment,
      });
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}
