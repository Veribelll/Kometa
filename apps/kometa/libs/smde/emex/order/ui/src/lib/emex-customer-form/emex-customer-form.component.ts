import { Component, Input } from '@angular/core';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { EmexCustomerFormModel } from '../emex-customer-form.model';

@Component({
  selector: 'kometa-emex-customer-form',
  templateUrl: './emex-customer-form.component.html',
  styleUrls: ['./emex-customer-form.component.scss'],
})
export class EmexCustomerFormComponent {
  @Input()
  formGroup!: TypedFormGroup<EmexCustomerFormModel>;
}
