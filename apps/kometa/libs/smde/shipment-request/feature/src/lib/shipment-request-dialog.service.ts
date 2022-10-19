import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ShipmentRequestCreateDialogComponent } from './shipment-request-create-dialog/shipment-request-create-dialog.component';
import { ShipmentRequestDetailDialogComponent } from './shipment-request-detail-dialog/shipment-request-detail-dialog.component';
import { ShipmentRequestUpdateDialogComponent } from './shipment-request-update-dialog/shipment-request-update-dialog.component';
import { ShipmentRequestFragment } from '@kometa/smde/shipment-request/types';
import { ShipmentRequestCancelDialogComponent } from './shipment-request-cancel-dialog/shipment-request-cancel-dialog.component';
import { ShipmentRequestTimelineDialogComponent } from './shipment-request-timeline-dialog/shipment-request-timeline-dialog.component';

@Injectable()
export class ShipmentRequestDialogService {
  constructor(private readonly dialogService: DialogService) {}

  openCreate(): DynamicDialogRef {
    return this.dialogService.open(ShipmentRequestCreateDialogComponent, {
      header: 'Добавить завку на отправку',
      width: '900px',
    });
  }

  openUpdate(request: ShipmentRequestFragment): DynamicDialogRef {
    return this.dialogService.open(ShipmentRequestUpdateDialogComponent, {
      header: 'Изменить завку на отправку',
      width: '500px',
      data: {
        request,
      },
    });
  }

  openDetail(request: ShipmentRequestFragment): DynamicDialogRef {
    return this.dialogService.open(ShipmentRequestDetailDialogComponent, {
      header: 'Завка на отправку',
      width: '900px',
      data: {
        request,
      },
    });
  }

  openCancel(request: ShipmentRequestFragment): DynamicDialogRef {
    return this.dialogService.open(ShipmentRequestCancelDialogComponent, {
      header: 'Отменить',
      width: '500px',
      data: {
        request,
      },
    });
  }

  openTimeline(request: ShipmentRequestFragment): DynamicDialogRef {
    return this.dialogService.open(ShipmentRequestTimelineDialogComponent, {
      header: 'История',
      width: '600px',
      data: {
        request,
      },
    });
  }
}
