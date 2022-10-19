import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PromixControllerFragment } from '@kometa/shared/postamat/controller/types';

@Component({
  selector: 'kometa-promix-controller-delete-form',
  templateUrl: './promix-controller-delete-form.component.html',
  styleUrls: ['./promix-controller-delete-form.component.scss'],
})
export class PromixControllerDeleteFormComponent {
  @Input()
  controller?: PromixControllerFragment;

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
