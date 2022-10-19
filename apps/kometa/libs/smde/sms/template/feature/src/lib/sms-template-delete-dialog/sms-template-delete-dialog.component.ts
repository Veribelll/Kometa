import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { GetSmsTemplatesDocument, SmsTemplateFragment } from '@kometa/smde/sms/template/types';
import { DeleteSmsTemplateGQL } from '@kometa/smde/sms/template/data-access';
import { tap } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { finalize } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@UntilDestroy()
@Component({
  selector: 'kometa-sms-template-delete-dialog',
  templateUrl: './sms-template-delete-dialog.component.html',
  styleUrls: ['./sms-template-delete-dialog.component.scss'],
})
export class SmsTemplateDeleteDialogComponent {
  readonly smsTemplate: SmsTemplateFragment;

  constructor(
    private readonly deleteSmsTemplateGQL: DeleteSmsTemplateGQL,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    const { smsTemplate } = this.config.data;

    this.smsTemplate = smsTemplate;
  }

  async onDelete(): Promise<void> {
    const { id } = this.smsTemplate;
    this.deleteSmsTemplateGQL
      .mutate(
        { input: { id } },
        {
          refetchQueries: [GetSmsTemplatesDocument],
        }
      )
      .pipe(
        tap(({ data }) => {
          const result = data?.deleteSmsTemplate?.smsTemplate;
          const errors = data?.deleteSmsTemplate?.errors;

          if (result) {
            this.ref.close(result);
          }

          if (errors) {
            for (const { message } of errors) {
              this.toastrService.error(message);
            }
          }
        }),
        untilDestroyed(this),
        finalize(() => this.spinner.hide())
      )
      .subscribe();
  }

  onCancel(): void {
    this.ref.close();
  }
}
