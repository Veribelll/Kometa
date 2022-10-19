import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { UpdatePackingPlaceFormModel } from '../update-packing-place-form.model';

@Component({
  selector: 'kometa-packing-place-update-form',
  templateUrl: './packing-place-update-form.component.html',
  styleUrls: ['./packing-place-update-form.component.scss'],
})
export class PackingPlaceUpdateFormComponent {
  @Input()
  formGroup!: TypedFormGroup<UpdatePackingPlaceFormModel>;

  @Input()
  sizes: { id: string; name: string }[] = [];

  @Output()
  readonly save = new EventEmitter<UpdatePackingPlaceFormModel>();

  @Output()
  readonly cancel = new EventEmitter();

  onSave() {
    if (this.formGroup.valid && this.formGroup.value) {
      const { barcode, lastMileId, courierId, sizeId } = this.formGroup.value;

      this.save.emit({
        barcode,
        lastMileId,
        courierId,
        sizeId,
      });
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}
