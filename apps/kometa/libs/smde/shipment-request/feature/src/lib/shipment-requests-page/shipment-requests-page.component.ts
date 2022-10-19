import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
  GetShipmentRequestsQuery,
  GetShipmentRequestsQueryVariables,
  ShipmentRequestFilterInput,
  ShipmentRequestFragment,
  SortEnumType,
} from '@kometa/smde/shipment-request/types';
import { LazyLoadEvent } from 'primeng/api';
import { ShipmentRequestDialogService } from '../shipment-request-dialog.service';
import { isEmpty } from 'lodash';
import { GetShipmentRequestsGQL } from '@kometa/smde/shipment-request/data-access';
import { tap } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { QueryRef } from 'apollo-angular';
import { CurrentContractorService } from '@kometa/shared/abp';

@UntilDestroy()
@Component({
  selector: 'kometa-shipment-requests-page',
  templateUrl: './shipment-requests-page.component.html',
  styleUrls: ['./shipment-requests-page.component.scss'],
  providers: [ShipmentRequestDialogService],
})
export class ShipmentRequestsPageComponent {
  readonly requests$ = new BehaviorSubject<ShipmentRequestFragment[]>([]);
  readonly totalRecords$ = new BehaviorSubject<number>(0);
  readonly loading$ = new BehaviorSubject<boolean>(false);
  queryRef?: QueryRef<GetShipmentRequestsQuery, GetShipmentRequestsQueryVariables>;

  constructor(
    private readonly getShipmentRequestsGQL: GetShipmentRequestsGQL,
    private readonly shipmentRequestDialogService: ShipmentRequestDialogService,
    private readonly currentContractorService: CurrentContractorService
  ) {
    this.currentContractorService.current$
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
      this.queryRef = this.getShipmentRequestsGQL.watch(this.getFilter(event), {
        useInitialLoading: true,
      });
      this.queryRef.valueChanges
        .pipe(
          tap(({ data, loading }) => {
            this.loading$.next(loading);
            if (data?.shipmentRequests) {
              this.requests$.next(data.shipmentRequests.items ?? []);
              this.totalRecords$.next(data.shipmentRequests.totalCount ?? 0);
            }
          }),
          untilDestroyed(this)
        )
        .subscribe();
    }
  }

  onDetails(request: ShipmentRequestFragment): void {
    this.shipmentRequestDialogService.openDetail(request);
  }

  onCreate(): void {
    this.shipmentRequestDialogService.openCreate();
  }

  onUpdate(request: ShipmentRequestFragment): void {
    this.shipmentRequestDialogService.openUpdate(request);
  }

  onCancel(request: ShipmentRequestFragment): void {
    this.shipmentRequestDialogService.openCancel(request);
  }

  onTimeline(request: ShipmentRequestFragment) {
    this.shipmentRequestDialogService.openTimeline(request);
  }

  private getFilter({
    globalFilter,
    first,
    rows,
  }: LazyLoadEvent): GetShipmentRequestsQueryVariables {
    let where: ShipmentRequestFilterInput | undefined = undefined;
    if (!isEmpty(globalFilter)) {
      where = {
        or: [
          {
            code: { contains: globalFilter },
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
