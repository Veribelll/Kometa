import { Component, Output, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';
import { TemplateSectionFragment } from '@kometa/smde/topology/template-section/types';
import { UpdateTemplateSectionFormModel } from '../update-template-section-form.model';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { sortBy } from 'lodash';
import { Cell } from '@kometa/shared/topology/ui';

@Component({
  selector: 'kometa-template-section-update-form',
  templateUrl: './template-section-update-form.component.html',
  styleUrls: ['./template-section-update-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateSectionUpdateFormComponent {
  @Input()
  formGroup!: TypedFormGroup<UpdateTemplateSectionFormModel>;

  @Input()
  templateSection?: TemplateSectionFragment;

  @Output()
  readonly save = new EventEmitter<UpdateTemplateSectionFormModel>();

  @Output()
  readonly cancel = new EventEmitter();

  get cells(): Cell[] {
    return sortBy(this.templateSection?.cells ?? [], (x) => x.position).map(({ templateCell }) => ({
      name: templateCell.name,
      width: templateCell.width,
      height: templateCell.height,
      templateId: templateCell.id,
      imageUrl: templateCell.imageUrl,
      isCell: templateCell.isCell,
    }));
  }

  onSave() {
    if (this.formGroup.valid && this.formGroup.value) {
      const { name } = this.formGroup.value;
      this.save.emit({ name });
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}
