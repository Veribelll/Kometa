import { Component, Input, OnInit } from '@angular/core';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { FormGroupDirective } from '@angular/forms';

type FormModel = { contractorIds: string[] };

@Component({
  selector: 'kometa-select-contractors-field',
  templateUrl: './select-contractors-field.component.html',
  styleUrls: ['./select-contractors-field.component.scss'],
})
export class SelectContractorsFieldComponent implements OnInit {
  formGroup!: TypedFormGroup<FormModel>;

  @Input()
  contractors: { id: string; name: string }[] = [];

  constructor(private readonly parentForm: FormGroupDirective) {}

  ngOnInit(): void {
    this.formGroup = this.parentForm.form as TypedFormGroup<FormModel>;
  }
}
