import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
  EmexProductFragment,
  EmexProductStatus,
  EmexTypeBalance,
  EmexTypePayment,
} from '@kometa/smde/emex/order/types';
import { getEnumKey } from '@kometa/shared/utils';
import { sortBy } from 'lodash';

@Component({
  selector: 'kometa-emex-product-table',
  templateUrl: './emex-product-table.component.html',
  styleUrls: ['./emex-product-table.component.scss'],
})
export class EmexProductTableComponent {
  clonedProducts: EmexProductFragment[] = [];
  rowGroupMetadata: { [k: string]: { index: number } } = {};

  @Input()
  set products(value: EmexProductFragment[]) {
    if (value) {
      this.clonedProducts = sortBy(value, (x) => x.packingPlace?.barcode);
      this.updateRowGroupMetaData();
    }
  }

  @Input()
  actionButtons = true;

  @Input()
  permissionDetails = '';

  @Input()
  permissionUpdate = '';

  @Input()
  permissionDelete = '';

  @Output()
  readonly details = new EventEmitter<EmexProductFragment>();

  @Output()
  readonly update = new EventEmitter<EmexProductFragment>();

  @Output()
  readonly delete = new EventEmitter<EmexProductFragment>();

  updateRowGroupMetaData(): void {
    this.rowGroupMetadata = {};

    if (this.clonedProducts?.length > 0) {
      for (let i = 0; i < this.clonedProducts.length; i++) {
        const rowData = this.clonedProducts[i];
        const rowGroup = rowData.packingPlace?.barcode ?? '';

        if (i === 0) {
          this.rowGroupMetadata[rowGroup] = { index: 0 };
        } else {
          const previousRowData = this.clonedProducts[i - 1];
          const previousRowGroup = previousRowData.packingPlace?.barcode ?? '';
          if (rowGroup !== previousRowGroup) {
            this.rowGroupMetadata[rowGroup] = { index: i };
          }
        }
      }
    }
  }

  onDetails(product: EmexProductFragment): void {
    this.details.emit(product);
  }

  onUpdate(product: EmexProductFragment): void {
    this.update.emit(product);
  }

  onDelete(product: EmexProductFragment): void {
    this.delete.emit(product);
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
