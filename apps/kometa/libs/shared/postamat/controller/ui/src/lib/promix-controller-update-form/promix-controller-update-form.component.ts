import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { UpdatePromixControllerFormModel } from '../update-promix-controller-form.model';
import { SerialPortFormModel } from '@kometa/shared/ui-serial-port';

@Component({
  selector: 'kometa-promix-controller-update-form',
  templateUrl: './promix-controller-update-form.component.html',
  styleUrls: ['./promix-controller-update-form.component.scss'],
})
export class PromixControllerUpdateFormComponent {
  @Input()
  formGroup!: TypedFormGroup<UpdatePromixControllerFormModel>;

  @Input()
  portNames?: string[];

  @Output()
  readonly save = new EventEmitter<UpdatePromixControllerFormModel>();

  @Output()
  readonly cancel = new EventEmitter();

  get formGroupSettings() {
    return this.formGroup.get('settings') as TypedFormGroup<SerialPortFormModel>;
  }

  onSave() {
    if (this.formGroup.valid && this.formGroup.value) {
      const { name, settings } = this.formGroup.value;

      this.save.emit({
        name,
        settings,
      });
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}
