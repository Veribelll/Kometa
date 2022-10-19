import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EmexOrderFragment } from '@kometa/smde/emex/order/types';

@Component({
  selector: 'kometa-emex-order-detail-dialog',
  templateUrl: './emex-order-detail-dialog.component.html',
  styleUrls: ['./emex-order-detail-dialog.component.scss'],
})
export class EmexOrderDetailDialogComponent {
  readonly order: EmexOrderFragment;

  constructor(
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig
  ) {
    const { order } = this.config.data;
    this.order = order;
  }

  onCancel(): void {
    this.ref.close();
  }
}
