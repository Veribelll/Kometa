import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EmexOrderCreateDialogComponent } from './emex-order-create-dialog/emex-order-create-dialog.component';
import { EmexOrderDeleteDialogComponent } from './emex-order-delete-dialog/emex-order-delete-dialog.component';
import { EmexOrderUpdateDialogComponent } from './emex-order-update-dialog/emex-order-update-dialog.component';
import { EmexOrderDetailDialogComponent } from './emex-order-detail-dialog/emex-order-detail-dialog.component';
import { EmexOrderFragment } from '@kometa/smde/emex/order/types';

@Injectable()
export class EmexOrderDialogService {
  constructor(private readonly dialogService: DialogService) {}

  openCreate(): DynamicDialogRef {
    return this.dialogService.open(EmexOrderCreateDialogComponent, {
      header: 'Добавить заказ Emex',
      width: '1600px',
    });
  }

  openUpdate(order: EmexOrderFragment): DynamicDialogRef {
    return this.dialogService.open(EmexOrderUpdateDialogComponent, {
      header: 'Изменить заказ Emex',
      width: '900px',
      data: {
        order,
      },
    });
  }

  openDetail(order: EmexOrderFragment): DynamicDialogRef {
    return this.dialogService.open(EmexOrderDetailDialogComponent, {
      header: 'Заказ Emex',
      width: '1600px',
      data: {
        order,
      },
    });
  }

  openDelete(order: EmexOrderFragment): DynamicDialogRef {
    return this.dialogService.open(EmexOrderDeleteDialogComponent, {
      header: 'Удалить',
      width: '500px',
      data: {
        order,
      },
    });
  }
}
