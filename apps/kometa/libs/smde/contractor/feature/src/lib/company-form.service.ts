import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AsyncValidatorFn, Validators } from '@angular/forms';
import { TypedFormBuilder, TypedFormGroup } from '@kometa/shared/typed-form';
import { asyncFormValidIsUnique } from '@kometa/shared/utils';
import { AccountBankFormService } from './account-bank-form.service';
import { CreateCompanyFormModel, UpdateCompanyFormModel } from '@kometa/smde/contractor/ui';
import {
  ContractorIsInnUniqueGQL,
  ContractorIsNameUniqueGQL,
} from '@kometa/smde/contractor/data-access';
import { CompanyDetailFragment } from '@kometa/smde/contractor/types';

@Injectable({
  providedIn: 'root',
})
export class CompanyFormService {
  constructor(
    private readonly fb: TypedFormBuilder,
    private readonly accountBankFormService: AccountBankFormService,
    private readonly isNameUniqueGQL: ContractorIsNameUniqueGQL,
    private readonly isInnUniqueGQL: ContractorIsInnUniqueGQL
  ) {}

  buildFormCreate(
    company?: Partial<CompanyDetailFragment>
  ): TypedFormGroup<CreateCompanyFormModel> {
    return this.buildForm(company);
  }

  buildFormUpdate(company: CompanyDetailFragment) {
    return this.buildForm(company);
  }

  private buildForm(company?: Partial<CompanyDetailFragment>) {
    return this.fb.group<CreateCompanyFormModel | UpdateCompanyFormModel>({
      name: this.fb.control(company?.name ?? '', [Validators.required], [this.isNameUnique()]),
      inn: this.fb.control(
        company?.inn ?? '',
        [Validators.required, Validators.minLength(10)],
        [this.isInnUnique()]
      ),
      okpo: this.fb.control(company?.okpo, [Validators.minLength(8)]),
      kpp: this.fb.control(company?.kpp, [Validators.minLength(9)]),
      ogrn: this.fb.control(company?.ogrn, [Validators.minLength(13)]),
      accountBank: this.accountBankFormService.buildForm(company?.accountBank),
      address: this.fb.control(company?.address ?? '', [Validators.required]),
      actualAddress: this.fb.control(company?.actualAddress),
      mailingAddress: this.fb.control(company?.mailingAddress),
    });
  }

  private isNameUnique(name?: string): AsyncValidatorFn {
    return (control) => {
      if (control.value === name) {
        return of(null);
      }

      const sub = this.isNameUniqueGQL
        .fetch({ name: control.value })
        .pipe(map(({ data }) => data.contractorsAny));

      return asyncFormValidIsUnique(control, sub);
    };
  }

  private isInnUnique(inn?: string): AsyncValidatorFn {
    return (control) => {
      if (control.value === inn) {
        return of(null);
      }

      const sub = this.isInnUniqueGQL
        .fetch({ inn: control.value })
        .pipe(map(({ data }) => data.contractorsAny));

      return asyncFormValidIsUnique(control, sub);
    };
  }
}
