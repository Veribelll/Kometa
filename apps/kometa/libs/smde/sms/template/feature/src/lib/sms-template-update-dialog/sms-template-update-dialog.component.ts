import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { GetSmsTemplatesDocument, SmsTemplateFragment } from '@kometa/smde/sms/template/types';
import { SmsTemplateFormService } from '../sms-template-form.service';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { UpdateSmsTemplateFormModel } from '@kometa/smde/sms/template/ui';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { UpdateSmsTemplateGQL } from '@kometa/smde/sms/template/data-access';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { tap } from 'rxjs';
import { finalize } from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'kometa-sms-template-update-dialog',
  templateUrl: './sms-template-update-dialog.component.html',
  styleUrls: ['./sms-template-update-dialog.component.scss'],
})
export class SmsTemplateUpdateDialogComponent {
  readonly formGroup: TypedFormGroup<UpdateSmsTemplateFormModel>;
  readonly smsTemplate: SmsTemplateFragment;

  constructor(
    private readonly updateSmsTemplateGQL: UpdateSmsTemplateGQL,
    private readonly smsTemplateFormService: SmsTemplateFormService,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    const { smsTemplate } = this.config.data;

    this.smsTemplate = smsTemplate;
    this.formGroup = this.smsTemplateFormService.buildFormUpdate(this.smsTemplate);
  }

  async onSave(input: UpdateSmsTemplateFormModel): Promise<void> {
    const { id } = this.smsTemplate;
    this.updateSmsTemplateGQL
      .mutate(
        { input: { ...input, id } },
        {
          refetchQueries: [GetSmsTemplatesDocument],
        }
      )
      .pipe(
        tap(({ data }) => {
          const result = data?.updateSmsTemplate?.smsTemplate;
          const errors = data?.updateSmsTemplate?.errors;

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
