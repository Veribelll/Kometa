import { Component } from '@angular/core';
import {
  GetReturnRequestsDocument,
  ReturnRequestFragment,
} from '@kometa/smde/return-request/types';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CancelReturnRequestGQL } from '@kometa/smde/return-request/data-access';
import { finalize, tap } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@UntilDestroy()
@Component({
  selector: 'kometa-return-request-cancel-dialog',
  templateUrl: './return-request-cancel-dialog.component.html',
  styleUrls: ['./return-request-cancel-dialog.component.scss'],
})
export class ReturnRequestCancelDialogComponent {
  readonly request: ReturnRequestFragment;

  constructor(
    private readonly cancelReturnRequestGQL: CancelReturnRequestGQL,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    const { request } = this.config.data;

    this.request = request;
  }

  async onDelete(): Promise<void> {
    await this.spinner.show();
    const { id } = this.request;
    this.cancelReturnRequestGQL
      .mutate(
        { input: { id } },
        {
          refetchQueries: [GetReturnRequestsDocument],
        }
      )
      .pipe(
        tap(({ data }) => {
          const result = data?.cancelReturnRequest?.returnRequest;
          const errors = data?.cancelReturnRequest?.errors;

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
