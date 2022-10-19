import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cell } from '../cell.model';

@Component({
  selector: 'kometa-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent {
  @Input()
  cells: Cell[] = [];

  @Input()
  select?: Cell;

  @Output()
  readonly selectChange = new EventEmitter<Cell>();

  onSelect(cell: Cell) {
    this.selectChange.emit(cell);
  }
}
