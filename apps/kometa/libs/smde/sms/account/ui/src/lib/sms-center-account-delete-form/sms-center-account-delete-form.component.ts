import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SmsCenterAccountFragment } from '@kometa/smde/sms/account/types';

@Component({
  selector: 'kometa-sms-center-account-delete-form',
  templateUrl: './sms-center-account-delete-form.component.html',
  styleUrls: ['./sms-center-account-delete-form.component.scss'],
})
export class SmsCenterAccountDeleteFormComponent {
  @Input()
  account?: SmsCenterAccountFragment;

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
