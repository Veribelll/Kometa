import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PostamatCreateDialogComponent } from './postamat-create-dialog/postamat-create-dialog.component';
import { PostamatDeleteDialogComponent } from './postamat-delete-dialog/postamat-delete-dialog.component';
import { PostamatDetailDialogComponent } from './postamat-detail-dialog/postamat-detail-dialog.component';
import { PostamatScannerUpdateDialogComponent } from './postamat-scanner-update-dialog/postamat-scanner-update-dialog.component';
import { PostamatSettingsUpdateDialogComponent } from './postamat-settings-update-dialog/postamat-settings-update-dialog.component';
import { PostamatUpdateDialogComponent } from './postamat-update-dialog/postamat-update-dialog.component';
import { PostamatFragment } from '@kometa/smde/postamat/types';
import { PostamatPrintersUpdateDialogComponent } from './postamat-printers-update-dialog/postamat-printers-update-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class PostamatDialogService {
  constructor(private readonly dialogService: DialogService) {}

  openCreate(): DynamicDialogRef {
    return this.dialogService.open(PostamatCreateDialogComponent, {
      header: 'Добавить постамат',
      width: '500px',
    });
  }

  openUpdate(postamat: PostamatFragment): DynamicDialogRef {
    return this.dialogService.open(PostamatUpdateDialogComponent, {
      header: 'Изменить постамат',
      width: '500px',
      data: {
        postamat,
      },
    });
  }

  openDetail(postamat: PostamatFragment): DynamicDialogRef {
    return this.dialogService.open(PostamatDetailDialogComponent, {
      header: 'Постамат',
      width: '500px',
      data: {
        postamat,
      },
    });
  }

  openDelete(postamat: PostamatFragment): DynamicDialogRef {
    return this.dialogService.open(PostamatDeleteDialogComponent, {
      header: 'Удалить',
      width: '500px',
      data: {
        postamat,
      },
    });
  }

  openSettingsUpdate(postamatId: string): DynamicDialogRef {
    return this.dialogService.open(PostamatSettingsUpdateDialogComponent, {
      header: 'Настройки постамата',
      width: '500px',
      data: {
        postamatId,
      },
    });
  }

  openScannerUpdate(postamatId: string): DynamicDialogRef {
    return this.dialogService.open(PostamatScannerUpdateDialogComponent, {
      header: 'Настройки сканера ШК',
      width: '500px',
      data: {
        postamatId,
      },
    });
  }

  openPrinters(postamatId: string) {
    return this.dialogService.open(PostamatPrintersUpdateDialogComponent, {
      header: 'Принтеры',
      width: '600px',
      data: {
        postamatId,
      },
    });
  }
}
