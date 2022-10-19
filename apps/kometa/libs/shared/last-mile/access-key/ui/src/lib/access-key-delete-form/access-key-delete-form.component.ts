import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccessKeyFragment } from '@kometa/shared/last-mile/access-key/types';

@Component({
  selector: 'kometa-access-key-delete-form',
  templateUrl: './access-key-delete-form.component.html',
  styleUrls: ['./access-key-delete-form.component.scss'],
})
export class AccessKeyDeleteFormComponent {
  @Input()
  accessKey?: AccessKeyFragment;

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
