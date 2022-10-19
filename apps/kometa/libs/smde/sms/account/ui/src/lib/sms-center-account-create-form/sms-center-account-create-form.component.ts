import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { CreateSmsCenterAccountFormModel } from '../create-sms-center-account-form.model';

@Component({
  selector: 'kometa-sms-center-account-create-form',
  templateUrl: './sms-center-account-create-form.component.html',
  styleUrls: ['./sms-center-account-create-form.component.scss'],
})
export class SmsCenterAccountCreateFormComponent {
  @Input()
  formGroup!: TypedFormGroup<CreateSmsCenterAccountFormModel>;

  @Output()
  readonly save = new EventEmitter<CreateSmsCenterAccountFormModel>();

  @Output()
  readonly cancel = new EventEmitter();

  onSave() {
    if (this.formGroup.valid && this.formGroup.value) {
      const { name, sender, login, password } = this.formGroup.value;

      this.save.emit({
        name,
        sender,
        login,
        password,
      });
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}
