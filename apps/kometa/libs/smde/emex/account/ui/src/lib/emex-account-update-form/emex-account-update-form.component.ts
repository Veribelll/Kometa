import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { UpdateEmexAccountFormModel } from '../update-emex-account-form.model';

@Component({
  selector: 'kometa-emex-account-update-form',
  templateUrl: './emex-account-update-form.component.html',
  styleUrls: ['./emex-account-update-form.component.scss'],
})
export class EmexAccountUpdateFormComponent {
  @Input()
  formGroup!: TypedFormGroup<UpdateEmexAccountFormModel>;

  @Output()
  readonly save = new EventEmitter<UpdateEmexAccountFormModel>();

  @Output()
  readonly cancel = new EventEmitter();

  onSave() {
    if (this.formGroup.valid && this.formGroup.value) {
      const { name, userId } = this.formGroup.value;

      this.save.emit({
        name,
        userId,
      });
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}
