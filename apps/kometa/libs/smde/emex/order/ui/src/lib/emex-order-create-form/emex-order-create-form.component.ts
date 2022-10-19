import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CreateEmexOrderFormModel } from '../create-emex-order-form.model';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { EmexCustomerFormModel } from '../emex-customer-form.model';

@Component({
  selector: 'kometa-emex-order-create-form',
  templateUrl: './emex-order-create-form.component.html',
  styleUrls: ['./emex-order-create-form.component.scss'],
})
export class EmexOrderCreateFormComponent {
  @Input()
  formGroup!: TypedFormGroup<CreateEmexOrderFormModel>;

  @Output()
  readonly save = new EventEmitter<CreateEmexOrderFormModel>();

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
