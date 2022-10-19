import { Component } from '@angular/core';
import { SendNewPinCodeGQL } from '@kometa/postamat/receive-packing-place/data-access';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { finalize, tap } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'kometa-send-new-pin-code-dialog',
  templateUrl: './send-new-pin-code-dialog.component.html',
  styleUrls: ['./send-new-pin-code-dialog.component.scss'],
})
export class SendNewPinCodeDialogComponent {
  readonly postamatId: string;

  phone = '';

  constructor(
    private readonly sendNewPinCodeGQL: SendNewPinCodeGQL,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    const { postamatId } = this.config.data;

    this.postamatId = postamatId;
  }

  async onSend() {
    await this.spinner.show();

    this.sendNewPinCodeGQL
      .mutate({
        input: {
          postamatId: this.postamatId,
          phone: this.phone,
        },
      })
      .pipe(
        tap(({ data }) => {
          const result = data?.postamatSendNewPinCode?.result;
          const errors = data?.postamatSendNewPinCode?.errors;

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

  onCancel() {
    this.ref.close();
  }
}
