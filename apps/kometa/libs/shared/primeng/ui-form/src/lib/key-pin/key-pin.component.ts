import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'p-key-pin',
  templateUrl: './key-pin.component.html',
  styleUrls: ['./key-pin.component.scss'],
})
export class KeyPinComponent {
  @Input()
  pin = '';

  @Output()
  readonly pinChange = new EventEmitter<string>();

  onChange(text: string) {
    this.pin = this.pin + text;
    this.pinChange.emit(this.pin);
  }

  onRemove() {
    this.pin = this.pin.slice(0, -1);
    this.pinChange.emit(this.pin);
  }

  onClear() {
    this.pin = '';
    this.pinChange.emit(this.pin);
  }
}
