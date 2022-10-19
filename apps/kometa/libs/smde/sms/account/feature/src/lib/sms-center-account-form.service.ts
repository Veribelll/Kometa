import { Injectable } from '@angular/core';
import { AsyncValidatorFn, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { asyncFormValidIsUnique } from '@kometa/shared/utils';
import { TypedFormBuilder } from '@kometa/shared/typed-form';
import {
  CreateSmsCenterAccountFormModel,
  UpdateSmsCenterAccountFormModel,
} from '@kometa/smde/sms/account/ui';
import { SmsAccountIsNameUniqueGQL } from '@kometa/smde/sms/account/data-access';
import { SmsCenterAccountFragment } from '@kometa/smde/sms/account/types';

@Injectable({
  providedIn: 'any',
})
export class SmsCenterAccountFormService {
  constructor(
    private readonly fb: TypedFormBuilder,
    private readonly isNameUniqueGQL: SmsAccountIsNameUniqueGQL
  ) {}

  buildFormCreate() {
    return this.fb.group<CreateSmsCenterAccountFormModel>({
      name: this.fb.control('', [Validators.required], [this.isNameUnique()]),
      sender: this.fb.control('', [Validators.required]),
      login: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required]),
    });
  }

  buildFormUpdate({ name, sender, login }: SmsCenterAccountFragment) {
    return this.fb.group<UpdateSmsCenterAccountFormModel>({
      name: this.fb.control(name, [Validators.required], [this.isNameUnique(name)]),
      sender: this.fb.control(sender, [Validators.required]),
      login: this.fb.control(login, [Validators.required]),
    });
  }

  private isNameUnique(name?: string): AsyncValidatorFn {
    return (control) => {
      if (control.value === name) {
        return of(null);
      }

      const sub = this.isNameUniqueGQL
        .fetch({ name: control.value })
        .pipe(map(({ data }) => data.smsAccountsAny));
      return asyncFormValidIsUnique(control, sub);
    };
  }
}
