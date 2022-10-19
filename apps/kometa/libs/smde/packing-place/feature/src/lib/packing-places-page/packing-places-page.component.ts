import { Component } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import {
  GetPackingPlacesQuery,
  GetPackingPlacesQueryVariables,
  PackingPlaceFilterInput,
  PackingPlaceFragment,
  SortEnumType,
} from '@kometa/smde/packing-place/types';
import { PackingPlaceDialogService } from '../packing-place-dialog.service';
import { LazyLoadEvent } from 'primeng/api';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { CurrentContractorService } from '@kometa/shared/abp';
import { isEmpty } from 'lodash';
import { GetPackingPlacesGQL } from '@kometa/smde/packing-place/data-access';
import { QueryRef } from 'apollo-angular';

@UntilDestroy()
@Component({
  selector: 'kometa-packing-places-page',
  templateUrl: './packing-places-page.component.html',
  styleUrls: ['./packing-places-page.component.scss'],
  providers: [PackingPlaceDialogService],
})
export class PackingPlacesPageComponent {
  readonly packingPlaces$ = new BehaviorSubject<PackingPlaceFragment[]>([]);
  readonly totalRecords$ = new BehaviorSubject<number>(0);
  readonly loading$ = new BehaviorSubject<boolean>(false);
  queryRef?: QueryRef<GetPackingPlacesQuery, GetPackingPlacesQueryVariables>;

  constructor(
    private readonly getPackingPlacesGQL: GetPackingPlacesGQL,
    private readonly packingPlaceDialogService: PackingPlaceDialogService,
    private readonly currentContractorService: CurrentContractorService
  ) {
    this.currentContractorService.currentId$
      .pipe(
        tap(() => this.queryRef?.refetch()),
        untilDestroyed(this)
      )
      .subscribe();
  }

  async onLazyLoad(event: LazyLoadEvent): Promise<void> {
    if (this.queryRef) {
      await this.queryRef.setVariables(this.getFilter(event));
    } else {
      this.queryRef = this.getPackingPlacesGQL.watch(this.getFilter(event), {
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

  onCreate() {
    this.packingPlaceDialogService.openCreate();
  }

  onDetails({ id }: PackingPlaceFragment) {
    this.packingPlaceDialogService.openDetail(id);
  }

  onUpdate(packingPlace: PackingPlaceFragment) {
    this.packingPlaceDialogService.openUpdate(packingPlace);
  }

  onDelete(packingPlace: PackingPlaceFragment) {
    this.packingPlaceDialogService.openDelete(packingPlace);
  }

  onSend(packingPlace: PackingPlaceFragment) {
    this.packingPlaceDialogService.openSend(packingPlace);
  }

  onTimeline({ id }: PackingPlaceFragment) {
    this.packingPlaceDialogService.openTimeline(id);
  }

  private getFilter({ globalFilter, first, rows }: LazyLoadEvent): GetPackingPlacesQueryVariables {
    let where: PackingPlaceFilterInput | undefined = undefined;
    if (!isEmpty(globalFilter)) {
      where = {
        or: [
          {
            barcode: { contains: globalFilter },
          },
        ],
      };
    }

    return {
      where,
      order: {
        lastModificationTime: SortEnumType.Desc,
        creationTime: SortEnumType.Desc,
      },
      skip: first,
      take: rows,
    };
  }
}
