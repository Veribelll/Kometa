import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { UpdateCompanyFormModel } from '../update-company-form.model';

@Component({
  selector: 'kometa-company-update-form',
  templateUrl: './company-update-form.component.html',
  styleUrls: ['./company-update-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyUpdateFormComponent {
  @Input()
  formGroup!: TypedFormGroup<UpdateCompanyFormModel>;

  @Output()
  readonly save = new EventEmitter<UpdateCompanyFormModel>();

  @Output()
  readonly cancel = new EventEmitter();

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
