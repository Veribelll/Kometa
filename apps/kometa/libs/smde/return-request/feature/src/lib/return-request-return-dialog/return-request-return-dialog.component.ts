import { Component } from '@angular/core';
import {
  GetReturnRequestsDocument,
  ReturnRequestFragment,
} from '@kometa/smde/return-request/types';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ReturnReturnRequestGQL } from '@kometa/smde/return-request/data-access';
import { finalize, tap } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@UntilDestroy()
@Component({
  selector: 'kometa-return-request-return-dialog',
  templateUrl: './return-request-return-dialog.component.html',
  styleUrls: ['./return-request-return-dialog.component.scss'],
})
export class ReturnRequestReturnDialogComponent {
  readonly request: ReturnRequestFragment;

  constructor(
    private readonly returnReturnRequestGQL: ReturnReturnRequestGQL,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    const { request } = this.config.data;

    this.request = request;
  }

  async onReturn(): Promise<void> {
    await this.spinner.show();
    const { id } = this.request;
    this.returnReturnRequestGQL
      .mutate(
        { input: { id } },
        {
          refetchQueries: [GetReturnRequestsDocument],
        }
      )
      .pipe(
        tap(({ data }) => {
          const result = data?.returnReturnRequest?.returnRequest;
          const errors = data?.returnReturnRequest?.errors;

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
