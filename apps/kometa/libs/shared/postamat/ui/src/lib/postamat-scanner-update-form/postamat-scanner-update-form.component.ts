import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UpdatePostamatScannerFormModel } from '../update-postamat-scanner-form.model';
import { TypedFormGroup } from '@kometa/shared/typed-form';

@Component({
  selector: 'kometa-postamat-scanner-update-form',
  templateUrl: './postamat-scanner-update-form.component.html',
  styleUrls: ['./postamat-scanner-update-form.component.scss'],
})
export class PostamatScannerUpdateFormComponent {
  @Input()
  formGroup!: TypedFormGroup<UpdatePostamatScannerFormModel>;

  @Output()
  readonly save = new EventEmitter<UpdatePostamatScannerFormModel>();

  @Output()
  readonly cancel = new EventEmitter();

  onSave() {
    if (this.formGroup.valid && this.formGroup.value) {
      const { baudRate, dataBits, parity, stopBits, portName } = this.formGroup.value;

      this.save.emit({
        baudRate,
        dataBits,
        parity,
        stopBits,
        portName,
      });
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}
