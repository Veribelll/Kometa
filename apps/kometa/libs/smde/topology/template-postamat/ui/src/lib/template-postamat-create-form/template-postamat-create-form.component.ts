import { BehaviorSubject, tap } from 'rxjs';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { filter, findIndex, isEmpty } from 'lodash';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { CreateTemplatePostamatFormModel } from '../create-template-postamat-form.model';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Section } from '@kometa/shared/topology/ui';

type TemplateSection = Section;

@UntilDestroy()
@Component({
  selector: 'kometa-template-postamat-create-form',
  templateUrl: './template-postamat-create-form.component.html',
  styleUrls: ['./template-postamat-create-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplatePostamatCreateFormComponent implements OnInit {
  readonly selectSections$ = new BehaviorSubject<Section[]>([]);

  @Input()
  formGroup!: TypedFormGroup<CreateTemplatePostamatFormModel>;

  @Input()
  selectableList: TemplateSection[] = [];

  @Output()
  readonly save = new EventEmitter<CreateTemplatePostamatFormModel>();

  @Output()
  readonly cancel = new EventEmitter();

  ngOnInit() {
    this.selectSections$
      .pipe(
        tap((sections) => {
          this.formGroup.get('sections').setValue(
            sections.map((s, i) => ({
              position: i,
              templateSectionId: s.templateId as string,
            }))
          );
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  onAddSection(section: Section) {
    const selectSections = this.selectSections$.value;
    this.selectSections$.next([...selectSections, { ...section, id: Math.random().toString(16) }]);
  }

  onRemoveSection({ id }: Section) {
    if (id) {
      const selectSections = this.selectSections$.value;
      this.selectSections$.next(filter(selectSections, (x) => x.id !== id));
    }
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

  onSave() {
    if (this.formGroup.valid && this.formGroup.value) {
      const { name, sections } = this.formGroup.value;
      this.save.emit({ name, sections });
    }
  }

  onCancel() {
    this.cancel.emit();
  }

  private moveSection(id: string, action: 'up' | 'down') {
    if (isEmpty(id)) {
      return;
    }

    const selectSections = [...this.selectSections$.value];
    const fromIndex = findIndex(selectSections, (x) => x.id === id);
    const toIndex = action === 'up' ? fromIndex - 1 : fromIndex + 1;
    moveItemInArray(selectSections, fromIndex, toIndex);
    this.selectSections$.next(selectSections);
  }
}
