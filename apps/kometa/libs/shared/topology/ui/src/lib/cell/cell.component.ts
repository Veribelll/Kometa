import { Component, EventEmitter, Input, Output } from '@angular/core';
import { isEmpty, isString } from 'lodash';
import { EnvironmentService } from '@kometa/shared/abp';

@Component({
  selector: 'kometa-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss'],
})
export class CellComponent {
  @Input()
  isCell? = true;

  @Input()
  name? = '';

  @Input()
  width? = 1;

  @Input()
  height? = 1;

  @Input()
  isSelect? = false;

  @Input()
  imageUrl?: unknown | null;

  @Input()
  disable? = false;

  @Output()
  readonly selected = new EventEmitter();

  get widthStyle(): string {
    if (this.width) {
      if (this.width === 1) {
        return '90px';
      }
      return `${this.width * 65}px`;
    }

    return '';
  }

  get heightStyle(): string {
    if (this.height) {
      return `${this.height * 62}px`;
    }

    return '';
  }

  get isEmptyImage() {
    return isEmpty(this.imageUrl);
  }

  get api() {
    return this.environmentService.getApiUrl();
  }

  get src() {
    if (isString(this.imageUrl)) {
      return `${this.api}/${this.imageUrl}`;
    }

    return this.imageUrl;
  }

  constructor(private readonly environmentService: EnvironmentService) {}

  onSelected(): void {
    this.selected.emit();
  }
}
