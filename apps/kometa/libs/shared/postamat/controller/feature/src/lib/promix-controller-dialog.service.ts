import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PromixControllerCreateDialogComponent } from './promix-controller-create-dialog/promix-controller-create-dialog.component';
import { PromixControllerDeleteDialogComponent } from './promix-controller-delete-dialog/promix-controller-delete-dialog.component';
import { PromixControllerUpdateDialogComponent } from './promix-controller-update-dialog/promix-controller-update-dialog.component';
import { PromixControllerFragment } from '@kometa/shared/postamat/controller/types';

@Injectable()
export class PromixControllerDialogService {
  constructor(private readonly dialogService: DialogService) {}

  openCreate(postamatId: string, ports?: string[]): DynamicDialogRef {
    return this.dialogService.open(PromixControllerCreateDialogComponent, {
      header: 'Добавить Promix контроллер',
      width: '500px',
      data: {
        postamatId,
        ports,
      },
    });
  }

  openUpdate(
    postamatId: string,
    controller: PromixControllerFragment,
    ports?: string[]
  ): DynamicDialogRef {
    return this.dialogService.open(PromixControllerUpdateDialogComponent, {
      header: 'Изменить Promix контроллер',
      width: '500px',
      data: {
        postamatId,
        controller,
        ports,
      },
    });
  }

  openDelete(postamatId: string, controller: PromixControllerFragment): DynamicDialogRef {
    return this.dialogService.open(PromixControllerDeleteDialogComponent, {
      header: 'Удалить Promix контроллер',
      width: '500px',
      data: {
        postamatId,
        controller,
      },
    });
  }
}
