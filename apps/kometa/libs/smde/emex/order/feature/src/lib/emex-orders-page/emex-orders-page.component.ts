import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
  EmexOrderFilterInput,
  EmexOrderFragment,
  GetEmexOrdersQuery,
  GetEmexOrdersQueryVariables,
  SortEnumType,
} from '@kometa/smde/emex/order/types';
import { EmexOrderDialogService } from '../emex-order-dialog.service';
import { LazyLoadEvent } from 'primeng/api';
import { isEmpty } from 'lodash';
import { GetEmexOrdersGQL } from '@kometa/smde/emex/order/data-access';
import { tap } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { QueryRef } from 'apollo-angular';
import { CurrentContractorService } from '@kometa/shared/abp';

@UntilDestroy()
@Component({
  selector: 'kometa-emex-orders-page',
  templateUrl: './emex-orders-page.component.html',
  styleUrls: ['./emex-orders-page.component.scss'],
  providers: [EmexOrderDialogService],
})
export class EmexOrdersPageComponent {
  readonly orders$ = new BehaviorSubject<EmexOrderFragment[]>([]);
  readonly totalRecords$ = new BehaviorSubject<number>(0);
  readonly loading$ = new BehaviorSubject<boolean>(false);
  queryRef?: QueryRef<GetEmexOrdersQuery, GetEmexOrdersQueryVariables>;

  constructor(
    private readonly getEmexOrdersGQL: GetEmexOrdersGQL,
    private readonly emexOrderDialogService: EmexOrderDialogService,
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
      this.queryRef = this.getEmexOrdersGQL.watch(this.getFilter(event), {
        useInitialLoading: true,
      });
      this.queryRef.valueChanges
        .pipe(
          tap(({ data, loading }) => {
            this.loading$.next(loading);
            if (data?.emexOrders) {
              this.orders$.next(data.emexOrders.items ?? []);
              this.totalRecords$.next(data.emexOrders.totalCount ?? 0);
            }
          }),
          untilDestroyed(this)
        )
        .subscribe();
    }
  }

  onDetails(order: EmexOrderFragment) {
    this.emexOrderDialogService.openDetail(order);
  }

  onCreate(): void {
    this.emexOrderDialogService.openCreate();
  }

  onUpdate(order: EmexOrderFragment) {
    this.emexOrderDialogService.openUpdate(order);
  }

  onDelete(order: EmexOrderFragment): void {
    this.emexOrderDialogService.openDelete(order);
  }

  private getFilter({ globalFilter, first, rows }: LazyLoadEvent): GetEmexOrdersQueryVariables {
    let where: EmexOrderFilterInput | undefined = undefined;
    if (!isEmpty(globalFilter)) {
      where = {
        or: [
          {
            externalId: { contains: globalFilter },
          },
        ],
      };
    }

    return {
      where,
      order: {
        creationTime: SortEnumType.Desc,
        lastModificationTime: SortEnumType.Desc,
      },
      skip: first,
      take: rows,
    };
  }
}
