import { Component } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { SmsTemplateFormService } from '../sms-template-form.service';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { CreateSmsTemplateFormModel } from '@kometa/smde/sms/template/ui';
import { CreateSmsTemplateGQL } from '@kometa/smde/sms/template/data-access';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { tap } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { GetSmsTemplatesDocument } from '@kometa/smde/sms/template/types';

@UntilDestroy()
@Component({
  selector: 'kometa-sms-template-create-dialog',
  templateUrl: './sms-template-create-dialog.component.html',
  styleUrls: ['./sms-template-create-dialog.component.scss'],
})
export class SmsTemplateCreateDialogComponent {
  readonly formGroup: TypedFormGroup<CreateSmsTemplateFormModel>;

  constructor(
    private readonly createSmsTemplateGQL: CreateSmsTemplateGQL,
    private readonly smsTemplateFormService: SmsTemplateFormService,
    private readonly ref: DynamicDialogRef,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    this.formGroup = this.smsTemplateFormService.buildFormCreate();
  }

  async onSave(input: CreateSmsTemplateFormModel): Promise<void> {
    await this.spinner.show();
    this.createSmsTemplateGQL
      .mutate(
        { input },
        {
          refetchQueries: [GetSmsTemplatesDocument],
        }
      )
      .pipe(
        tap(({ data }) => {
          const result = data?.createSmsTemplate?.smsTemplate;
          const errors = data?.createSmsTemplate?.errors;

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
