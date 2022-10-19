import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { CreatePromixControllerFormModel } from '../create-promix-controller-form.model';
import { SerialPortFormModel } from '@kometa/shared/ui-serial-port';

@Component({
  selector: 'kometa-promix-controller-create-form',
  templateUrl: './promix-controller-create-form.component.html',
  styleUrls: ['./promix-controller-create-form.component.scss'],
})
export class PromixControllerCreateFormComponent {
  @Input()
  formGroup!: TypedFormGroup<CreatePromixControllerFormModel>;

  @Input()
  portNames?: string[];

  @Output()
  readonly save = new EventEmitter<CreatePromixControllerFormModel>();

  @Output()
  readonly cancel = new EventEmitter();

  get formGroupSettings() {
    return this.formGroup.get('settings') as TypedFormGroup<SerialPortFormModel>;
  }

  onSave() {
    if (this.formGroup.valid && this.formGroup.value) {
      const { name, quantity, settings } = this.formGroup.value;

      this.save.emit({
        name,
        quantity,
        settings,
      });
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}
