import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AsyncValidatorFn, Validators } from '@angular/forms';
import { TypedFormBuilder } from '@kometa/shared/typed-form';
import { asyncFormValidIsUnique } from '@kometa/shared/utils';
import {
  CreateTemplateCellFormModel,
  UpdateTemplateCellFormModel,
} from '@kometa/smde/topology/template-cell/ui';
import { TemplateCellIsNameUniqueGQL } from '@kometa/smde/topology/template-cell/data-access';
import { TemplateCellFragment } from '@kometa/smde/topology/template-cell/types';

@Injectable({
  providedIn: 'any',
})
export class TemplateCellFormService {
  constructor(
    private readonly fb: TypedFormBuilder,
    private readonly isNameUniqueGQL: TemplateCellIsNameUniqueGQL
  ) {}

  buildFormCreate() {
    return this.fb.group<CreateTemplateCellFormModel>({
      isCell: this.fb.control(true, [Validators.required]),
      name: this.fb.control('', [Validators.required], [this.isNameUnique()]),
      height: this.fb.control(1, [Validators.required, Validators.min(1)]),
      width: this.fb.control(1, [Validators.required, Validators.min(1)]),
      sizeId: this.fb.control('', [Validators.required]),
      image: this.fb.control(null),
    });
  }

  buildFormUpdate({ name, isCell, sizeId }: TemplateCellFragment) {
    return this.fb.group<UpdateTemplateCellFormModel>({
      name: this.fb.control(name, [Validators.required], [this.isNameUnique(name)]),
      sizeId: this.fb.control(sizeId, isCell ? [Validators.required] : []),
    });
  }

  private isNameUnique(name?: string): AsyncValidatorFn {
    return (control) => {
      if (control.value === name) {
        return of(null);
      }

      const sub = this.isNameUniqueGQL
        .fetch({ name: control.value })
        .pipe(map(({ data }) => data.templatesCellAny));
      return asyncFormValidIsUnique(control, sub);
    };
  }
}
