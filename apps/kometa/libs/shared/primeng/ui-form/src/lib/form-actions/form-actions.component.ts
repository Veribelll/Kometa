import { Component, Output, EventEmitter, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'p-form-actions',
  templateUrl: './form-actions.component.html',
  styleUrls: ['./form-actions.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormActionsComponent {
  @Input()
  invalid = false;

  @Input()
  pending = false;

  @Input()
  labelButtonSave = 'Сохранить';

  @Input()
  labelButtonCancel = 'Отменить';

  @Output()
  save = new EventEmitter();

  @Output()
  cancel = new EventEmitter();

  onSave(): void {
    this.save.emit();
  }

  onCancel(): void {
    this.cancel.emit();
  }
}
