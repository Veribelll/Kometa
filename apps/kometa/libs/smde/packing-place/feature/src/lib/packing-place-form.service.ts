import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AsyncValidatorFn, Validators } from '@angular/forms';
import { PackingPlaceIsBarcodeUniqueGQL } from '@kometa/smde/packing-place/data-access';
import { asyncFormValidIsUnique } from '@kometa/shared/utils';
import { TypedFormBuilder } from '@kometa/shared/typed-form';
import {
  CreatePackingPlaceFormModel,
  UpdatePackingPlaceFormModel,
} from '@kometa/smde/packing-place/ui';
import { PackingPlaceFragment } from '@kometa/smde/packing-place/types';

@Injectable({
  providedIn: 'any',
})
export class PackingPlaceFormService {
  constructor(
    private readonly fb: TypedFormBuilder,
    private readonly isBarcodeUniqueGQL: PackingPlaceIsBarcodeUniqueGQL
  ) {}

  buildFormCreate(barcode?: string) {
    return this.fb.group<CreatePackingPlaceFormModel>({
      typeOrder: this.fb.control(null, [Validators.required]),
      barcode: this.fb.control(
        barcode ?? '',
        [Validators.required],
        [this.isBarcodeUnique(barcode)]
      ),
      lastMileId: this.fb.control(null),
      courierId: this.fb.control(null),
      sizeId: this.fb.control(null),
    });
  }

  buildFormUpdate({ barcode, lastMileId, courierId, sizeId }: PackingPlaceFragment) {
    return this.fb.group<UpdatePackingPlaceFormModel>({
      barcode: this.fb.control(barcode, [Validators.required], [this.isBarcodeUnique(barcode)]),
      lastMileId: this.fb.control(lastMileId),
      courierId: this.fb.control(courierId),
      sizeId: this.fb.control(sizeId),
    });
  }

  private isBarcodeUnique(barcode?: string): AsyncValidatorFn {
    return (control) => {
      if (control.value === barcode) {
        return of(null);
      }

      const sub = this.isBarcodeUniqueGQL
        .fetch({ barcode: control.value })
        .pipe(map(({ data }) => data.packingPlacesAny));
      return asyncFormValidIsUnique(control, sub);
    };
  }
}
