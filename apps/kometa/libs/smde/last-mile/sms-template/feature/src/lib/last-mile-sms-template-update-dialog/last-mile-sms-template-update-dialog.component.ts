import { Component } from '@angular/core';
import { TypedFormBuilder, TypedFormGroup } from '@kometa/shared/typed-form';
import { UpdateLastMileSmsTemplateFormModel } from '@kometa/smde/last-mile/sms-template/ui';
import {
  GetLastMileSmsTemplatesDocument,
  LastMileSmsTemplateFragment,
} from '@kometa/smde/last-mile/sms-template/types';
import { UpdateLastMileSmsTemplateGQL } from '@kometa/smde/last-mile/sms-template/data-access';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { finalize, tap } from 'rxjs';

@Component({
  selector: 'kometa-last-mile-sms-template-update-dialog',
  templateUrl: './last-mile-sms-template-update-dialog.component.html',
  styleUrls: ['./last-mile-sms-template-update-dialog.component.scss'],
})
export class LastMileSmsTemplateUpdateDialogComponent {
  readonly formGroup: TypedFormGroup<UpdateLastMileSmsTemplateFormModel>;
  readonly lastMileId: string;
  readonly lastMileSmsTemplate: LastMileSmsTemplateFragment;

  constructor(
    private readonly updateLastMileSmsTemplateGQL: UpdateLastMileSmsTemplateGQL,
    private readonly fb: TypedFormBuilder,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    const { lastMileId, smsTemplate } = this.config.data;

    this.lastMileId = lastMileId;
    this.lastMileSmsTemplate = smsTemplate;
    this.formGroup = this.fb.group<UpdateLastMileSmsTemplateFormModel>({
      smsTemplateId: this.fb.control(this.lastMileSmsTemplate.smsTemplateId),
    });
  }

  async onSave(input: UpdateLastMileSmsTemplateFormModel) {
    await this.spinner.show();

    const { typeOrder, eventType } = this.lastMileSmsTemplate;
    this.updateLastMileSmsTemplateGQL
      .mutate(
        { input: { lastMileId: this.lastMileId, ...input, typeOrder, eventType } },
        {
          refetchQueries: [GetLastMileSmsTemplatesDocument],
        }
      )
      .pipe(
        tap(({ data }) => {
          const result = data?.updateLastMileSmsTemplate?.lastMileSmsTemplate;
          const errors = data?.updateLastMileSmsTemplate?.errors;

          if (result) {
            this.ref.close(result);
          }

          if (errors) {
            for (const { message } of errors) {
              this.toastrService.error(message, 'Ошибка!');
            }
          }
        }),
        finalize(() => this.spinner.hide())
      )
      .subscribe();
  }

  onCancel(): void {
    this.ref.close();
  }
}
