import { BehaviorSubject, tap } from 'rxjs';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import {
  Component,
  Output,
  EventEmitter,
  Input,
  ChangeDetectionStrategy,
  OnInit,
} from '@angular/core';
import { filter, findIndex, isEmpty } from 'lodash';
import { CreateTemplateSectionFormModel } from '../create-template-section-form.model';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Cell } from '@kometa/shared/topology/ui';

type TemplateCell = Cell;

@UntilDestroy()
@Component({
  selector: 'kometa-template-section-create-form',
  templateUrl: './template-section-create-form.component.html',
  styleUrls: ['./template-section-create-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateSectionCreateFormComponent implements OnInit {
  readonly selectCells$ = new BehaviorSubject<Cell[]>([]);

  @Input()
  formGroup!: TypedFormGroup<CreateTemplateSectionFormModel>;

  @Input()
  selectableList: TemplateCell[] = [];

  @Output()
  readonly save = new EventEmitter<CreateTemplateSectionFormModel>();

  @Output()
  readonly cancel = new EventEmitter();

  ngOnInit() {
    this.selectCells$
      .pipe(
        tap((cells) => {
          this.formGroup
            .get('cells')
            .setValue(cells.map((c, i) => ({ position: i, templateCellId: c.templateId })));
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  onAddCell(cell: Cell) {
    const selectCells = this.selectCells$.value;
    this.selectCells$.next([{ ...cell, id: Math.random().toString(16) }, ...selectCells]);
  }

  onRemoveCell({ id }: Cell) {
    const selectCells = this.selectCells$.value;
    this.selectCells$.next(filter(selectCells, (x) => x.id !== id));
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

  onSave() {
    if (this.formGroup.valid && this.formGroup.value) {
      const { name, cells } = this.formGroup.value;

      this.save.emit({ name, cells });
    }
  }

  onCancel(): void {
    this.cancel.emit();
  }

  private moveCell(id: string, action: 'up' | 'down') {
    if (isEmpty(id)) {
      return;
    }

    const selectCells = [...this.selectCells$.value];
    const fromIndex = findIndex(selectCells, (x) => x.id === id);
    const toIndex = action === 'up' ? fromIndex - 1 : fromIndex + 1;
    moveItemInArray(selectCells, fromIndex, toIndex);
    this.selectCells$.next(selectCells);
  }
}
