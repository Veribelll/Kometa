import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { CompanyRequisitesModel } from '../company-requisites.model';
import { DadataParty, DadataSuggestion } from '@kometa/shared/dadata';
import { FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'kometa-company-requisites-form',
  templateUrl: './company-requisites-form.component.html',
  styleUrls: ['./company-requisites-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyRequisitesFormComponent implements OnInit {
  formGroup!: TypedFormGroup<CompanyRequisitesModel>;

  constructor(private readonly parentForm: FormGroupDirective) {}

  ngOnInit(): void {
    this.formGroup = this.parentForm.form as TypedFormGroup<CompanyRequisitesModel>;
  }

  onSelectOrganization({
    data: { inn, okpo, kpp, ogrn, address },
  }: DadataSuggestion<DadataParty>): void {
    this.formGroup.get('inn')?.setValue(inn);
    this.formGroup.get('okpo')?.setValue(okpo);
    this.formGroup.get('kpp')?.setValue(kpp);
    this.formGroup.get('ogrn')?.setValue(ogrn);
    this.formGroup.get('address')?.setValue(address.value);
  }
}
