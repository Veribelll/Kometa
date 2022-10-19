import { Injectable } from '@angular/core';
import { AsyncValidatorFn, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { asyncFormValidIsUnique } from '@kometa/shared/utils';
import { TypedFormBuilder } from '@kometa/shared/typed-form';
import { AccessKeyIsBarcodeUniqueGQL } from '@kometa/shared/last-mile/access-key/data-access';
import {
  CreateAccessKeyFormModel,
  UpdateAccessKeyFormModel,
} from '@kometa/shared/last-mile/access-key/ui';
import { AccessKeyFragment } from '@kometa/shared/last-mile/access-key/types';

@Injectable({
  providedIn: 'root',
})
export class AccessKeyFormService {
  constructor(
    private readonly fb: TypedFormBuilder,
    private readonly isBarcodeUniqueGQL: AccessKeyIsBarcodeUniqueGQL
  ) {}

  buildFormCreate(lastMileId: string) {
    return this.fb.group<CreateAccessKeyFormModel>({
      barcode: this.fb.control('', [Validators.required], [this.isBarcodeUnique(lastMileId)]),
      identityUserId: this.fb.control(null, [Validators.required]),
      expiresDt: this.fb.control(null),
      isDisposable: this.fb.control(false),
    });
  }

  buildFormUpdate(lastMileId: string, { barcode, expiresDt, isDisposable }: AccessKeyFragment) {
    return this.fb.group<UpdateAccessKeyFormModel>({
      barcode: this.fb.control(
        barcode,
        [Validators.required],
        [this.isBarcodeUnique(lastMileId, barcode)]
      ),
      expiresDt: this.fb.control(expiresDt ? new Date(expiresDt) : null),
      isDisposable: this.fb.control(isDisposable),
    });
  }

  private isBarcodeUnique(lastMileId: string, barcode?: string): AsyncValidatorFn {
    return (control) => {
      if (control.value === barcode) {
        return of(null);
      }

      const sub = this.isBarcodeUniqueGQL
        .fetch({
          lastMileId,
          barcode: control.value,
        })
        .pipe(map(({ data }) => data.accessKeysAny));
      return asyncFormValidIsUnique(control, sub);
    };
  }
}
