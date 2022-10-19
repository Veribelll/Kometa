import { Component } from '@angular/core';
import {
  GetLastMileSmsTemplatesDocument,
  LastMileSmsTemplateFragment,
} from '@kometa/smde/last-mile/sms-template/types';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { finalize, tap } from 'rxjs';
import { DeleteLastMileSmsTemplateGQL } from '@kometa/smde/last-mile/sms-template/data-access';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'kometa-last-mile-sms-template-delete-dialog',
  templateUrl: './last-mile-sms-template-delete-dialog.component.html',
  styleUrls: ['./last-mile-sms-template-delete-dialog.component.scss'],
})
export class LastMileSmsTemplateDeleteDialogComponent {
  readonly lastMileId: string;
  readonly lastMileSmsTemplate: LastMileSmsTemplateFragment;

  constructor(
    private readonly deleteLastMileSmsTemplateGQL: DeleteLastMileSmsTemplateGQL,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    const { lastMileId, smsTemplate } = this.config.data;

    this.lastMileId = lastMileId;
    this.lastMileSmsTemplate = smsTemplate;
  }

  async onDelete(): Promise<void> {
    const { typeOrder, eventType } = this.lastMileSmsTemplate;
    await this.spinner.show();

    await this.deleteLastMileSmsTemplateGQL
      .mutate(
        { input: { lastMileId: this.lastMileId, typeOrder, eventType } },
        {
          refetchQueries: [GetLastMileSmsTemplatesDocument],
        }
      )
      .pipe(
        tap(({ data }) => {
          const result = data?.deleteLastMileSmsTemplate?.lastMileSmsTemplate;
          const errors = data?.deleteLastMileSmsTemplate?.errors;

          if (result) {
            this.ref.close(result);
          }

          if (errors) {
            for (const { message } of errors) {
              this.toastrService.error(message, 'Ошибка!');
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
