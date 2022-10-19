import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { UpdateSmsTemplateFormModel } from '../update-sms-template-form.model';

@Component({
  selector: 'kometa-sms-template-update-form',
  templateUrl: './sms-template-update-form.component.html',
  styleUrls: ['./sms-template-update-form.component.scss'],
})
export class SmsTemplateUpdateFormComponent {
  @Input()
  formGroup!: TypedFormGroup<UpdateSmsTemplateFormModel>;

  @Output()
  readonly save = new EventEmitter<UpdateSmsTemplateFormModel>();

  @Output()
  readonly cancel = new EventEmitter();

  onSave() {
    if (this.formGroup.valid && this.formGroup.value) {
      const { name, template, comment } = this.formGroup.value;

      this.save.emit({
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
