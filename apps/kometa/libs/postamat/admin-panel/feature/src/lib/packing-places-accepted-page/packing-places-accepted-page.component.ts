import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
  GetPackingPlacesAcceptedQuery,
  GetPackingPlacesAcceptedQueryVariables,
  PackingPlaceAcceptedFragment,
  SortEnumType,
} from '@kometa/postamat/admin-panel/types';
import { BehaviorSubject, tap } from 'rxjs';
import { LazyLoadEvent } from 'primeng/api';
import { GetPackingPlacesAcceptedGQL } from '@kometa/postamat/admin-panel/data-access';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { QueryRef } from 'apollo-angular';
import {
  PackingPlaceDetailDialogService,
  PackingPlaceTimelineDialogService,
} from '@kometa/shared/packing-place/feature';

@UntilDestroy()
@Component({
  selector: 'kometa-packing-places-accepted-page',
  templateUrl: './packing-places-accepted-page.component.html',
  styleUrls: ['./packing-places-accepted-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PackingPlacesAcceptedPageComponent {
  readonly packingPlaces$ = new BehaviorSubject<PackingPlaceAcceptedFragment[]>([]);
  readonly totalRecords$ = new BehaviorSubject<number>(0);
  readonly loading$ = new BehaviorSubject<boolean>(false);
  queryRef?: QueryRef<GetPackingPlacesAcceptedQuery, GetPackingPlacesAcceptedQueryVariables>;

  @Input()
  postamatId!: string;

  constructor(
    private readonly getPackingPlacesAcceptedGQL: GetPackingPlacesAcceptedGQL,
    private readonly detailDialogService: PackingPlaceDetailDialogService,
    private readonly timelineDialogService: PackingPlaceTimelineDialogService
  ) {}

  async onLazyLoad(event: LazyLoadEvent): Promise<void> {
    if (this.queryRef) {
      await this.queryRef.setVariables(this.getFilter(event));
    } else {
      this.queryRef = this.getPackingPlacesAcceptedGQL.watch(this.getFilter(event), {
        useInitialLoading: true,
      });
      this.queryRef.valueChanges
        .pipe(
          tap(({ data, loading }) => {
            this.loading$.next(loading);
            if (data?.packingPlaces) {
              this.packingPlaces$.next(data.packingPlaces.items ?? []);
              this.totalRecords$.next(data.packingPlaces.totalCount ?? 0);
            }
          }),
          untilDestroyed(this)
        )
        .subscribe();
    }
  }

  onDetails({ id }: PackingPlaceAcceptedFragment) {
    this.detailDialogService.open(id, { width: '1280px' });
  }

  onTimeline({ id }: PackingPlaceAcceptedFragment) {
    this.timelineDialogService.open(id);
  }

  private getFilter({ first, rows }: LazyLoadEvent): GetPackingPlacesAcceptedQueryVariables {
    return {
      postamatId: this.postamatId,
      order: {
        lastModificationTime: SortEnumType.Desc,
        creationTime: SortEnumType.Desc,
      },
      skip: first,
      take: rows,
    };
  }
}
