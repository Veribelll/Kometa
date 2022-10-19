import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DadataBank, DadataSuggestion } from '@kometa/shared/dadata';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { FormGroupDirective, FormGroupName } from '@angular/forms';
import { AccountBankFormModel } from '../account-bank-form.model';

@Component({
  selector: 'kometa-account-bank-form',
  templateUrl: './account-bank-form.component.html',
  styleUrls: ['./account-bank-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountBankFormComponent implements OnInit {
  formGroup!: TypedFormGroup<AccountBankFormModel>;

  constructor(
    private readonly parentForm: FormGroupDirective,
    private readonly formGroupName: FormGroupName
  ) {}

  ngOnInit(): void {
    this.formGroup = this.parentForm.form.controls[
      this.formGroupName.name ?? ''
    ] as TypedFormGroup<AccountBankFormModel>;
  }

  onSelectBank({ data: { bic, correspondent_account } }: DadataSuggestion<DadataBank>): void {
    this.formGroup?.get('bic')?.setValue(bic);
    this.formGroup?.get('correspondentAccount')?.setValue(correspondent_account);
  }
}
