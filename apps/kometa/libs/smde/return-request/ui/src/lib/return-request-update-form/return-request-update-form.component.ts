import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { UpdateReturnRequestFormModel } from '../update-return-request-form.model';

@Component({
  selector: 'kometa-return-request-update-form',
  templateUrl: './return-request-update-form.component.html',
  styleUrls: ['./return-request-update-form.component.scss'],
})
export class ReturnRequestUpdateFormComponent {
  @Input()
  formGroup!: TypedFormGroup<UpdateReturnRequestFormModel>;

  @Output()
  readonly save = new EventEmitter<UpdateReturnRequestFormModel>();

  @Output()
  readonly cancel = new EventEmitter();

  onSave() {
    if (this.formGroup.valid && this.formGroup.value) {
      const { courierId, comment } = this.formGroup.value;

      this.save.emit({
        courierId,
        comment,
      });
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}
