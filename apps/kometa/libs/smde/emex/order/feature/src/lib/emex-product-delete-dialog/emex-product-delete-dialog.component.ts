import { Component } from '@angular/core';
import { EmexProductFragment } from '@kometa/smde/emex/order/types';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'kometa-emex-product-delete-dialog',
  templateUrl: './emex-product-delete-dialog.component.html',
  styleUrls: ['./emex-product-delete-dialog.component.scss'],
})
export class EmexProductDeleteDialogComponent {
  readonly product: EmexProductFragment;

  constructor(
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig
  ) {
    const { product } = this.config.data;
    this.product = product;
  }

  onDelete() {
    this.ref.close(true);
  }

  onCancel(): void {
    this.ref.close(false);
  }
}
