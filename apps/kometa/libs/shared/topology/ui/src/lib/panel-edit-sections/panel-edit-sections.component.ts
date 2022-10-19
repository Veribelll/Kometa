import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Section } from '../section.model';
import { findIndex, isEmpty } from 'lodash';

@Component({
  selector: 'kometa-panel-edit-sections',
  templateUrl: './panel-edit-sections.component.html',
  styleUrls: ['./panel-edit-sections.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanelEditSectionsComponent {
  @Input()
  selectItems: Section[] = [];

  @Input()
  selectableList: Section[] = [];

  @Input()
  select?: Section;

  @Output()
  readonly selectChange = new EventEmitter<Section>();

  @Output()
  readonly addSection = new EventEmitter<Section>();

  @Output()
  readonly removeSection = new EventEmitter<Section>();

  @Output()
  readonly upSection = new EventEmitter<Section>();

  @Output()
  readonly downSection = new EventEmitter<Section>();

  get isEmptySelect(): boolean {
    return isEmpty(this.select);
  }

  get disableSectionUp(): boolean {
    if (this.isEmptySelect) {
      return true;
    }
    const index = findIndex(this.selectItems, this.select);
    return index < 1;
  }

  get disableSectionDown(): boolean {
    if (this.isEmptySelect) {
      return true;
    }

    const index = findIndex(this.selectItems, this.select);
    return index + 1 >= this.selectItems.length;
  }

  onAddSection(section: Section) {
    this.addSection.emit(section);
  }

  onRemoveSection() {
    this.removeSection.emit(this.select);
  }

  onUpSection() {
    this.upSection.emit(this.select);
  }

  onDownSection() {
    this.downSection.emit(this.select);
  }

  onSelectChange() {
    this.selectChange.emit(this.select);
  }
}
