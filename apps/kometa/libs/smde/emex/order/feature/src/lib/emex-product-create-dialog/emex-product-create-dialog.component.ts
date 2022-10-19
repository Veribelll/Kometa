import { Component } from '@angular/core';
import { CreateEmexProductFormModel } from '@kometa/smde/emex/order/ui';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { EmexProductFormService } from '../emex-product-form.service';
import { UntilDestroy } from '@ngneat/until-destroy';
import { EmexProductFragment, EmexProductStatus } from '@kometa/smde/emex/order/types';

@UntilDestroy()
@Component({
  selector: 'kometa-emex-product-create-dialog',
  templateUrl: './emex-product-create-dialog.component.html',
  styleUrls: ['./emex-product-create-dialog.component.scss'],
})
export class EmexProductCreateDialogComponent {
  readonly formGroup: TypedFormGroup<CreateEmexProductFormModel>;

  constructor(
    private readonly emexProductFormService: EmexProductFormService,
    private readonly ref: DynamicDialogRef
  ) {
    this.formGroup = this.emexProductFormService.buildFormCreate();
  }

  async onSave(input: CreateEmexProductFormModel) {
    const product: EmexProductFragment = {
      id: Math.random().toString(16),
      status: EmexProductStatus.Created,
      ...input,
    };
    this.ref.close(product);
  }

  onCancel() {
    this.ref.close();
  }
}
