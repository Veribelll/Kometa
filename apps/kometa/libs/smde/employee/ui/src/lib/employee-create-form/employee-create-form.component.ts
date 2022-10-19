import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CreateEmployeeFormModel } from '../create-employee-form.model';
import { TypedFormGroup } from '@kometa/shared/typed-form';

@Component({
  selector: 'kometa-employee-create-form',
  templateUrl: './employee-create-form.component.html',
  styleUrls: ['./employee-create-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeCreateFormComponent {
  @Input()
  formGroup!: TypedFormGroup<CreateEmployeeFormModel>;

  @Input()
  contractors: { id: string; name: string }[] = [];

  @Input()
  identityRoles: { id: string; name: string }[] = [];

  @Output()
  readonly save = new EventEmitter<CreateEmployeeFormModel>();

  @Output()
  readonly cancel = new EventEmitter();

  onSave() {
    if (this.formGroup.valid && this.formGroup.value) {
      const {
        contractorIds,
        surname,
        firstName,
        middleName,
        phoneNumber,
        roleIds,
        email,
        password,
        passwordConfirm,
      } = this.formGroup.value;

      this.save.emit({
        contractorIds,
        surname,
        firstName,
        middleName,
        phoneNumber,
        roleIds,
        email,
        password,
        passwordConfirm,
      });
    }
  }

  onCancel(): void {
    this.cancel.emit();
  }
}
