import { Injectable } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { TopologyUpdateDialogComponent } from './topology-update-dialog/topology-update-dialog.component';
import { CellDisplayUpdateDialogComponent } from './cell-display-update-dialog/cell-display-update-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class TopologyDialogService {
  constructor(private readonly dialogService: DialogService) {}

  openUpdate(postamatId: string) {
    return this.dialogService.open(TopologyUpdateDialogComponent, {
      header: 'Топология',
      width: '500px',
      data: {
        postamatId,
      },
    });
  }

  openUpdateDisplay(postamatId: string) {
    return this.dialogService.open(CellDisplayUpdateDialogComponent, {
      header: 'Постамат',
      width: '100%',
      height: '100%',
      modal: true,
      data: {
        postamatId,
      },
    });
  }
}
