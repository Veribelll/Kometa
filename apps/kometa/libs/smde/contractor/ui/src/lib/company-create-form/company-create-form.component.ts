import { Component, Output, EventEmitter, ChangeDetectionStrategy, Input } from '@angular/core';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { CreateCompanyFormModel } from '../create-company-form.model';
import { AccountBankFormModel } from '../account-bank-form.model';

@Component({
  selector: 'kometa-company-create-form',
  templateUrl: './company-create-form.component.html',
  styleUrls: ['./company-create-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyCreateFormComponent {
  @Input()
  formGroup!: TypedFormGroup<CreateCompanyFormModel>;

  @Output()
  readonly save = new EventEmitter<CreateCompanyFormModel>();

  @Output()
  readonly cancel = new EventEmitter();

  get formGroupAccountBank() {
    return this.formGroup.get('accountBank') as TypedFormGroup<AccountBankFormModel>;
  }

  onSave() {
    if (this.formGroup.valid && this.formGroup.value) {
      const {
        name,
        inn,
        okpo,
        kpp,
        ogrn,
        accountBank,
        address,
        actualAddress,
        mailingAddress,
      } = this.formGroup.value;

      this.save.emit({
        name,
        inn,
        okpo,
        kpp,
        ogrn,
        accountBank,
        address,
        actualAddress,
        mailingAddress,
      });
    }
  }

  onCancel(): void {
    this.cancel.emit();
  }
}
