import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { UpdateSmsCenterAccountFormModel } from '../update-sms-center-account-form.model';

@Component({
  selector: 'kometa-sms-center-account-update-form',
  templateUrl: './sms-center-account-update-form.component.html',
  styleUrls: ['./sms-center-account-update-form.component.scss'],
})
export class SmsCenterAccountUpdateFormComponent {
  @Input()
  formGroup!: TypedFormGroup<UpdateSmsCenterAccountFormModel>;
  @Output()
  readonly save = new EventEmitter<UpdateSmsCenterAccountFormModel>();

  @Output()
  readonly cancel = new EventEmitter();

  onSave() {
    if (this.formGroup.valid && this.formGroup.value) {
      const { name, sender, login } = this.formGroup.value;

      this.save.emit({
        name,
        sender,
        login,
      });
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}
