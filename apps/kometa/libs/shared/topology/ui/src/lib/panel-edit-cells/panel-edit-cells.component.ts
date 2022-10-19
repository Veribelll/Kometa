import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Cell } from '../cell.model';
import { findIndex, isEmpty } from 'lodash';

@Component({
  selector: 'kometa-panel-edit-cells',
  templateUrl: './panel-edit-cells.component.html',
  styleUrls: ['./panel-edit-cells.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanelEditCellsComponent {
  @Input()
  select?: Cell;

  @Input()
  selectItems: Cell[] = [];

  @Input()
  selectableList: Cell[] = [];

  @Output()
  readonly selectChange = new EventEmitter<Cell>();

  @Output()
  readonly addCell = new EventEmitter<Cell>();

  @Output()
  readonly removeCell = new EventEmitter<Cell>();

  @Output()
  readonly upCell = new EventEmitter<Cell>();

  @Output()
  readonly downCell = new EventEmitter<Cell>();

  get isEmptySelect(): boolean {
    return isEmpty(this.select);
  }

  get disableCellUp(): boolean {
    if (this.isEmptySelect) {
      return true;
    }

    const index = findIndex(this.selectItems, this.select);
    return index < 1;
  }

  get disableCellDown(): boolean {
    if (this.isEmptySelect) {
      return true;
    }

    const index = findIndex(this.selectItems, this.select);
    return index + 1 >= this.selectItems.length;
  }

  onAddCell(cell: Cell) {
    this.addCell.emit(cell);
  }

  onRemoveCell() {
    this.removeCell.emit(this.select);
  }

  onUpCell() {
    this.upCell.emit(this.select);
  }

  onDownCell() {
    this.downCell.emit(this.select);
  }

  onSelectChange() {
    this.selectChange.emit(this.select);
  }
}
