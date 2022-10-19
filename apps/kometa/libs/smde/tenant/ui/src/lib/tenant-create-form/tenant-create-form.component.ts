import { Component, Output, EventEmitter, ChangeDetectionStrategy, Input } from '@angular/core';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { CreateTenantFormModel } from '../create-tenant-form.model';

@Component({
  selector: 'kometa-tenant-create-form',
  templateUrl: './tenant-create-form.component.html',
  styleUrls: ['./tenant-create-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TenantCreateFormComponent {
  @Input()
  formGroup!: TypedFormGroup<CreateTenantFormModel>;

  @Output()
  readonly save = new EventEmitter<CreateTenantFormModel>();

  @Output()
  readonly cancel = new EventEmitter();

  onSave() {
    if (this.formGroup.valid && this.formGroup.value) {
      const {
        name,
        emailForDocuments,
        adminEmailAddress,
        adminPassword,
        adminPasswordConfirm,
      } = this.formGroup.value;

      this.save.emit({
        name,
        emailForDocuments,
        adminEmailAddress,
        adminPassword,
        adminPasswordConfirm,
      });
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}
