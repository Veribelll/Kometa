import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EmexOrderFragment } from '@kometa/smde/emex/order/types';

@Component({
  selector: 'kometa-emex-order-delete-form',
  templateUrl: './emex-order-delete-form.component.html',
  styleUrls: ['./emex-order-delete-form.component.scss'],
})
export class EmexOrderDeleteFormComponent {
  @Input()
  order?: EmexOrderFragment;

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
