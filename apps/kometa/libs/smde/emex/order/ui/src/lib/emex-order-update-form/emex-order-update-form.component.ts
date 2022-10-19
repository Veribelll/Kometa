import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { UpdateEmexOrderFormModel } from '../update-emex-order-form.model';
import { EmexCustomerFormModel } from '../emex-customer-form.model';

@Component({
  selector: 'kometa-emex-order-update-form',
  templateUrl: './emex-order-update-form.component.html',
  styleUrls: ['./emex-order-update-form.component.scss'],
})
export class EmexOrderUpdateFormComponent {
  @Input()
  formGroup!: TypedFormGroup<UpdateEmexOrderFormModel>;

  @Output()
  readonly save = new EventEmitter<UpdateEmexOrderFormModel>();

  @Output()
  readonly cancel = new EventEmitter();

  get customerFormGroup() {
    return this.formGroup.get('customer') as TypedFormGroup<EmexCustomerFormModel>;
  }

  onSave() {
    if (this.formGroup.valid && this.formGroup.value) {
      const { globalId, externalId, customer } = this.formGroup.value;

      this.save.emit({
        globalId,
        externalId,
        customer,
      });
    }
  }

  onCancel(): void {
    this.cancel.emit();
  }
}
