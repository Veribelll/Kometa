import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { CreateIndividualEntrepreneurFormModel } from '../create-individual-entrepreneur-form.model';

@Component({
  selector: 'kometa-individual-entrepreneur-create-form',
  templateUrl: './individual-entrepreneur-create-form.component.html',
  styleUrls: ['./individual-entrepreneur-create-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndividualEntrepreneurCreateFormComponent {
  @Input()
  formGroup!: TypedFormGroup<CreateIndividualEntrepreneurFormModel>;

  @Output()
  readonly save = new EventEmitter<CreateIndividualEntrepreneurFormModel>();

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
