import { Injectable } from '@angular/core';
import { TypedFormBuilder } from '@kometa/shared/typed-form';
import {
  CreateEmexProductFormModel,
  UpdateEmexProductFormModel,
} from '@kometa/smde/emex/order/ui';
import { Validators } from '@angular/forms';
import { EmexProductFragment } from '@kometa/smde/emex/order/types';

@Injectable({
  providedIn: 'any',
})
export class EmexProductFormService {
  constructor(private readonly fb: TypedFormBuilder) {}

  buildFormCreate() {
    return this.fb.group<CreateEmexProductFormModel>({
      packingPlaceId: this.fb.control('', [Validators.required]),
      typeBalance: this.fb.control(null, [Validators.required]),
      typePayment: this.fb.control(null, [Validators.required]),
      barcode: this.fb.control(''),
      vendorCode: this.fb.control('', [Validators.required]),
      manufacturer: this.fb.control('', [Validators.required]),
      name: this.fb.control('', [Validators.required]),
      quantity: this.fb.control(null, [Validators.required]),
      price: this.fb.control(null, [Validators.required]),
      vat: this.fb.control(null, [Validators.required]),
      sum: this.fb.control(null, [Validators.required]),
      manufacturerCountry: this.fb.control(null),
      manufacturerCountryCode: this.fb.control(null),
      marking: this.fb.control(null),
      gtd: this.fb.control(null),
    });
  }

  buildFormUpdate({
    packingPlace,
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
  }: EmexProductFragment) {
    return this.fb.group<UpdateEmexProductFormModel>({
      packingPlaceId: this.fb.control(packingPlace?.id ?? null, [Validators.required]),
      typeBalance: this.fb.control(typeBalance, [Validators.required]),
      typePayment: this.fb.control(typePayment, [Validators.required]),
      barcode: this.fb.control(barcode),
      vendorCode: this.fb.control(vendorCode, [Validators.required]),
      manufacturer: this.fb.control(manufacturer, [Validators.required]),
      name: this.fb.control(name, [Validators.required]),
      quantity: this.fb.control(quantity, [Validators.required]),
      price: this.fb.control(price, [Validators.required]),
      vat: this.fb.control(vat, [Validators.required]),
      sum: this.fb.control(sum, [Validators.required]),
      manufacturerCountry: this.fb.control(manufacturerCountry),
      manufacturerCountryCode: this.fb.control(manufacturerCountryCode),
      marking: this.fb.control(marking),
      gtd: this.fb.control(gtd),
    });
  }
}
