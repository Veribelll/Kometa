import { Component, EventEmitter, Input, Output } from '@angular/core';
import { enumToArray } from '@kometa/shared/utils';
import { EmexTypeBalance, EmexTypePayment } from '@kometa/smde/emex/order/types';
import { TranslocoService } from '@ngneat/transloco';
import { UpdateEmexProductFormModel } from '../update-emex-product-form.model';
import { TypedFormGroup } from '@kometa/shared/typed-form';

@Component({
  selector: 'kometa-emex-product-update-form',
  templateUrl: './emex-product-update-form.component.html',
  styleUrls: ['./emex-product-update-form.component.scss'],
})
export class EmexProductUpdateFormComponent {
  readonly typesBalance = enumToArray(EmexTypeBalance).map(({ id, name }) => ({
    id,
    name: this.translocoService.translate('EmexTypeBalance:' + name),
  }));
  readonly typesPayment = enumToArray(EmexTypePayment).map(({ id, name }) => ({
    id,
    name: this.translocoService.translate('EmexTypePayment:' + name),
  }));

  @Input()
  formGroup!: TypedFormGroup<UpdateEmexProductFormModel>;

  @Output()
  readonly save = new EventEmitter<UpdateEmexProductFormModel>();

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
