import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EmexProductFragment } from '@kometa/smde/emex/order/types';

@Component({
  selector: 'kometa-emex-product-delete-form',
  templateUrl: './emex-product-delete-form.component.html',
  styleUrls: ['./emex-product-delete-form.component.scss'],
})
export class EmexProductDeleteFormComponent {
  @Input()
  product?: EmexProductFragment;

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
