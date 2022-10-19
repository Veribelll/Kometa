import { Component, OnInit } from '@angular/core';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { IndividualEntrepreneurRequisitesModel } from '../individual-entrepreneur-requisites.model';
import { DadataParty, DadataSuggestion } from '@kometa/shared/dadata';
import { FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'kometa-individual-entrepreneur-requisites-form',
  templateUrl: './individual-entrepreneur-requisites-form.component.html',
  styleUrls: ['./individual-entrepreneur-requisites-form.component.scss'],
})
export class IndividualEntrepreneurRequisitesFormComponent implements OnInit {
  formGroup!: TypedFormGroup<IndividualEntrepreneurRequisitesModel>;

  constructor(private readonly parentForm: FormGroupDirective) {}

  ngOnInit(): void {
    this.formGroup = this.parentForm.form as TypedFormGroup<IndividualEntrepreneurRequisitesModel>;
  }

  onSelectOrganization({
    data: { inn, okpo, ogrn, address },
  }: DadataSuggestion<DadataParty>): void {
    this.formGroup.get('inn')?.setValue(inn);
    this.formGroup.get('okpo')?.setValue(okpo);
    this.formGroup.get('ogrnip')?.setValue(ogrn);
    this.formGroup.get('address')?.setValue(address.value);
  }
}
