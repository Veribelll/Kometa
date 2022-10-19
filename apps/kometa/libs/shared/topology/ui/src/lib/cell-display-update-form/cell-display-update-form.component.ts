import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { BehaviorSubject, combineLatest, map } from 'rxjs';
import { findIndex, isEmpty } from 'lodash';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import {
  CellDisplayFragment,
  CellDisplayInput,
  GetDataForUpdateCellDisplaysQuery,
} from '@kometa/shared/topology/types';
import { Section } from '../section.model';
import { Cell } from '../cell.model';
import { transformCellDisplaysToSections } from '../transform-cell-displays-to-sections';

type TemplateCell = NonNullable<
  NonNullable<GetDataForUpdateCellDisplaysQuery['templatesCell']>['items']
>[0];
type TemplateSection = NonNullable<
  NonNullable<GetDataForUpdateCellDisplaysQuery['templatesSection']>['items']
>[0];

@Component({
  selector: 'kometa-cell-display-update-form',
  templateUrl: './cell-display-update-form.component.html',
  styleUrls: ['./cell-display-update-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CellDisplayUpdateFormComponent {
  readonly selectableSectionList$ = new BehaviorSubject<Section[]>([]);
  readonly selectableCellList$ = new BehaviorSubject<Cell[]>([]);
  readonly sections$ = new BehaviorSubject<Section[]>([]);
  readonly selectedSection$ = new BehaviorSubject<Section | null>(null);
  readonly selectedCell$ = new BehaviorSubject<Cell | null>(null);
  readonly cells$ = combineLatest([this.selectedSection$, this.sections$]).pipe(
    map(([s]) => [...(s?.cells ?? [])])
  );
  readonly postamatCellsFree$ = combineLatest([this.sections$, this.selectedCell$]).pipe(
    map(([sections, selected]) => {
      const cells = sections.map((s) => s.cells).reduce((a, b) => a.concat(b), []);
      return this.postamatCells.filter(
        (c) => !cells.some((x) => x.cellId === c.id) || selected?.cellId === c.id
      );
    })
  );

  @Input()
  set templatesSection(value: TemplateSection[]) {
    if (value) {
      const sections: Section[] = [
        {
          name: 'Пустая',
          cells: [],
        },
        ...value.map((x) => ({
          name: x.name,
          cells: x.cells.map(({ templateCell }) => ({
            name: templateCell.name,
            width: templateCell.width,
            height: templateCell.height,
            imageUrl: templateCell.imageUrl,
            templateId: templateCell.id,
            isCell: templateCell.isCell,
          })),
          templateId: x.id,
        })),
      ];
      this.selectableSectionList$.next(sections);
    }
  }

  @Input()
  set templatesCell(value: TemplateCell[]) {
    if (value) {
      this.selectableCellList$.next(
        value.map((x) => ({
          name: x.name,
          width: x.width,
          height: x.height,
          imageUrl: x.imageUrl,
          templateId: x.id,
          isCell: x.isCell,
        }))
      );
    }
  }

  @Input()
  postamatCells: { id: string; name: string }[] = [];

  @Input()
  set displays(values: CellDisplayFragment[]) {
    if (values) {
      this.sections$.next(transformCellDisplaysToSections(values));
    }
  }

  @Output()
  readonly save = new EventEmitter<CellDisplayInput[]>();

  @Output()
  readonly cancel = new EventEmitter();

  onSave() {
    const sections = this.sections$.getValue();

    const displays: CellDisplayInput[] = [];

    let i = 0;

    for (const section of sections) {
      let z = 0;
      for (const cell of section.cells) {
        displays.push({
          templateCellId: cell.templateId,
          x: i,
          y: z,
          cellId: cell.cellId,
        });
        z++;
      }
      i++;
    }

    this.save.emit(displays);
  }

  onCancel() {
    this.cancel.emit();
  }

  onSelectSectionChange(section?: Section) {
    if (section) {
      this.selectedSection$.next(section);
      this.selectedCell$.next(null);
    }
  }

  onSelectCellChange(cell?: Cell) {
    this.selectedCell$.next(cell ?? null);
  }

  onAddSection(section: Section) {
    const sections = this.sections$.getValue();
    sections.push({ ...section, id: id(), cells: section.cells.map((c) => ({ ...c, id: id() })) });
    this.updateNumberingSections(sections);
    this.sections$.next([...sections]);
  }

  onRemoveSection(section: Section) {
    let sections = this.sections$.getValue();
    sections = sections.filter((x) => x.id !== section.id);
    this.updateNumberingSections(sections);
    this.sections$.next([...sections]);
  }

  onUpSection({ id }: Section) {
    if (id) {
      this.moveSection(id, 'up');
    }
  }

  onDownSection({ id }: Section) {
    if (id) {
      this.moveSection(id, 'down');
    }
  }

  onAddCell(cell: Cell) {
    const section = this.selectedSection$.getValue();
    if (section) {
      section.cells = [{ ...cell, id: id() }, ...section.cells];
      this.sections$.next(this.updateSection(section));
    }
  }

  onRemoveCell(cell: Cell) {
    const section = this.selectedSection$.getValue();
    if (section) {
      const cells = section.cells;
      section.cells = cells.filter((x) => x.id !== cell.id);
      this.sections$.next(this.updateSection(section));
    }
  }

  onUpCell({ id }: Cell) {
    if (id) {
      this.moveCell(id, 'up');
    }
  }

  onDownCell({ id }: Cell) {
    if (id) {
      this.moveCell(id, 'down');
    }
  }

  onClickCell(cell: Cell) {
    const sections = this.sections$.getValue();

    for (const section of sections) {
      if (section.cells.some((x) => x.id === cell.id)) {
        this.selectedSection$.next(section);
        this.selectedCell$.next(cell);
        return;
      }
    }
  }

  private moveSection(id: string, action: 'up' | 'down') {
    if (isEmpty(id)) {
      return;
    }

    const sections = this.sections$.getValue();
    const fromIndex = findIndex(sections, (x) => x.id === id);
    const toIndex = action === 'up' ? fromIndex - 1 : fromIndex + 1;
    moveItemInArray(sections, fromIndex, toIndex);
    this.updateNumberingSections(sections);
    this.sections$.next([...sections]);
  }

  private moveCell(id: string, action: 'up' | 'down') {
    if (isEmpty(id)) {
      return;
    }

    const section = this.selectedSection$.getValue();

    if (!section) {
      return;
    }

    const cells = section.cells;

    const fromIndex = findIndex(cells, (x) => x.id === id);
    const toIndex = action === 'up' ? fromIndex - 1 : fromIndex + 1;
    moveItemInArray(cells, fromIndex, toIndex);

    this.sections$.next(this.updateSection(section));
  }

  private updateSection(section: Section) {
    const sections = this.sections$.getValue();
    const index = findIndex(sections, (x) => x.id === section.id);
    sections[index] = section;
    return [...sections];
  }

  private updateNumberingSections(sections: Section[]) {
    let i = 1;

    for (const section of sections) {
      section.name = i.toString();
      i++;
    }
  }
}

function id() {
  return Math.random().toString(16);
}
