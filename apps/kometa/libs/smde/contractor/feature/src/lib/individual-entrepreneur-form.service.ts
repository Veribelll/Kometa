import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AsyncValidatorFn, Validators } from '@angular/forms';
import {
  ContractorIsInnUniqueGQL,
  ContractorIsNameUniqueGQL,
} from '@kometa/smde/contractor/data-access';
import { TypedFormBuilder } from '@kometa/shared/typed-form';
import { AccountBankFormService } from './account-bank-form.service';
import { asyncFormValidIsUnique } from '@kometa/shared/utils';
import {
  CreateIndividualEntrepreneurFormModel,
  UpdateIndividualEntrepreneurFormModel,
} from '@kometa/smde/contractor/ui';
import { IndividualEntrepreneurDetailFragment } from '@kometa/smde/contractor/types';

@Injectable({
  providedIn: 'any',
})
export class IndividualEntrepreneurFormService {
  constructor(
    private readonly fb: TypedFormBuilder,
    private readonly accountBankFormService: AccountBankFormService,
    private readonly isNameUniqueGQL: ContractorIsNameUniqueGQL,
    private readonly isInnUniqueGQL: ContractorIsInnUniqueGQL
  ) {}

  buildFormCreate(individualEntrepreneur?: Partial<IndividualEntrepreneurDetailFragment>) {
    return this.buildForm(individualEntrepreneur);
  }

  buildFormUpdate(individualEntrepreneur: IndividualEntrepreneurDetailFragment) {
    return this.buildForm(individualEntrepreneur);
  }

  private buildForm(individualEntrepreneur?: Partial<IndividualEntrepreneurDetailFragment>) {
    return this.fb.group<
      CreateIndividualEntrepreneurFormModel | UpdateIndividualEntrepreneurFormModel
    >({
      name: this.fb.control(
        individualEntrepreneur?.name ?? '',
        [Validators.required],
        [this.isNameUnique()]
      ),
      inn: this.fb.control(
        individualEntrepreneur?.inn ?? '',
        [Validators.required, Validators.minLength(10)],
        [this.isInnUnique()]
      ),
      okpo: this.fb.control(individualEntrepreneur?.okpo, [Validators.minLength(8)]),
      ogrnip: this.fb.control(individualEntrepreneur?.ogrnip, [Validators.minLength(15)]),
      accountBank: this.accountBankFormService.buildForm(individualEntrepreneur?.accountBank),
      address: this.fb.control(individualEntrepreneur?.address ?? '', [Validators.required]),
      actualAddress: this.fb.control(individualEntrepreneur?.actualAddress),
      mailingAddress: this.fb.control(individualEntrepreneur?.mailingAddress),
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
