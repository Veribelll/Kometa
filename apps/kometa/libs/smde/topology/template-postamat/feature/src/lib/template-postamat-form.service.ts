import { Injectable } from '@angular/core';
import { AsyncValidatorFn, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { asyncFormValidIsUnique } from '@kometa/shared/utils';
import { TypedFormBuilder } from '@kometa/shared/typed-form';
import {
  CreateTemplatePostamatFormModel,
  UpdateTemplatePostamatFormModel,
} from '@kometa/smde/topology/template-postamat/ui';
import { TemplatePostamatIsNameUniqueGQL } from '@kometa/smde/topology/template-postamat/data-access';
import { TemplatePostamatFragment } from '@kometa/smde/topology/template-postamat/types';

@Injectable({
  providedIn: 'any',
})
export class TemplatePostamatFormService {
  constructor(
    private readonly fb: TypedFormBuilder,
    private readonly isNameUniqueGQL: TemplatePostamatIsNameUniqueGQL
  ) {}

  buildFormCreate() {
    return this.fb.group<CreateTemplatePostamatFormModel>({
      name: this.fb.control('', [Validators.required], [this.isNameUnique()]),
      sections: this.fb.control([], [Validators.required]),
    });
  }

  buildFormUpdate({ name }: TemplatePostamatFragment) {
    return this.fb.group<UpdateTemplatePostamatFormModel>({
      name: this.fb.control(name, [Validators.required], [this.isNameUnique(name)]),
    });
  }

  private isNameUnique(name?: string): AsyncValidatorFn {
    return (control) => {
      if (control.value === name) {
        return of(null);
      }

      const sub = this.isNameUniqueGQL
        .fetch({ name: control.value })
        .pipe(map(({ data }) => data.templatesPostamatAny));
      return asyncFormValidIsUnique(control, sub);
    };
  }
}
