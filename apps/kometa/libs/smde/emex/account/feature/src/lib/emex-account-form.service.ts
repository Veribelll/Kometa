import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AsyncValidatorFn, Validators } from '@angular/forms';
import { asyncFormValidIsUnique } from '@kometa/shared/utils';
import { TypedFormBuilder } from '@kometa/shared/typed-form';
import {
  CreateEmexAccountFormModel,
  UpdateEmexAccountFormModel,
} from '@kometa/smde/emex/account/ui';
import { EmexAccountIsNameUniqueGQL } from '@kometa/smde/emex/account/data-access';
import { EmexAccountFragment } from '@kometa/smde/emex/account/types';

@Injectable({
  providedIn: 'any',
})
export class EmexAccountFormService {
  constructor(
    private readonly fb: TypedFormBuilder,
    private readonly isNameUniqueGQL: EmexAccountIsNameUniqueGQL
  ) {}

  buildFormCreate() {
    return this.fb.group<CreateEmexAccountFormModel>({
      name: this.fb.control('', [Validators.required], [this.isNameUnique()]),
      userId: this.fb.control(0, [Validators.required]),
      password: this.fb.control('', [Validators.required]),
    });
  }

  buildFormUpdate({ name, userId }: EmexAccountFragment) {
    return this.fb.group<UpdateEmexAccountFormModel>({
      name: this.fb.control(name, [Validators.required], [this.isNameUnique(name)]),
      userId: this.fb.control(userId, [Validators.required]),
    });
  }

  private isNameUnique(name?: string): AsyncValidatorFn {
    return (control) => {
      if (control.value === name) {
        return of(null);
      }

      const sub = this.isNameUniqueGQL
        .fetch({ name: control.value })
        .pipe(map(({ data }) => data.emexAccountsAny));
      return asyncFormValidIsUnique(control, sub);
    };
  }
}
