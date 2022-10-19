import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { CreateAccessKeyFormModel } from '../create-access-key-form.model';

@Component({
  selector: 'kometa-access-key-create-form',
  templateUrl: './access-key-create-form.component.html',
  styleUrls: ['./access-key-create-form.component.scss'],
})
export class AccessKeyCreateFormComponent {
  @Input()
  formGroup!: TypedFormGroup<CreateAccessKeyFormModel>;

  @Output()
  readonly save = new EventEmitter<CreateAccessKeyFormModel>();

  @Output()
  readonly cancel = new EventEmitter();

  onSave() {
    if (this.formGroup.valid && this.formGroup.value) {
      const { barcode, identityUserId, expiresDt, isDisposable } = this.formGroup.value;

      this.save.emit({
        barcode,
        identityUserId,
        expiresDt,
        isDisposable,
      });
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}
