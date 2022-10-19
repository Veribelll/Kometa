import { Component, EventEmitter, Input, Output } from '@angular/core';
import { enumToArray } from '@kometa/shared/utils';
import { EmexTypeBalance, EmexTypePayment } from '@kometa/smde/emex/order/types';
import { CreateEmexProductFormModel } from '../create-emex-product-form.model';
import { TranslocoService } from '@ngneat/transloco';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import {
  PackingPlaceFilterInput,
  PackingPlaceStatus,
  TypeOrder,
} from '@kometa/smde/packing-place/types';

@Component({
  selector: 'kometa-emex-product-create-form',
  templateUrl: './emex-product-create-form.component.html',
  styleUrls: ['./emex-product-create-form.component.scss'],
})
export class EmexProductCreateFormComponent {
  readonly wherePackingPlace: PackingPlaceFilterInput = {
    typeOrder: { eq: TypeOrder.Emex },
    status: { eq: PackingPlaceStatus.Created },
  };
  readonly typesBalance = enumToArray(EmexTypeBalance).map(({ id, name }) => ({
    id,
    name: this.translocoService.translate('EmexTypeBalance:' + name),
  }));
  readonly typesPayment = enumToArray(EmexTypePayment).map(({ id, name }) => ({
    id,
    name: this.translocoService.translate('EmexTypePayment:' + name),
  }));

  @Input()
  formGroup!: TypedFormGroup<CreateEmexProductFormModel>;

  @Output()
  readonly save = new EventEmitter<CreateEmexProductFormModel>();

  @Output()
  readonly cancel = new EventEmitter();

  constructor(private readonly translocoService: TranslocoService) {}

  onSave() {
    if (this.formGroup.valid && this.formGroup.value) {
      const {
        packingPlaceId,
        typeBalance,
        typePayment,
        barcode,
        vendorCode,
        manufacturer,
        name,
        quantity,
        price,
        vat,
        sum,
        manufacturerCountry,
        manufacturerCountryCode,
        marking,
        gtd,
      } = this.formGroup.value;

      this.save.emit({
        packingPlaceId,
        typeBalance,
        typePayment,
        barcode,
        vendorCode,
        manufacturer,
        name,
        quantity,
        price,
        vat,
        sum,
        manufacturerCountry,
        manufacturerCountryCode,
        marking,
        gtd,
      });
    }
  }

  onCancel(): void {
    this.cancel.emit();
  }
}
