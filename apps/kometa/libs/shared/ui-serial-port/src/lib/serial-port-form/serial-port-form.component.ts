import { Component, Input } from '@angular/core';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { Parity, SerialPortFormModel, StopBits } from '../serial-port-form.model';
import { enumToArray } from '@kometa/shared/utils';

const baudRates = [2400, 4800, 9600, 14400, 19200, 38400, 57600, 115200, 128000, 256000];

@Component({
  selector: 'kometa-serial-port-form',
  templateUrl: './serial-port-form.component.html',
  styleUrls: ['./serial-port-form.component.scss'],
})
export class SerialPortFormComponent {
  _portNames: { id: string; name: string }[] = [];

  readonly parities = enumToArray(Parity);
  readonly stopBits = enumToArray(StopBits);
  readonly baudRates = baudRates.map((x) => ({ id: x, name: x }));

  @Input()
  formGroup!: TypedFormGroup<SerialPortFormModel>;

  @Input()
  set portNames(value: string[] | undefined) {
    this._portNames = (value ?? ['COM1', 'COM2', 'COM3', 'COM4', 'COM5', 'COM6']).map((x) => ({
      id: x,
      name: x,
    }));
  }
}
