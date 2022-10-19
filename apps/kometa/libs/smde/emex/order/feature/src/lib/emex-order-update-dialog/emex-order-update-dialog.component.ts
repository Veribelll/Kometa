import { Component } from '@angular/core';
import { EmexOrderFragment, GetEmexOrdersDocument } from '@kometa/smde/emex/order/types';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { UpdateEmexOrderFormModel } from '@kometa/smde/emex/order/ui';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EmexOrderFormService } from '../emex-order-form.service';
import { UpdateEmexOrderGQL } from '@kometa/smde/emex/order/data-access';
import { finalize, tap } from 'rxjs/operators';
import { untilDestroyed } from '@ngneat/until-destroy';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'kometa-emex-order-update-dialog',
  templateUrl: './emex-order-update-dialog.component.html',
  styleUrls: ['./emex-order-update-dialog.component.scss'],
})
export class EmexOrderUpdateDialogComponent {
  readonly formGroup: TypedFormGroup<UpdateEmexOrderFormModel>;
  readonly order: EmexOrderFragment;

  constructor(
    private readonly updateEmexOrderGQL: UpdateEmexOrderGQL,
    private readonly emexOrderFormService: EmexOrderFormService,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    const { order } = this.config.data;
    this.order = order;
    this.formGroup = this.emexOrderFormService.buildFormUpdate(this.order);
  }

  async onSave(input: UpdateEmexOrderFormModel) {
    await this.spinner.show();
    const { id } = this.order;
    this.updateEmexOrderGQL
      .mutate(
        { input: { ...input, id } },
        {
          refetchQueries: [GetEmexOrdersDocument],
        }
      )
      .pipe(
        tap(({ data }) => {
          const result = data?.updateEmexOrder?.emexOrder;
          const errors = data?.updateEmexOrder?.errors;

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
