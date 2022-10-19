import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { CreatePostamatFormModel } from '../create-postamat-form.model';

@Component({
  selector: 'kometa-postamat-create-form',
  templateUrl: './postamat-create-form.component.html',
  styleUrls: ['./postamat-create-form.component.scss'],
})
export class PostamatCreateFormComponent {
  @Input()
  formGroup!: TypedFormGroup<CreatePostamatFormModel>;

  @Output()
  readonly save = new EventEmitter<CreatePostamatFormModel>();

  @Output()
  readonly cancel = new EventEmitter();

  onSave() {
    if (this.formGroup.valid && this.formGroup.value) {
      const { defaultCourierId, name, factoryNumber, externalId, address } = this.formGroup.value;

      this.save.emit({
        defaultCourierId,
        name,
        factoryNumber,
        externalId,
        address,
      });
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}
