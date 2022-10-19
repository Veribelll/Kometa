import { Component } from '@angular/core';
import { UpdateReturnRequestFormModel } from '@kometa/smde/return-request/ui';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { tap } from 'rxjs';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { ReturnRequestFormService } from '../return-request-form.service';
import {
  GetReturnRequestsDocument,
  ReturnRequestFragment,
} from '@kometa/smde/return-request/types';
import { UpdateReturnRequestGQL } from '@kometa/smde/return-request/data-access';
import { finalize } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@UntilDestroy()
@Component({
  selector: 'kometa-return-request-update-dialog',
  templateUrl: './return-request-update-dialog.component.html',
  styleUrls: ['./return-request-update-dialog.component.scss'],
})
export class ReturnRequestUpdateDialogComponent {
  readonly formGroup: TypedFormGroup<UpdateReturnRequestFormModel>;
  readonly request: ReturnRequestFragment;

  constructor(
    private readonly updateReturnRequestGQL: UpdateReturnRequestGQL,
    private readonly returnRequestFormService: ReturnRequestFormService,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    const { request } = this.config.data;

    this.request = request;
    this.formGroup = this.returnRequestFormService.buildFormUpdate(this.request);
  }

  async onSave(input: UpdateReturnRequestFormModel): Promise<void> {
    await this.spinner.show();
    const { id } = this.request;
    this.updateReturnRequestGQL
      .mutate(
        { input: { ...input, id } },
        {
          refetchQueries: [GetReturnRequestsDocument],
        }
      )
      .pipe(
        tap(({ data }) => {
          const result = data?.updateReturnRequest?.returnRequest;
          const errors = data?.updateReturnRequest?.errors;

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
