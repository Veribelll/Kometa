import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Section } from '../section.model';
import { Cell } from '../cell.model';

@Component({
  selector: 'kometa-postamat',
  templateUrl: './postamat.component.html',
  styleUrls: ['./postamat.component.scss'],
})
export class PostamatComponent {
  @Input()
  sections: Section[] = [];

  @Input()
  select?: Cell;

  @Output()
  readonly selectChange = new EventEmitter<Cell>();

  onSelect(cell: Cell) {
    this.selectChange.emit(cell);
  }
}
