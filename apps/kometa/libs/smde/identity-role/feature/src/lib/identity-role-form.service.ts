import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AsyncValidatorFn, Validators } from '@angular/forms';
import { TypedFormBuilder } from '@kometa/shared/typed-form';
import {
  CreateIdentityRoleFormModel,
  UpdateIdentityRoleFormModel,
} from '@kometa/smde/identity-role/ui';
import { asyncFormValidIsUnique } from '@kometa/shared/utils';
import { IdentityRoleFragment } from '@kometa/smde/identity-role/types';
import { IdentityRoleIsNameUniqueGQL } from '@kometa/smde/identity-role/data-access';

@Injectable({
  providedIn: 'any',
})
export class IdentityRoleFormService {
  constructor(
    private readonly fb: TypedFormBuilder,
    private readonly isNameUniqueGQL: IdentityRoleIsNameUniqueGQL
  ) {}

  buildFormCreate() {
    return this.buildForm();
  }

  buildFormUpdate(identityRole: IdentityRoleFragment) {
    return this.buildForm(identityRole);
  }

  private buildForm(identityRole?: Partial<IdentityRoleFragment>) {
    return this.fb.group<CreateIdentityRoleFormModel | UpdateIdentityRoleFormModel>({
      name: this.fb.control(
        identityRole?.name ?? '',
        [Validators.required],
        [this.isNameUnique(identityRole?.name)]
      ),
    });
  }

  private isNameUnique(name?: string): AsyncValidatorFn {
    return (control) => {
      if (control.value === name) {
        return of(null);
      }

      const sub = this.isNameUniqueGQL
        .fetch({ name: control.value })
        .pipe(map(({ data }) => data.identityRolesAny));
      return asyncFormValidIsUnique(control, sub);
    };
  }
}
