import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { UpdateIdentityRoleFormModel } from '../update-identity-role-form.model';

@Component({
  selector: 'kometa-identity-role-update-form',
  templateUrl: './identity-role-update-form.component.html',
  styleUrls: ['./identity-role-update-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IdentityRoleUpdateFormComponent {
  @Input()
  formGroup!: TypedFormGroup<UpdateIdentityRoleFormModel>;

  @Output()
  readonly save = new EventEmitter<UpdateIdentityRoleFormModel>();

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
