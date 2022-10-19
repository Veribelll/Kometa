import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReturnRequestFragment } from '@kometa/smde/return-request/types';

@Component({
  selector: 'kometa-return-request-cancel-form',
  templateUrl: './return-request-cancel-form.component.html',
  styleUrls: ['./return-request-cancel-form.component.scss'],
})
export class ReturnRequestCancelFormComponent {
  @Input()
  request?: ReturnRequestFragment;

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
