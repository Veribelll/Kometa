import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'p-form-delete-actions',
  templateUrl: './form-delete-actions.component.html',
  styleUrls: ['./form-delete-actions.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormDeleteActionsComponent {
  @Input()
  labelDelete = 'Удалить';

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
