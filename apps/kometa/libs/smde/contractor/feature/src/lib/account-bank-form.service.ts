import { Injectable } from '@angular/core';
import { TypedFormBuilder } from '@kometa/shared/typed-form';
import { Validators } from '@angular/forms';
import { AccountBankFragment, AccountBankInput } from '@kometa/smde/contractor/types';

@Injectable({
  providedIn: 'root',
})
export class AccountBankFormService {
  constructor(private readonly fb: TypedFormBuilder) {}

  buildForm(accountBank?: AccountBankFragment) {
    return this.fb.group<AccountBankInput>({
      bankName: this.fb.control(accountBank?.bankName ?? '', [Validators.required]),
      bic: this.fb.control(accountBank?.bic ?? '', [Validators.required, Validators.minLength(9)]),
      paymentAccount: this.fb.control(accountBank?.paymentAccount ?? '', [
        Validators.required,
        Validators.minLength(20),
      ]),
      correspondentAccount: this.fb.control(accountBank?.correspondentAccount ?? '', [
        Validators.required,
        Validators.minLength(20),
      ]),
    });
  }
}
