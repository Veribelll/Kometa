import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'p-keyboard-button',
  templateUrl: './keyboard-button.component.html',
  styleUrls: ['./keyboard-button.component.scss'],
})
export class KeyboardButtonComponent {
  @Input()
  fontSize?: string;

  @Output()
  public readonly keyboard = new EventEmitter();

  onClick() {
    this.keyboard.emit();
  }
}
