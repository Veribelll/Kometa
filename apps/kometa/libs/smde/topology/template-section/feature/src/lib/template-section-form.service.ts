import { Injectable } from '@angular/core';
import { AsyncValidatorFn, Validators } from '@angular/forms';
import { TypedFormBuilder } from '@kometa/shared/typed-form';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { asyncFormValidIsUnique } from '@kometa/shared/utils';
import {
  CreateTemplateSectionFormModel,
  UpdateTemplateSectionFormModel,
} from '@kometa/smde/topology/template-section/ui';
import { TemplateSectionIsNameUniqueGQL } from '@kometa/smde/topology/template-section/data-access';
import { TemplateSectionFragment } from '@kometa/smde/topology/template-section/types';

@Injectable({
  providedIn: 'any',
})
export class TemplateSectionFormService {
  constructor(
    private readonly fb: TypedFormBuilder,
    private readonly isNameUniqueGQL: TemplateSectionIsNameUniqueGQL
  ) {}

  buildFormCreate() {
    return this.fb.group<CreateTemplateSectionFormModel>({
      name: this.fb.control('', [Validators.required], [this.isNameUnique()]),
      cells: this.fb.control([], [Validators.required]),
    });
  }

  buildFormUpdate({ name }: TemplateSectionFragment) {
    return this.fb.group<UpdateTemplateSectionFormModel>({
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
        .pipe(map(({ data }) => data.templatesSectionAny));
      return asyncFormValidIsUnique(control, sub);
    };
  }
}
