import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { GetEmexProductsForPackingPlaceQuery } from '@kometa/shared/packing-place/types';
import { sortBy } from 'lodash';
import { GetEmexProductsForPackingPlaceGQL } from '@kometa/shared/packing-place/data-access';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject, tap } from 'rxjs';
import {
  EmexProductFragment,
  EmexProductStatus,
  EmexTypeBalance,
  EmexTypePayment,
} from '@kometa/smde/emex/order/types';
import { getEnumKey } from '@kometa/shared/utils';

type Product = NonNullable<
  NonNullable<GetEmexProductsForPackingPlaceQuery['emexProducts']>['items']
>[0];

@UntilDestroy()
@Component({
  selector: 'kometa-emex-product-table',
  templateUrl: './emex-product-table.component.html',
  styleUrls: ['./emex-product-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmexProductTableComponent implements OnInit {
  readonly loading$ = new BehaviorSubject(false);
  products: Product[] = [];
  rowGroupMetadata: { [k: string]: { index: number } } = {};

  @Input()
  packingPlaceId = '';

  constructor(private readonly gql: GetEmexProductsForPackingPlaceGQL) {}

  ngOnInit() {
    this.gql
      .watch({ packingPlaceId: this.packingPlaceId }, { useInitialLoading: true })
      .valueChanges.pipe(
        tap(({ data, loading }) => {
          this.loading$.next(loading);

          const items = data?.emexProducts?.items;
          if (items) {
            this.products = sortBy(items, (x) => x.order.id);
            this.updateRowGroupMetaData();
          }
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  updateRowGroupMetaData(): void {
    this.rowGroupMetadata = {};

    if (this.products) {
      for (let i = 0; i < this.products.length; i++) {
        const rowData = this.products[i];
        const rowGroup = rowData.order.id;

        if (i === 0) {
          this.rowGroupMetadata[rowGroup] = { index: 0 };
        } else {
          const previousRowData = this.products[i - 1];
          const previousRowGroup = previousRowData.order.id;
          if (rowGroup !== previousRowGroup) {
            this.rowGroupMetadata[rowGroup] = { index: i };
          }
        }
      }
    }
  }

  getStatus(product: EmexProductFragment) {
    return getEnumKey(product.status, EmexProductStatus);
  }

  getTypePayment(product: EmexProductFragment) {
    return getEnumKey(product.typePayment, EmexTypePayment);
  }

  getTypeBalance(product: EmexProductFragment) {
    return getEnumKey(product.typeBalance, EmexTypeBalance);
  }
}
