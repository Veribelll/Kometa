import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { UpdateCellFormModel } from '../update-cell-form.model';

@Component({
  selector: 'kometa-cell-update-form',
  templateUrl: './cell-update-form.component.html',
  styleUrls: ['./cell-update-form.component.scss'],
})
export class CellUpdateFormComponent {
  @Input()
  formGroup!: TypedFormGroup<UpdateCellFormModel>;

  @Output()
  readonly save = new EventEmitter<UpdateCellFormModel>();

  @Output()
  readonly cancel = new EventEmitter();

  onSave() {
    if (this.formGroup.valid && this.formGroup.value) {
      const { name, barcode, pinCode, servicePinCode } = this.formGroup.value;

      this.save.emit({
        name,
        barcode,
        pinCode,
        servicePinCode,
      });
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}
