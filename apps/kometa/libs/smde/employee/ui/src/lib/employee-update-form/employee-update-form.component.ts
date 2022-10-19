import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { UpdateEmployeeFormModel } from '../update-employee-form.model';

@Component({
  selector: 'kometa-employee-update-form',
  templateUrl: './employee-update-form.component.html',
  styleUrls: ['./employee-update-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeUpdateFormComponent {
  @Input()
  formGroup!: TypedFormGroup<UpdateEmployeeFormModel>;

  @Input()
  contractors: { id: string; name: string }[] = [];

  @Input()
  identityRoles: { id: string; name: string }[] = [];

  @Output()
  readonly save = new EventEmitter<UpdateEmployeeFormModel>();

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
      } = this.formGroup.value;

      this.save.emit({
        contractorIds,
        surname,
        firstName,
        middleName,
        phoneNumber,
        roleIds,
      });
    }
  }

  onCancel(): void {
    this.cancel.emit();
  }
}
