import { Component } from '@angular/core';
import { EmexProductFragment } from '@kometa/smde/emex/order/types';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { UpdateEmexProductFormModel } from '@kometa/smde/emex/order/ui';
import { EmexProductFormService } from '../emex-product-form.service';
import { TypedFormGroup } from '@kometa/shared/typed-form';

@Component({
  selector: 'kometa-emex-product-update-dialog',
  templateUrl: './emex-product-update-dialog.component.html',
  styleUrls: ['./emex-product-update-dialog.component.scss'],
})
export class EmexProductUpdateDialogComponent {
  readonly formGroup: TypedFormGroup<UpdateEmexProductFormModel>;
  readonly product: EmexProductFragment;

  constructor(
    private readonly emexProductFormService: EmexProductFormService,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig
  ) {
    const { product } = this.config.data;

    this.product = product;
    this.formGroup = this.emexProductFormService.buildFormUpdate(this.product);
  }

  onSave(input: UpdateEmexProductFormModel) {
    this.ref.close({ ...this.product, ...input });
  }

  onCancel(): void {
    this.ref.close();
  }
}
