import { Component, Input } from '@angular/core';
import { TypedFormGroup } from '@kometa/shared/typed-form';

type FormModel = { roleIds: string[] };

@Component({
  selector: 'kometa-select-roles-field',
  templateUrl: './select-roles-field.component.html',
  styleUrls: ['./select-roles-field.component.scss'],
})
export class SelectRolesFieldComponent {
  @Input()
  formGroup!: TypedFormGroup<FormModel>;

  @Input()
  identityRoles: { id: string; name: string }[] = [];
}
