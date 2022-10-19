import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PackingPlaceFragment } from '@kometa/smde/packing-place/types';

@Component({
  selector: 'kometa-packing-place-send-form',
  templateUrl: './packing-place-send-form.component.html',
  styleUrls: ['./packing-place-send-form.component.scss'],
})
export class PackingPlaceSendFormComponent {
  @Input()
  packingPlace?: PackingPlaceFragment;

  @Output()
  readonly send = new EventEmitter();

  @Output()
  readonly cancel = new EventEmitter();

  onSend() {
    this.send.emit();
  }

  onCancel() {
    this.cancel.emit();
  }
}
