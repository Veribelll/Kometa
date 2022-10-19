import { Component, ContentChild, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GetCellDisplaysGQL } from '@kometa/shared/topology/data-access';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject, tap } from 'rxjs';
import { Cell, Section, transformCellDisplaysToSections } from '@kometa/shared/topology/ui';
import { find } from 'lodash';

@UntilDestroy()
@Component({
  selector: 'kometa-postamat-view-page',
  templateUrl: './postamat-view-page.component.html',
  styleUrls: ['./postamat-view-page.component.scss'],
})
export class PostamatViewPageComponent implements OnInit {
  readonly sections$ = new BehaviorSubject<Section[]>([]);
  readonly loading$ = new BehaviorSubject<boolean>(false);

  @Input()
  postamatId!: string;

  @Input()
  disables: { cellId: string }[] = [];

  @Input()
  select?: Cell;

  @Output()
  readonly selectChange = new EventEmitter<Cell>();

  constructor(private readonly getCellDisplaysGQL: GetCellDisplaysGQL) {}

  ngOnInit(): void {
    this.getCellDisplaysGQL
      .watch({ postamatId: this.postamatId }, { useInitialLoading: true })
      .valueChanges.pipe(
        tap(({ data, loading }) => {
          this.loading$.next(loading);
          if (data?.postamatById.displays) {
            const sections = transformCellDisplaysToSections(data.postamatById.displays);
            for (const section of sections) {
              const cell = find(section.cells, (c) => this.disables.some((d) => d.cellId === c.id));
              if (cell) {
                cell.disable = true;
              }
            }
            this.sections$.next(sections);
          }
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  onSelect(cell: Cell) {
    this.selectChange.emit(cell);
  }

  setSelected(cellId: string) {
    const cells = this.sections$
      .getValue()
      .map((x) => x.cells)
      .reduce((a, b) => a.concat(b), []);

    const cell = find(cells, (x) => x.cellId === cellId);
    this.select = cell;
  }
}
