import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ReturnRequestCreateDialogComponent } from './return-request-create-dialog/return-request-create-dialog.component';
import { ReturnRequestUpdateDialogComponent } from './return-request-update-dialog/return-request-update-dialog.component';
import { ReturnRequestFragment } from '@kometa/smde/return-request/types';
import { ReturnRequestDetailDialogComponent } from './return-request-detail-dialog/return-request-detail-dialog.component';
import { ReturnRequestCancelDialogComponent } from './return-request-cancel-dialog/return-request-cancel-dialog.component';
import { ReturnRequestReturnDialogComponent } from './return-request-return-dialog/return-request-return-dialog.component';
import { ReturnRequestTimelineDialogComponent } from './return-request-timeline-dialog/return-request-timeline-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class ReturnRequestDialogService {
  constructor(private readonly dialogService: DialogService) {}

  openCreate(): DynamicDialogRef {
    return this.dialogService.open(ReturnRequestCreateDialogComponent, {
      header: 'Добавить заявку',
      width: '500px',
    });
  }

  openUpdate(request: ReturnRequestFragment): DynamicDialogRef {
    return this.dialogService.open(ReturnRequestUpdateDialogComponent, {
      header: 'Изменить заявку',
      width: '500px',
      data: {
        request,
      },
    });
  }

  openDetail(request: ReturnRequestFragment): DynamicDialogRef {
    return this.dialogService.open(ReturnRequestDetailDialogComponent, {
      header: 'Заявка',
      width: '500px',
      data: {
        request,
      },
    });
  }

  openReturn(request: ReturnRequestFragment): DynamicDialogRef {
    return this.dialogService.open(ReturnRequestReturnDialogComponent, {
      header: 'Вернуть',
      width: '500px',
      data: {
        request,
      },
    });
  }

  openCancel(request: ReturnRequestFragment): DynamicDialogRef {
    return this.dialogService.open(ReturnRequestCancelDialogComponent, {
      header: 'Отменить',
      width: '500px',
      data: {
        request,
      },
    });
  }

  openTimeline(request: ReturnRequestFragment): DynamicDialogRef {
    return this.dialogService.open(ReturnRequestTimelineDialogComponent, {
      header: 'История',
      width: '600px',
      data: {
        request,
      },
    });
  }
}
