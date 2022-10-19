import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { SmsTemplateCreateDialogComponent } from './sms-template-create-dialog/sms-template-create-dialog.component';
import { SmsTemplateDeleteDialogComponent } from './sms-template-delete-dialog/sms-template-delete-dialog.component';
import { SmsTemplateDetailDialogComponent } from './sms-template-detail-dialog/sms-template-detail-dialog.component';
import { SmsTemplateUpdateDialogComponent } from './sms-template-update-dialog/sms-template-update-dialog.component';
import { SmsTemplateFragment } from '@kometa/smde/sms/template/types';

@Injectable()
export class SmsTemplateDialogService {
  constructor(private readonly dialogService: DialogService) {}

  openCreate(): DynamicDialogRef {
    return this.dialogService.open(SmsTemplateCreateDialogComponent, {
      header: 'Добавить смс шаблон',
      width: '800px',
    });
  }

  openUpdate(smsTemplate: SmsTemplateFragment): DynamicDialogRef {
    return this.dialogService.open(SmsTemplateUpdateDialogComponent, {
      header: 'Изменить смс шаблон',
      width: '800px',
      data: {
        smsTemplate,
      },
    });
  }

  openDetail(smsTemplate: SmsTemplateFragment): DynamicDialogRef {
    return this.dialogService.open(SmsTemplateDetailDialogComponent, {
      header: 'Смс шаблон',
      width: '500px',
      data: {
        smsTemplate,
      },
    });
  }

  openDelete(smsTemplate: SmsTemplateFragment): DynamicDialogRef {
    return this.dialogService.open(SmsTemplateDeleteDialogComponent, {
      header: 'Удалить',
      width: '500px',
      data: {
        smsTemplate,
      },
    });
  }
}
