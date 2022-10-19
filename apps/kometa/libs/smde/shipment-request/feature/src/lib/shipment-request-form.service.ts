import { Injectable } from '@angular/core';
import { ShipmentRequestIsNameUniqueGQL } from '@kometa/smde/shipment-request/data-access';
import { TypedFormBuilder } from '@kometa/shared/typed-form';
import {
  CreateShipmentRequestFormModel,
  UpdateShipmentRequestFormModel,
} from '@kometa/smde/shipment-request/ui';
import { AsyncValidatorFn, Validators } from '@angular/forms';
import { ShipmentRequestFragment } from '@kometa/smde/shipment-request/types';
import { asyncFormValidIsUnique } from '@kometa/shared/utils';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'any',
})
export class ShipmentRequestFormService {
  constructor(
    private readonly fb: TypedFormBuilder,
    private readonly isCodeUniqueGQL: ShipmentRequestIsNameUniqueGQL
  ) {}

  buildFormCreate() {
    return this.fb.group<CreateShipmentRequestFormModel>({
      code: this.fb.control('', [Validators.required], [this.isCodeUnique()]),
      packingPlaceIds: this.fb.control([], [Validators.required]),
      lastMileId: this.fb.control('', [Validators.required]),
      courierId: this.fb.control('', [Validators.required]),
      cause: this.fb.control('', [Validators.required]),
      comment: this.fb.control(null),
    });
  }

  buildFormUpdate({ courierId, comment }: ShipmentRequestFragment) {
    return this.fb.group<UpdateShipmentRequestFormModel>({
      courierId: this.fb.control(courierId, [Validators.required]),
      comment: this.fb.control(comment),
    });
  }

  private isCodeUnique(): AsyncValidatorFn {
    return (control) => {
      const sub = this.isCodeUniqueGQL
        .fetch({ code: control.value })
        .pipe(map(({ data }) => data.shipmentRequestsAny));
      return asyncFormValidIsUnique(control, sub);
    };
  }
}
