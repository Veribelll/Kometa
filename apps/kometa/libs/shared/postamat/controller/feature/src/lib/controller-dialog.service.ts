import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ControllersPageDialogComponent } from './controllers-page-dialog/controllers-page-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class ControllerDialogService {
  constructor(private readonly dialogService: DialogService) {}

  openPage(postamatId: string): DynamicDialogRef {
    return this.dialogService.open(ControllersPageDialogComponent, {
      header: 'Контроллеры',
      width: '900px',
      data: {
        postamatId,
      },
    });
  }
}
