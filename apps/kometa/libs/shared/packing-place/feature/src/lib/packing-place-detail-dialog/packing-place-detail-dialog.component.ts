import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PackingPlaceDetailFragment, TypeOrder } from '@kometa/shared/packing-place/types';
import { GetPackingPlaceByIdGQL } from '@kometa/shared/packing-place/data-access';
import { BehaviorSubject, tap } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'kometa-packing-place-detail-dialog',
  templateUrl: './packing-place-detail-dialog.component.html',
  styleUrls: ['./packing-place-detail-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PackingPlaceDetailDialogComponent {
  readonly packingPlaceId: string;
  readonly typeOrder = TypeOrder;
  readonly packingPlace$ = new BehaviorSubject<PackingPlaceDetailFragment | null>(null);
  readonly loading$ = new BehaviorSubject(false);

  constructor(
    private readonly getPackingPlaceByIdGQL: GetPackingPlaceByIdGQL,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig
  ) {
    const { packingPlaceId } = this.config.data;

    this.packingPlaceId = packingPlaceId;
    this.getPackingPlaceByIdGQL
      .watch({ packingPlaceId }, { useInitialLoading: true })
      .valueChanges.pipe(
        tap(({ data, loading }) => {
          this.loading$.next(loading);
          if (data?.packingPlaceById) {
            this.packingPlace$.next(data.packingPlaceById);
          }
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }
}
