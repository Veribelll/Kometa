import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { UpdateIndividualEntrepreneurFormModel } from '../update-individual-entrepreneur-form.model';

@Component({
  selector: 'kometa-individual-entrepreneur-update-form',
  templateUrl: './individual-entrepreneur-update-form.component.html',
  styleUrls: ['./individual-entrepreneur-update-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndividualEntrepreneurUpdateFormComponent {
  @Input()
  formGroup!: TypedFormGroup<UpdateIndividualEntrepreneurFormModel>;

  @Output()
  readonly save = new EventEmitter<UpdateIndividualEntrepreneurFormModel>();

  @Output()
  readonly cancel = new EventEmitter();

  onSave() {
    if (this.formGroup.valid && this.formGroup.value) {
      const {
        name,
        inn,
        okpo,
        ogrnip,
        accountBank,
        address,
        actualAddress,
        mailingAddress,
      } = this.formGroup.value;

      this.save.emit({
        name,
        inn,
        okpo,
        ogrnip,
        accountBank,
        address,
        actualAddress,
        mailingAddress,
      });
    }
  }

  onCancel(): void {
    this.cancel.emit();
  }
}
