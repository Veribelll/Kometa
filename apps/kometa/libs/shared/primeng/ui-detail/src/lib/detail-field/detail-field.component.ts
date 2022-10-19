import { Component, Input } from '@angular/core';
import { isBoolean, isString, isNumber } from 'lodash';

@Component({
  selector: 'p-detail-field',
  templateUrl: './detail-field.component.html',
  styleUrls: ['./detail-field.component.scss'],
})
export class DetailFieldComponent {
  @Input()
  label?: string;

  @Input()
  value?: string | number | boolean | null | undefined;

  get isString() {
    return isString(this.value);
  }

  get isNumber() {
    return isNumber(this.value);
  }

  get isBoolean() {
    return isBoolean(this.value);
  }
}
