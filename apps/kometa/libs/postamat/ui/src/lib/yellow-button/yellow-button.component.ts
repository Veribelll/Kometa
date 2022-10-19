import { Component, Input } from '@angular/core';

@Component({
  selector: 'kometa-yellow-button',
  templateUrl: './yellow-button.component.html',
  styleUrls: ['./yellow-button.component.scss'],
})
export class YellowButtonComponent {
  @Input()
  label?: string;
}
