import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AsyncValidatorFn, Validators } from '@angular/forms';
import { asyncFormValidIsUnique, mustMatch } from '@kometa/shared/utils';
import { TypedFormBuilder } from '@kometa/shared/typed-form';
import { CreateTenantFormModel, UpdateTenantFormModel } from '@kometa/smde/tenant/ui';
import { TenantIsEmailUniqueGQL, TenantIsNameUniqueGQL } from '@kometa/smde/tenant/data-access';
import { TenantFragment } from '@kometa/smde/tenant/types';

@Injectable({
  providedIn: 'any',
})
export class TenantFormService {
  constructor(
    private readonly fb: TypedFormBuilder,
    private readonly isNameUniqueGQL: TenantIsNameUniqueGQL,
    private readonly isEmailUniqueGQL: TenantIsEmailUniqueGQL
  ) {}

  buildFormCreate() {
    return this.fb.group<CreateTenantFormModel>(
      {
        name: this.fb.control('', [Validators.required], [this.isNameUnique()]),
        emailForDocuments: this.fb.control('', [Validators.required, Validators.email]),
        adminEmailAddress: this.fb.control(
          '',
          [Validators.required, Validators.email],
          [this.isEmailUnique()]
        ),
        adminPassword: this.fb.control('', [Validators.required]),
        adminPasswordConfirm: this.fb.control('', [Validators.required]),
      },
      {
        validators: [mustMatch('adminPassword', 'adminPasswordConfirm')],
      }
    );
  }

  buildFormUpdate({ name, emailForDocuments }: TenantFragment) {
    return this.fb.group<UpdateTenantFormModel>({
      name: this.fb.control(name, [Validators.required], [this.isNameUnique(name)]),
      emailForDocuments: this.fb.control(emailForDocuments, [
        Validators.required,
        Validators.email,
      ]),
    });
  }

  private isNameUnique(name?: string): AsyncValidatorFn {
    return (control) => {
      if (control.value === name) {
        return of(null);
      }

      const sub = this.isNameUniqueGQL
        .fetch({ name: control.value })
        .pipe(map(({ data }) => data.tenantsAny));
      return asyncFormValidIsUnique(control, sub);
    };
  }

  private isEmailUnique(): AsyncValidatorFn {
    return (control) => {
      const sub = this.isEmailUniqueGQL
        .fetch({ email: control.value })
        .pipe(map(({ data }) => data.isEmailUnique));
      return asyncFormValidIsUnique(control, sub);
    };
  }
}
