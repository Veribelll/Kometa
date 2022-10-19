import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { CreateReturnRequestFormModel } from '../create-return-request-form.model';
import { PackingPlaceFilterInput, PackingPlaceStatus } from '@kometa/smde/packing-place/types';

@Component({
  selector: 'kometa-return-request-create-form',
  templateUrl: './return-request-create-form.component.html',
  styleUrls: ['./return-request-create-form.component.scss'],
})
export class ReturnRequestCreateFormComponent {
  readonly where: PackingPlaceFilterInput = {
    status: { in: [PackingPlaceStatus.Sent, PackingPlaceStatus.Accepted] },
  };

  @Input()
  formGroup!: TypedFormGroup<CreateReturnRequestFormModel>;

  @Output()
  readonly save = new EventEmitter<CreateReturnRequestFormModel>();

  @Output()
  readonly cancel = new EventEmitter();

  onSave() {
    if (this.formGroup.valid && this.formGroup.value) {
      const { packingPlaceId, code, courierId, cause, comment } = this.formGroup.value;

      this.save.emit({
        packingPlaceId,
        code,
        courierId,
        cause,
        comment,
      });
    }
  }

  onCancel() {
    console.log(this.formGroup.get('courierId').value);
    this.cancel.emit();
  }
}
