import { Injectable } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { LastMileSmsTemplateDeleteDialogComponent } from './last-mile-sms-template-delete-dialog/last-mile-sms-template-delete-dialog.component';
import { LastMileSmsTemplateUpdateDialogComponent } from './last-mile-sms-template-update-dialog/last-mile-sms-template-update-dialog.component';
import { LastMileSmsTemplateFragment } from '@kometa/smde/last-mile/sms-template/types';
import { LastMileSmsTemplatesPageDialogComponent } from './last-mile-sms-templates-page-dialog/last-mile-sms-templates-page-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class LastMileSmsTemplateDialogService {
  constructor(private readonly dialogService: DialogService) {}

  openPage(lastMileId: string) {
    return this.dialogService.open(LastMileSmsTemplatesPageDialogComponent, {
      header: 'Смс шаблоны',
      width: '1000px',
      data: {
        lastMileId,
      },
    });
  }

  openUpdate(lastMileId: string, smsTemplate: LastMileSmsTemplateFragment) {
    return this.dialogService.open(LastMileSmsTemplateUpdateDialogComponent, {
      header: 'Изменить смс шаблон',
      width: '500px',
      data: {
        lastMileId,
        smsTemplate,
      },
    });
  }

  openDelete(lastMileId: string, smsTemplate: LastMileSmsTemplateFragment) {
    return this.dialogService.open(LastMileSmsTemplateDeleteDialogComponent, {
      header: 'Удалить смс шаблон',
      width: '500px',
      data: {
        lastMileId,
        smsTemplate,
      },
    });
  }
}
