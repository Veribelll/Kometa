import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TemplatePostamatFragment } from '@kometa/smde/topology/template-postamat/types';

@Component({
  selector: 'kometa-template-postamat-delete-form',
  templateUrl: './template-postamat-delete-form.component.html',
  styleUrls: ['./template-postamat-delete-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplatePostamatDeleteFormComponent {
  @Input()
  templatePostamat?: TemplatePostamatFragment;

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
