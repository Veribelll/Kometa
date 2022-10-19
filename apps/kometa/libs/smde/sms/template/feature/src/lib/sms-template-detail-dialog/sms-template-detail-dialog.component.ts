import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { SmsTemplateFragment } from '@kometa/smde/sms/template/types';

@Component({
  selector: 'kometa-sms-template-detail-dialog',
  templateUrl: './sms-template-detail-dialog.component.html',
  styleUrls: ['./sms-template-detail-dialog.component.scss'],
})
export class SmsTemplateDetailDialogComponent {
  readonly smsTemplate: SmsTemplateFragment;

  constructor(
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig
  ) {
    const { smsTemplate } = this.config.data;

    this.smsTemplate = smsTemplate;
  }
}
