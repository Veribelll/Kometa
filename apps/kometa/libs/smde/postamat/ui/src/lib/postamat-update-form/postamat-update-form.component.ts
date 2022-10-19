import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { UpdatePostamatFormModel } from '../update-postamat-form.model';

@Component({
  selector: 'kometa-postamat-update-form',
  templateUrl: './postamat-update-form.component.html',
  styleUrls: ['./postamat-update-form.component.scss'],
})
export class PostamatUpdateFormComponent {
  @Input()
  formGroup!: TypedFormGroup<UpdatePostamatFormModel>;

  @Output()
  readonly save = new EventEmitter<UpdatePostamatFormModel>();

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
