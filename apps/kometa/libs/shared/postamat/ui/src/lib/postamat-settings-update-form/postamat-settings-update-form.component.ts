import { Component, Output, EventEmitter, Input, OnDestroy } from '@angular/core';
import { UpdatePostamatSettingsFormModel } from '../update-postamat-settings-form.model';
import { TypedFormGroup } from '@kometa/shared/typed-form';

@Component({
  selector: 'kometa-postamat-settings-update-form',
  templateUrl: './postamat-settings-update-form.component.html',
  styleUrls: ['./postamat-settings-update-form.component.scss'],
})
export class PostamatSettingsUpdateFormComponent implements OnDestroy {
  @Input()
  formGroup!: TypedFormGroup<UpdatePostamatSettingsFormModel>;

  @Output()
  readonly save = new EventEmitter<UpdatePostamatSettingsFormModel>();

  @Output()
  readonly cancel = new EventEmitter();

  ngOnDestroy() {
    this.onCancel();
  }

  onSave() {
    if (this.formGroup.valid && this.formGroup.value) {
      const { isAutoUpdate, receptionWaitingListOnly, adminPhone } = this.formGroup.value;

      this.save.emit({
        isAutoUpdate,
        receptionWaitingListOnly,
        adminPhone,
      });
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}
