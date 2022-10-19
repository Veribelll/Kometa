import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { IndividualEntrepreneurCreateDialogComponent } from './individual-entrepreneur-create-dialog/individual-entrepreneur-create-dialog.component';
import { IndividualEntrepreneurDeleteDialogComponent } from './individual-entrepreneur-delete-dialog/individual-entrepreneur-delete-dialog.component';
import { IndividualEntrepreneurDetailDialogComponent } from './individual-entrepreneur-detail-dialog/individual-entrepreneur-detail-dialog.component';
import { IndividualEntrepreneurUpdateDialogComponent } from './individual-entrepreneur-update-dialog/individual-entrepreneur-update-dialog.component';
import { IndividualEntrepreneurFragment } from '@kometa/smde/contractor/types';

@Injectable()
export class IndividualEntrepreneurDialogService {
  constructor(private readonly dialogService: DialogService) {}

  openCreate(): DynamicDialogRef {
    return this.dialogService.open(IndividualEntrepreneurCreateDialogComponent, {
      header: 'Добавить индивидуального предпринимателя',
      width: '700px',
    });
  }

  openUpdate(id: string): DynamicDialogRef {
    return this.dialogService.open(IndividualEntrepreneurUpdateDialogComponent, {
      header: 'Изменить индивидуального предпринимателя',
      width: '700px',
      data: {
        id,
      },
    });
  }

  openDetail(id: string): DynamicDialogRef {
    return this.dialogService.open(IndividualEntrepreneurDetailDialogComponent, {
      header: 'Индивидуальный предприниматель',
      width: '700px',
      data: {
        id,
      },
    });
  }

  openDelete(individualEntrepreneur: IndividualEntrepreneurFragment): DynamicDialogRef {
    return this.dialogService.open(IndividualEntrepreneurDeleteDialogComponent, {
      header: 'Удалить',
      width: '500px',
      data: {
        individualEntrepreneur,
      },
    });
  }
}
