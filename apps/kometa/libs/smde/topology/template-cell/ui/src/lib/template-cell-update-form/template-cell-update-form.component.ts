import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TemplateCellFragment } from '@kometa/smde/topology/template-cell/types';
import { UpdateTemplateCellFormModel } from '../update-template-cell-form.model';
import { TypedFormGroup } from '@kometa/shared/typed-form';

@Component({
  selector: 'kometa-template-cell-update-form',
  templateUrl: './template-cell-update-form.component.html',
  styleUrls: ['./template-cell-update-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateCellUpdateFormComponent {
  @Input()
  formGroup!: TypedFormGroup<UpdateTemplateCellFormModel>;

  @Input()
  templateCell?: TemplateCellFragment;

  @Input()
  sizes: { id: string; name: string }[] = [];

  @Output()
  readonly save = new EventEmitter<UpdateTemplateCellFormModel>();

  @Output()
  readonly cancel = new EventEmitter();

  get nameControl(): FormControl {
    return this.formGroup.get('name') as FormControl;
  }

  onSave() {
    if (this.formGroup.valid && this.formGroup.value) {
      const { name, sizeId } = this.formGroup.value;

      this.save.emit({
        name,
        sizeId,
      });
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}
