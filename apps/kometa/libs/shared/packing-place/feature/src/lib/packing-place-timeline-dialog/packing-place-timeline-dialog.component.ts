import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { GetPackingPlaceChangesHistoryGQL } from '@kometa/shared/packing-place/data-access';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject, tap } from 'rxjs';
import { GetPackingPlaceChangesHistoryQuery } from '@kometa/shared/packing-place/types';

@UntilDestroy()
@Component({
  selector: 'kometa-packing-place-timeline-dialog',
  templateUrl: './packing-place-timeline-dialog.component.html',
  styleUrls: ['./packing-place-timeline-dialog.component.scss'],
})
export class PackingPlaceTimelineDialogComponent {
  readonly packingPlaceId: string;
  readonly changesHistory = new BehaviorSubject<
    GetPackingPlaceChangesHistoryQuery['packingPlaceById']['changesHistory']
  >([]);
  readonly loading$ = new BehaviorSubject(false);

  constructor(
    private readonly getPackingPlaceChangesHistoryGQL: GetPackingPlaceChangesHistoryGQL,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig
  ) {
    const { packingPlaceId } = this.config.data;

    this.packingPlaceId = packingPlaceId;
    this.getPackingPlaceChangesHistoryGQL
      .watch(
        { packingPlaceId },
        {
          useInitialLoading: true,
        }
      )
      .valueChanges.pipe(
        tap(({ data, loading }) => {
          this.loading$.next(loading);
          if (data?.packingPlaceById) {
            this.changesHistory.next(data.packingPlaceById.changesHistory);
          }
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }
}
