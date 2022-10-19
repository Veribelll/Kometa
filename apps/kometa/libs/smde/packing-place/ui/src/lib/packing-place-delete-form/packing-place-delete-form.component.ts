import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PackingPlaceFragment } from '@kometa/smde/packing-place/types';

@Component({
  selector: 'kometa-packing-place-delete-form',
  templateUrl: './packing-place-delete-form.component.html',
  styleUrls: ['./packing-place-delete-form.component.scss'],
})
export class PackingPlaceDeleteFormComponent {
  @Input()
  packingPlace?: PackingPlaceFragment;

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
