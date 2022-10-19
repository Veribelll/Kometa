import { Injectable } from '@angular/core';
import { AsyncValidatorFn, Validators } from '@angular/forms';
import { TypedFormBuilder } from '@kometa/shared/typed-form';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { asyncFormValidIsUnique } from '@kometa/shared/utils';
import { Parity, SerialPortFormModel, StopBits } from '@kometa/shared/ui-serial-port';
import { ControllerIsNameUniqueGQL } from '@kometa/shared/postamat/controller/data-access';
import {
  CreatePromixControllerFormModel,
  UpdatePromixControllerFormModel,
} from '@kometa/shared/postamat/controller/ui';
import { PromixControllerFragment } from '@kometa/shared/postamat/controller/types';

@Injectable({
  providedIn: 'any',
})
export class PromixControllerFormService {
  constructor(
    private readonly fb: TypedFormBuilder,
    private readonly isNameUniqueGQL: ControllerIsNameUniqueGQL
  ) {}

  buildFormCreate(postamatId: string) {
    return this.fb.group<CreatePromixControllerFormModel>({
      name: this.fb.control('', [Validators.required], [this.isNameUnique(postamatId)]),
      quantity: this.fb.control(1, [Validators.required, Validators.min(1)]),
      settings: this.fb.group<SerialPortFormModel>({
        baudRate: this.fb.control(9600, [Validators.required, Validators.min(1)]),
        dataBits: this.fb.control(8, [Validators.required, Validators.min(1)]),
        parity: this.fb.control(Parity.None, [Validators.required]),
        stopBits: this.fb.control(StopBits.One, [Validators.required]),
        portName: this.fb.control('', [Validators.required]),
      }),
    });
  }

  buildFormUpdate(
    postamatId: string,
    { name, settings: { baudRate, dataBits, parity, stopBits, portName } }: PromixControllerFragment
  ) {
    return this.fb.group<UpdatePromixControllerFormModel>({
      name: this.fb.control(name, [Validators.required], [this.isNameUnique(postamatId, name)]),
      settings: this.fb.group<SerialPortFormModel>({
        baudRate: this.fb.control(baudRate, [Validators.required, Validators.min(1)]),
        dataBits: this.fb.control(dataBits, [Validators.required, Validators.min(1)]),
        parity: this.fb.control(parity, [Validators.required]),
        stopBits: this.fb.control(stopBits, [Validators.required]),
        portName: this.fb.control(portName, [Validators.required]),
      }),
    });
  }

  private isNameUnique(postamatId: string, name?: string): AsyncValidatorFn {
    return (control) => {
      if (control.value === name) {
        return of(null);
      }

      const sub = this.isNameUniqueGQL
        .fetch({
          postamatId,
          name: control.value,
        })
        .pipe(map(({ data }) => data.controllersAny));
      return asyncFormValidIsUnique(control, sub);
    };
  }
}
