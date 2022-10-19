import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CreateEmexAccountFormModel } from '../create-emex-account-form.model';
import { TypedFormGroup } from '@kometa/shared/typed-form';

@Component({
  selector: 'kometa-emex-account-create-form',
  templateUrl: './emex-account-create-form.component.html',
  styleUrls: ['./emex-account-create-form.component.scss'],
})
export class EmexAccountCreateFormComponent {
  @Input()
  formGroup!: TypedFormGroup<CreateEmexAccountFormModel>;

  @Output()
  readonly save = new EventEmitter<CreateEmexAccountFormModel>();

  @Output()
  readonly cancel = new EventEmitter();

  onSave() {
    if (this.formGroup.valid && this.formGroup.value) {
      const { name, userId, password } = this.formGroup.value;

      this.save.emit({
        name,
        userId,
        password,
      });
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}
