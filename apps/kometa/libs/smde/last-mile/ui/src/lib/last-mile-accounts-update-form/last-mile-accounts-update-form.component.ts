import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { UpdateLastMileAccountsFormModel } from '../update-last-mile-accounts-form.model';

@Component({
  selector: 'kometa-last-mile-accounts-update-form',
  templateUrl: './last-mile-accounts-update-form.component.html',
  styleUrls: ['./last-mile-accounts-update-form.component.scss'],
})
export class LastMileAccountsUpdateFormComponent {
  @Input()
  formGroup!: TypedFormGroup<UpdateLastMileAccountsFormModel>;

  @Input()
  emexAccounts: { id: string; name: string }[] = [];

  @Input()
  smsAccounts: { id: string; name: string }[] = [];

  @Output()
  readonly save = new EventEmitter<UpdateLastMileAccountsFormModel>();

  @Output()
  readonly cancel = new EventEmitter();

  onSave() {
    if (this.formGroup.valid && this.formGroup.value) {
      const { emexAccountId, smsAccountId } = this.formGroup.value;

      this.save.emit({ emexAccountId, smsAccountId });
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}
