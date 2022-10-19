import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UpdatePostamatSerialPrinterFormModel } from '../update-postamat-serial-printer-form.model';
import { TypedFormGroup } from '@kometa/shared/typed-form';

@Component({
  selector: 'kometa-postamat-serial-printer-update-form',
  templateUrl: './postamat-serial-printer-update-form.component.html',
  styleUrls: ['./postamat-serial-printer-update-form.component.scss'],
})
export class PostamatSerialPrinterUpdateFormComponent {
  @Input()
  formGroup!: TypedFormGroup<UpdatePostamatSerialPrinterFormModel>;

  @Output()
  readonly save = new EventEmitter<UpdatePostamatSerialPrinterFormModel>();

  @Output()
  readonly cancel = new EventEmitter();

  onSave() {
    if (this.formGroup.valid && this.formGroup.value) {
      const { baudRate, dataBits, parity, stopBits, portName, isEnabled } = this.formGroup.value;
      this.save.emit({ baudRate, dataBits, parity, stopBits, portName, isEnabled });
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}
