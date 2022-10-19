import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AsyncValidatorFn, Validators } from '@angular/forms';
import { TypedFormBuilder } from '@kometa/shared/typed-form';
import { asyncFormValidIsUnique, mustMatch } from '@kometa/shared/utils';
import { CreateEmployeeFormModel, UpdateEmployeeFormModel } from '@kometa/smde/employee/ui';
import { EmployeeIsEmailUniqueGQL } from '@kometa/smde/employee/data-access';
import { EmployeeFragment } from '@kometa/smde/employee/types';

@Injectable({
  providedIn: 'any',
})
export class EmployeeFormService {
  constructor(
    private readonly fb: TypedFormBuilder,
    private readonly isEmailUniqueGQL: EmployeeIsEmailUniqueGQL
  ) {}

  buildFormCreate() {
    return this.fb.group<CreateEmployeeFormModel>(
      {
        contractorIds: this.fb.control([], [Validators.required]),
        surname: this.fb.control('', [Validators.required]),
        firstName: this.fb.control('', [Validators.required]),
        middleName: this.fb.control(''),
        phoneNumber: this.fb.control('', [Validators.required]),
        roleIds: this.fb.control([], [Validators.required]),
        email: this.fb.control('', [Validators.required, Validators.email], [this.isEmailUnique()]),
        password: this.fb.control('', [Validators.required]),
        passwordConfirm: this.fb.control('', [Validators.required]),
      },
      {
        validators: [mustMatch('password', 'passwordConfirm')],
      }
    );
  }

  buildFormUpdate({
    contractors,
    surname,
    name,
    middleName,
    phoneNumber,
    roles,
  }: EmployeeFragment) {
    return this.fb.group<UpdateEmployeeFormModel>({
      contractorIds: this.fb.control(
        contractors.map((x) => x.id),
        [Validators.required]
      ),
      surname: this.fb.control(surname, [Validators.required]),
      firstName: this.fb.control(name, [Validators.required]),
      middleName: this.fb.control(middleName),
      phoneNumber: this.fb.control(phoneNumber, [Validators.required]),
      roleIds: this.fb.control(
        roles.map((x) => x.id),
        [Validators.required]
      ),
    });
  }

  private isEmailUnique(email?: string): AsyncValidatorFn {
    return (control) => {
      if (control.value === email) {
        return of(null);
      }

      const sub = this.isEmailUniqueGQL
        .fetch({ email: control.value })
        .pipe(map(({ data }) => data.isEmailUnique));
      return asyncFormValidIsUnique(control, sub);
    };
  }
}
