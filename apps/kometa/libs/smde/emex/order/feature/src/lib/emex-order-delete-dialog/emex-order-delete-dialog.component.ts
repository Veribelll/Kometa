import { Component } from '@angular/core';
import { EmexOrderFragment, GetEmexOrdersDocument } from '@kometa/smde/emex/order/types';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DeleteEmexOrderGQL } from '@kometa/smde/emex/order/data-access';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { finalize, tap } from 'rxjs/operators';
import { untilDestroyed } from '@ngneat/until-destroy';

@Component({
  selector: 'kometa-emex-order-delete-dialog',
  templateUrl: './emex-order-delete-dialog.component.html',
  styleUrls: ['./emex-order-delete-dialog.component.scss'],
})
export class EmexOrderDeleteDialogComponent {
  readonly order: EmexOrderFragment;

  constructor(
    private readonly deleteEmexOrderGQL: DeleteEmexOrderGQL,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    const { order } = this.config.data;
    this.order = order;
  }

  async onDelete() {
    await this.spinner.show();
    const { id } = this.order;
    this.deleteEmexOrderGQL
      .mutate(
        { input: { id } },
        {
          refetchQueries: [GetEmexOrdersDocument],
        }
      )
      .pipe(
        tap(({ data }) => {
          const result = data?.deleteEmexOrder?.emexOrder;
          const errors = data?.deleteEmexOrder?.errors;

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
