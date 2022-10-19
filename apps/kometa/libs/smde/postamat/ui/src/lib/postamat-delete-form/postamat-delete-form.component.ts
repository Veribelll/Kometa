import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PostamatFragment } from '@kometa/smde/postamat/types';

@Component({
  selector: 'kometa-postamat-delete-form',
  templateUrl: './postamat-delete-form.component.html',
  styleUrls: ['./postamat-delete-form.component.scss'],
})
export class PostamatDeleteFormComponent {
  @Input()
  postamat?: PostamatFragment;

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
