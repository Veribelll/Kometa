import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { UpdateTenantFormModel } from '../update-tenant-form.model';

@Component({
  selector: 'kometa-tenant-update-form',
  templateUrl: './tenant-update-form.component.html',
  styleUrls: ['./tenant-update-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TenantUpdateFormComponent {
  @Input()
  formGroup!: TypedFormGroup<UpdateTenantFormModel>;

  @Output()
  readonly save = new EventEmitter<UpdateTenantFormModel>();

  @Output()
  readonly cancel = new EventEmitter();

  onSave() {
    if (this.formGroup.valid && this.formGroup.value) {
      const { name, emailForDocuments } = this.formGroup.value;

      this.save.emit({
        name,
        emailForDocuments,
      });
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}
