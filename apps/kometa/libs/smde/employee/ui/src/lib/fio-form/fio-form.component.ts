import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { FioFormModel } from '../fio-form.model';
import { TypedFormGroup } from '@kometa/shared/typed-form';

@Component({
  selector: 'kometa-fio-form',
  templateUrl: './fio-form.component.html',
  styleUrls: ['./fio-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FioFormComponent implements OnInit {
  formGroup!: TypedFormGroup<FioFormModel>;

  constructor(private readonly parentForm: FormGroupDirective) {}

  ngOnInit(): void {
    this.formGroup = this.parentForm.form as TypedFormGroup<FioFormModel>;
  }
}
