import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { GetCellByIdGQL } from '@kometa/shared/postamat/cell/data-access';
import { BehaviorSubject } from 'rxjs';
import { CellDetailFragment } from '@kometa/shared/postamat/cell/types';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { tap } from 'rxjs/operators';
import { PackingPlaceDetailDialogService } from '@kometa/shared/packing-place/feature';

@UntilDestroy()
@Component({
  selector: 'kometa-cell-detail-dialog',
  templateUrl: './cell-detail-dialog.component.html',
  styleUrls: ['./cell-detail-dialog.component.scss'],
})
export class CellDetailDialogComponent {
  readonly cellId: string;
  readonly cell$ = new BehaviorSubject<CellDetailFragment | undefined>(undefined);
  readonly loading$ = new BehaviorSubject<boolean>(false);

  constructor(
    private readonly getCellByIdGQL: GetCellByIdGQL,
    private readonly packingPlaceDialogService: PackingPlaceDetailDialogService,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig
  ) {
    const { cellId } = this.config.data;

    this.cellId = cellId;

    this.getCellByIdGQL
      .watch(
        { cellId },
        {
          useInitialLoading: true,
        }
      )
      .valueChanges.pipe(
        tap(({ data, loading }) => {
          this.loading$.next(loading);
          if (data?.cellById) {
            this.cell$.next(data.cellById);
          }
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  onPackingPlaceDetails({ id }: { id: string }) {
    this.packingPlaceDialogService.open(id);
  }
}
