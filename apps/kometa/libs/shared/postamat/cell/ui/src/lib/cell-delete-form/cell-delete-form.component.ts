import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CellFragment } from '@kometa/shared/postamat/cell/types';

@Component({
  selector: 'kometa-cell-delete-form',
  templateUrl: './cell-delete-form.component.html',
  styleUrls: ['./cell-delete-form.component.scss'],
})
export class CellDeleteFormComponent {
  @Input()
  cell?: CellFragment;

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
