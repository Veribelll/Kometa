import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReturnRequestFragment } from '@kometa/smde/return-request/types';

@Component({
  selector: 'kometa-return-request-return-form',
  templateUrl: './return-request-return-form.component.html',
  styleUrls: ['./return-request-return-form.component.scss'],
})
export class ReturnRequestReturnFormComponent {
  @Input()
  request?: ReturnRequestFragment;

  @Output()
  readonly return = new EventEmitter();

  @Output()
  readonly cancel = new EventEmitter();

  onReturn() {
    this.return.emit();
  }

  onCancel() {
    this.cancel.emit();
  }
}
