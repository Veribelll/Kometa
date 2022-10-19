import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { TemplateCellFragment } from '@kometa/smde/topology/template-cell/types';

@Component({
  selector: 'kometa-template-cell-delete-form',
  templateUrl: './template-cell-delete-form.component.html',
  styleUrls: ['./template-cell-delete-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateCellDeleteFormComponent {
  @Input()
  templateCell?: TemplateCellFragment;

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
