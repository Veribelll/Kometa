import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { UpdateShipmentRequestFormModel } from '../update-shipment-request-form.model';

@Component({
  selector: 'kometa-shipment-request-update-form',
  templateUrl: './shipment-request-update-form.component.html',
  styleUrls: ['./shipment-request-update-form.component.scss'],
})
export class ShipmentRequestUpdateFormComponent {
  @Input()
  formGroup!: TypedFormGroup<UpdateShipmentRequestFormModel>;

  @Output()
  readonly save = new EventEmitter<UpdateShipmentRequestFormModel>();

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
