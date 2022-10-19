import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { UpdateTopologyFormModel } from '../update-topology-form.model';

@Component({
  selector: 'kometa-topology-update-form',
  templateUrl: './topology-update-form.component.html',
  styleUrls: ['./topology-update-form.component.scss'],
})
export class TopologyUpdateFormComponent {
  @Input()
  formGroup!: TypedFormGroup<UpdateTopologyFormModel>;

  @Input()
  templatesPostamat: { id: string; name: string }[] = [];

  @Output()
  readonly save = new EventEmitter<UpdateTopologyFormModel>();

  @Output()
  readonly cancel = new EventEmitter();

  onSave() {
    if (this.formGroup.valid && this.formGroup.value) {
      const { templatePostamatId, prefixName, prefixBarcode } = this.formGroup.value;

      this.save.emit({
        templatePostamatId,
        prefixName,
        prefixBarcode,
      });
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}
