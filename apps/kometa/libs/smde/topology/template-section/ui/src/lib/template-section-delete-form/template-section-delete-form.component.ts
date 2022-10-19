import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TemplateSectionFragment } from '@kometa/smde/topology/template-section/types';

@Component({
  selector: 'kometa-template-section-delete-form',
  templateUrl: './template-section-delete-form.component.html',
  styleUrls: ['./template-section-delete-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateSectionDeleteFormComponent {
  @Input()
  templateSection?: TemplateSectionFragment;

  @Output()
  readonly delete = new EventEmitter();

  @Output()
  readonly cancel = new EventEmitter();

  onDelete() {
    this.delete.emit();
  }

  onCancel() {
    this.cancel.emit();
  }
}
