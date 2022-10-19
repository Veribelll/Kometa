import { Injectable } from '@angular/core';
import { AsyncValidatorFn, Validators } from '@angular/forms';
import { TypedFormBuilder } from '@kometa/shared/typed-form';
import {
  CreateSmsTemplateFormModel,
  UpdateSmsTemplateFormModel,
} from '@kometa/smde/sms/template/ui';
import { map, of } from 'rxjs';
import { asyncFormValidIsUnique } from '@kometa/shared/utils';
import { SmsTemplateIsNameUniqueGQL } from '@kometa/smde/sms/template/data-access';
import { SmsTemplateFragment } from '@kometa/smde/sms/template/types';

@Injectable({
  providedIn: 'any',
})
export class SmsTemplateFormService {
  constructor(
    private readonly fb: TypedFormBuilder,
    private readonly isNameUniqueGQL: SmsTemplateIsNameUniqueGQL
  ) {}

  buildFormCreate() {
    return this.fb.group<CreateSmsTemplateFormModel>({
      eventType: this.fb.control(null, [Validators.required]),
      name: this.fb.control('', [Validators.required], [this.isNameUnique()]),
      template: this.fb.control('', [Validators.required]),
      comment: this.fb.control(''),
    });
  }

  buildFormUpdate({ name, template, comment }: SmsTemplateFragment) {
    return this.fb.group<UpdateSmsTemplateFormModel>({
      name: this.fb.control(name, [Validators.required], [this.isNameUnique(name)]),
      template: this.fb.control(template, [Validators.required]),
      comment: this.fb.control(comment),
    });
  }

  private isNameUnique(name?: string): AsyncValidatorFn {
    return (control) => {
      if (control.value === name) {
        return of(null);
      }

      const sub = this.isNameUniqueGQL
        .fetch({ name: control.value })
        .pipe(map(({ data }) => data.smsTemplatesAny));
      return asyncFormValidIsUnique(control, sub);
    };
  }
}
