import { Injectable } from '@angular/core';
import { EmexOrderIsExternalIdUniqueGQL } from '@kometa/smde/emex/order/data-access';
import { TypedFormBuilder } from '@kometa/shared/typed-form';
import { AsyncValidatorFn, Validators } from '@angular/forms';
import {
  CreateEmexOrderFormModel,
  EmexCustomerFormModel,
  UpdateEmexOrderFormModel,
} from '@kometa/smde/emex/order/ui';
import { EmexOrderFragment } from '@kometa/smde/emex/order/types';
import { map } from 'rxjs/operators';
import { asyncFormValidIsUnique } from '@kometa/shared/utils';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'any',
})
export class EmexOrderFormService {
  constructor(
    private readonly fb: TypedFormBuilder,
    private readonly isExternalIdUniqueGQL: EmexOrderIsExternalIdUniqueGQL
  ) {}

  buildFormCreate() {
    return this.fb.group<CreateEmexOrderFormModel>({
      globalId: this.fb.control('', [Validators.required]),
      externalId: this.fb.control('', [Validators.required], [this.isExternalIdUnique()]),
      customer: this.fb.group<EmexCustomerFormModel>({
        name: this.fb.control('', [Validators.required]),
        externalId: this.fb.control('', [Validators.required]),
        phone: this.fb.control('', [Validators.required]),
        email: this.fb.control(null, [Validators.email]),
      }),
    });
  }

  buildFormUpdate({ customer, globalId, externalId }: EmexOrderFragment) {
    return this.fb.group<UpdateEmexOrderFormModel>({
      globalId: this.fb.control(globalId, [Validators.required]),
      externalId: this.fb.control(
        externalId,
        [Validators.required],
        [this.isExternalIdUnique(externalId)]
      ),
      customer: this.fb.group<EmexCustomerFormModel>({
        name: this.fb.control(customer.name, [Validators.required]),
        externalId: this.fb.control(customer.externalId, [Validators.required]),
        phone: this.fb.control(customer.phone, [Validators.required]),
        email: this.fb.control(customer.email, [Validators.email]),
      }),
    });
  }

  private isExternalIdUnique(externalId?: string): AsyncValidatorFn {
    return (control) => {
      if (control.value === externalId) {
        return of(null);
      }

      const sub = this.isExternalIdUniqueGQL
        .fetch({ externalId: control.value })
        .pipe(map(({ data }) => data.emexOrdersAny));
      return asyncFormValidIsUnique(control, sub);
    };
  }
}
