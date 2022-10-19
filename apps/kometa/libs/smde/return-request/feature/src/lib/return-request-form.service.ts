import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AsyncValidatorFn, Validators } from '@angular/forms';
import { asyncFormValidIsUnique } from '@kometa/shared/utils';
import { TypedFormBuilder } from '@kometa/shared/typed-form';
import {
  CreateReturnRequestFormModel,
  UpdateReturnRequestFormModel,
} from '@kometa/smde/return-request/ui';
import { ReturnRequestIsCodeUniqueGQL } from '@kometa/smde/return-request/data-access';
import { ReturnRequestFragment } from '@kometa/smde/return-request/types';

@Injectable({
  providedIn: 'any',
})
export class ReturnRequestFormService {
  constructor(
    private readonly fb: TypedFormBuilder,
    private readonly isCodeUniqueGQL: ReturnRequestIsCodeUniqueGQL
  ) {}

  buildFormCreate() {
    return this.fb.group<CreateReturnRequestFormModel>({
      code: this.fb.control('', [Validators.required], [this.isCodeUnique()]),
      packingPlaceId: this.fb.control(null, [Validators.required]),
      courierId: this.fb.control(null, [Validators.required]),
      cause: this.fb.control('', [Validators.required]),
      comment: this.fb.control(null),
    });
  }

  buildFormUpdate({ courierId, comment }: ReturnRequestFragment) {
    return this.fb.group<UpdateReturnRequestFormModel>({
      courierId: this.fb.control(courierId, [Validators.required]),
      comment: this.fb.control(comment),
    });
  }

  private isCodeUnique(code?: string): AsyncValidatorFn {
    return (control) => {
      if (control.value === code) {
        return of(null);
      }

      const sub = this.isCodeUniqueGQL
        .fetch({ code: control.value })
        .pipe(map(({ data }) => data.returnRequestsAny));
      return asyncFormValidIsUnique(control, sub);
    };
  }
}
