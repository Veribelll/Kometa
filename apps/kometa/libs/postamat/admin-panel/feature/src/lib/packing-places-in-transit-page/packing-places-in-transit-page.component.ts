import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import {
  GetPackingPlacesInTransitQuery,
  GetPackingPlacesInTransitQueryVariables,
  PackingPlaceInTransitFragment,
  SortEnumType,
} from '@kometa/postamat/admin-panel/types';
import { QueryRef } from 'apollo-angular';
import { GetPackingPlacesInTransitGQL } from '@kometa/postamat/admin-panel/data-access';
import { LazyLoadEvent } from 'primeng/api';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import {
  PackingPlaceDetailDialogService,
  PackingPlaceTimelineDialogService,
} from '@kometa/shared/packing-place/feature';

@UntilDestroy()
@Component({
  selector: 'kometa-packing-places-in-transit-page',
  templateUrl: './packing-places-in-transit-page.component.html',
  styleUrls: ['./packing-places-in-transit-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PackingPlacesInTransitPageComponent {
  readonly packingPlaces$ = new BehaviorSubject<PackingPlaceInTransitFragment[]>([]);
  readonly totalRecords$ = new BehaviorSubject<number>(0);
  readonly loading$ = new BehaviorSubject<boolean>(false);
  queryRef?: QueryRef<GetPackingPlacesInTransitQuery, GetPackingPlacesInTransitQueryVariables>;

  @Input()
  postamatId!: string;

  constructor(
    private readonly getPackingPlacesInTransitGQL: GetPackingPlacesInTransitGQL,
    private readonly detailDialogService: PackingPlaceDetailDialogService,
    private readonly timelineDialogService: PackingPlaceTimelineDialogService
  ) {}

  async onLazyLoad(event: LazyLoadEvent): Promise<void> {
    if (this.queryRef) {
      await this.queryRef.setVariables(this.getFilter(event));
    } else {
      this.queryRef = this.getPackingPlacesInTransitGQL.watch(this.getFilter(event), {
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

  onDetails({ id }: PackingPlaceInTransitFragment) {
    this.detailDialogService.open(id, { width: '1280px' });
  }

  onTimeline({ id }: PackingPlaceInTransitFragment) {
    this.timelineDialogService.open(id);
  }

  private getFilter({ first, rows }: LazyLoadEvent): GetPackingPlacesInTransitQueryVariables {
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
