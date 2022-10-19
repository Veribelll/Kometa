import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TemplatePostamatFragment } from '@kometa/smde/topology/template-postamat/types';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { UpdateTemplatePostamatFormModel } from '../update-template-postamat-form.model';
import { transformTemplatePostamat } from '../transform-template-postamat';
import { Section } from '@kometa/shared/topology/ui';

@Component({
  selector: 'kometa-template-postamat-update-form',
  templateUrl: './template-postamat-update-form.component.html',
  styleUrls: ['./template-postamat-update-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplatePostamatUpdateFormComponent {
  @Input()
  formGroup!: TypedFormGroup<UpdateTemplatePostamatFormModel>;

  @Input()
  templatePostamat?: TemplatePostamatFragment;

  @Output()
  readonly save = new EventEmitter<UpdateTemplatePostamatFormModel>();

  @Output()
  readonly cancel = new EventEmitter();

  get sections(): Section[] {
    return transformTemplatePostamat(this.templatePostamat);
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
