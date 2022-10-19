import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { UpdateAccessKeyFormModel } from '../update-access-key-form.model';

@Component({
  selector: 'kometa-access-key-update-form',
  templateUrl: './access-key-update-form.component.html',
  styleUrls: ['./access-key-update-form.component.scss'],
})
export class AccessKeyUpdateFormComponent {
  @Input()
  formGroup!: TypedFormGroup<UpdateAccessKeyFormModel>;

  @Output()
  readonly save = new EventEmitter<UpdateAccessKeyFormModel>();

  @Output()
  readonly cancel = new EventEmitter();

  onSave() {
    if (this.formGroup.valid && this.formGroup.value) {
      const { barcode, expiresDt, isDisposable } = this.formGroup.value;

      this.save.emit({
        barcode,
        expiresDt,
        isDisposable,
      });
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}
