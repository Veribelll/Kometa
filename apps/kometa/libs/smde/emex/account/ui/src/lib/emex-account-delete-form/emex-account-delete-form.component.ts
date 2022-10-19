import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EmexAccountFragment } from '@kometa/smde/emex/account/types';

@Component({
  selector: 'kometa-emex-account-delete-form',
  templateUrl: './emex-account-delete-form.component.html',
  styleUrls: ['./emex-account-delete-form.component.scss'],
})
export class EmexAccountDeleteFormComponent {
  @Input()
  account?: EmexAccountFragment;

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
