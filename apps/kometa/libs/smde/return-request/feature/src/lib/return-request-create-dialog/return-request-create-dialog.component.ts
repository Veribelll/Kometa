import { Component } from '@angular/core';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { CreateReturnRequestFormModel } from '@kometa/smde/return-request/ui';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { ReturnRequestFormService } from '../return-request-form.service';
import { PackingPlaceDialogService } from '@kometa/smde/packing-place/feature';
import { tap } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { CreateReturnRequestGQL } from '@kometa/smde/return-request/data-access';
import { GetReturnRequestsDocument } from '@kometa/smde/return-request/types';
import { finalize } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@UntilDestroy()
@Component({
  selector: 'kometa-return-request-create-dialog',
  templateUrl: './return-request-create-dialog.component.html',
  styleUrls: ['./return-request-create-dialog.component.scss'],
  providers: [PackingPlaceDialogService],
})
export class ReturnRequestCreateDialogComponent {
  readonly formGroup: TypedFormGroup<CreateReturnRequestFormModel>;

  constructor(
    private readonly createReturnRequestGQL: CreateReturnRequestGQL,
    private readonly returnRequestFormService: ReturnRequestFormService,
    private readonly packingPlaceDialogService: PackingPlaceDialogService,
    private readonly ref: DynamicDialogRef,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    this.formGroup = this.returnRequestFormService.buildFormCreate();
  }

  async onSave(input: CreateReturnRequestFormModel): Promise<void> {
    await this.spinner.show();
    this.createReturnRequestGQL
      .mutate(
        { input },
        {
          refetchQueries: [GetReturnRequestsDocument],
        }
      )
      .pipe(
        tap(({ data }) => {
          const result = data?.createReturnRequest?.returnRequest;
          const errors = data?.createReturnRequest?.errors;

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
