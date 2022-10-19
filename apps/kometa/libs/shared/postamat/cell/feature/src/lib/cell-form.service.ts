import { Injectable } from '@angular/core';
import { AsyncValidatorFn, Validators } from '@angular/forms';
import { TypedFormBuilder } from '@kometa/shared/typed-form';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { asyncFormValidIsUnique } from '@kometa/shared/utils';
import {
  CellIsBarcodeUniqueGQL,
  CellIsNameUniqueGQL,
  CellIsPinCodeUniqueGQL,
  CellIsServicePinCodeUniqueGQL,
} from '@kometa/shared/postamat/cell/data-access';
import { CreateCellFormModel, UpdateCellFormModel } from '@kometa/shared/postamat/cell/ui';
import { CellFragment, TypeCell } from '@kometa/shared/postamat/cell/types';

@Injectable({
  providedIn: 'any',
})
export class CellFormService {
  constructor(
    private readonly fb: TypedFormBuilder,
    private readonly isNameUniqueGQL: CellIsNameUniqueGQL,
    private readonly isBarcodeUniqueGQL: CellIsBarcodeUniqueGQL,
    private readonly isPinCodeUniqueGQL: CellIsPinCodeUniqueGQL,
    private readonly isServicePinCodeUniqueGQL: CellIsServicePinCodeUniqueGQL
  ) {}

  buildFormCreate(postamatId: string) {
    return this.fb.group<CreateCellFormModel>({
      typeCell: this.fb.control(TypeCell.Cell, [Validators.required]),
      name: this.fb.control('', [Validators.required], [this.isNameUnique(postamatId)]),
      barcode: this.fb.control('', [Validators.required], [this.isBarcodeUnique(postamatId)]),
    });
  }

  buildFormUpdate(postamatId: string, { name, barcode, pinCode, servicePinCode }: CellFragment) {
    return this.fb.group<UpdateCellFormModel>({
      name: this.fb.control(name, [Validators.required], [this.isNameUnique(postamatId, name)]),
      barcode: this.fb.control(
        barcode,
        [Validators.required],
        [this.isBarcodeUnique(postamatId, barcode)]
      ),
      pinCode: this.fb.control(pinCode, [], [this.isPinCodeUnique(postamatId, pinCode)]),
      servicePinCode: this.fb.control(
        servicePinCode,
        [],
        [this.isServicePinCodeUnique(postamatId, servicePinCode)]
      ),
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
        .pipe(map(({ data }) => data.cellsAny));
      return asyncFormValidIsUnique(control, sub);
    };
  }

  private isBarcodeUnique(postamatId: string, barcode?: string): AsyncValidatorFn {
    return (control) => {
      if (control.value === barcode) {
        return of(null);
      }

      const sub = this.isBarcodeUniqueGQL
        .fetch({
          postamatId,
          barcode: control.value,
        })
        .pipe(map(({ data }) => data.cellsAny));
      return asyncFormValidIsUnique(control, sub);
    };
  }

  private isPinCodeUnique(postamatId: string, pinCode?: string | null): AsyncValidatorFn {
    return (control) => {
      if (control.value === pinCode) {
        return of(null);
      }

      const sub = this.isPinCodeUniqueGQL
        .fetch({
          postamatId,
          pinCode: control.value,
        })
        .pipe(map(({ data }) => data.cellsAny));
      return asyncFormValidIsUnique(control, sub);
    };
  }

  private isServicePinCodeUnique(
    postamatId: string,
    servicePinCode?: string | null
  ): AsyncValidatorFn {
    return (control) => {
      if (control.value === servicePinCode) {
        return of(null);
      }

      const sub = this.isServicePinCodeUniqueGQL
        .fetch({
          postamatId,
          servicePinCode: control.value,
        })
        .pipe(map(({ data }) => data.cellsAny));
      return asyncFormValidIsUnique(control, sub);
    };
  }
}
