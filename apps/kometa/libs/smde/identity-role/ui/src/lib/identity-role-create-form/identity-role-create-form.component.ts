import { Component, Output, EventEmitter, ChangeDetectionStrategy, Input } from '@angular/core';
import { CreateIdentityRoleFormModel } from '../create-identity-role-form.model';
import { TypedFormGroup } from '@kometa/shared/typed-form';

@Component({
  selector: 'kometa-identity-role-create-form',
  templateUrl: './identity-role-create-form.component.html',
  styleUrls: ['./identity-role-create-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IdentityRoleCreateFormComponent {
  @Input()
  formGroup!: TypedFormGroup<CreateIdentityRoleFormModel>;

  @Output()
  readonly save = new EventEmitter<CreateIdentityRoleFormModel>();

  @Output()
  readonly cancel = new EventEmitter();

  onSave() {
    if (this.formGroup.valid && this.formGroup.value) {
      const { name } = this.formGroup.value;

      this.save.emit({ name });
    }
  }

  onCancel(): void {
    this.cancel.emit();
  }
}
