import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EmexProductFragment } from '@kometa/smde/emex/order/types';
import { EmexProductDeleteDialogComponent } from './emex-product-delete-dialog/emex-product-delete-dialog.component';
import { EmexProductCreateDialogComponent } from './emex-product-create-dialog/emex-product-create-dialog.component';
import { EmexProductUpdateDialogComponent } from './emex-product-update-dialog/emex-product-update-dialog.component';

@Injectable()
export class EmexProductDialogService {
  constructor(private readonly dialogService: DialogService) {}

  openCreate(): DynamicDialogRef {
    return this.dialogService.open(EmexProductCreateDialogComponent, {
      header: 'Добавить товар',
      width: '900px',
    });
  }

  openUpdate(product: EmexProductFragment): DynamicDialogRef {
    return this.dialogService.open(EmexProductUpdateDialogComponent, {
      header: 'Изменить товар',
      width: '900px',
      data: {
        product,
      },
    });
  }

  openDelete(product: EmexProductFragment): DynamicDialogRef {
    return this.dialogService.open(EmexProductDeleteDialogComponent, {
      header: 'Удалить',
      width: '500px',
      data: {
        product,
      },
    });
  }
}
