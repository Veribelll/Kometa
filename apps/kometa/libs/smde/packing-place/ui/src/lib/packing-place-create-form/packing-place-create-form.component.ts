import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { CreatePackingPlaceFormModel } from '../create-packing-place-form.model';
import { enumToArray } from '@kometa/shared/utils';
import { TypeOrder } from '@kometa/smde/packing-place/types';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'kometa-packing-place-create-form',
  templateUrl: './packing-place-create-form.component.html',
  styleUrls: ['./packing-place-create-form.component.scss'],
})
export class PackingPlaceCreateFormComponent implements OnInit {
  readonly typesOrder = enumToArray(TypeOrder).map(({ id, name }) => ({
    id,
    name: this.translocoService.translate('TypeOrder:' + name),
  }));

  @Input()
  formGroup!: TypedFormGroup<CreatePackingPlaceFormModel>;

  @Input()
  typeOrder?: TypeOrder;

  @Input()
  sizes: { id: string; name: string }[] = [];

  @Output()
  readonly save = new EventEmitter<CreatePackingPlaceFormModel>();

  @Output()
  readonly cancel = new EventEmitter();

  constructor(private readonly translocoService: TranslocoService) {}

  ngOnInit() {
    if (this.typeOrder) {
      this.formGroup.get('typeOrder').setValue(this.typeOrder);
      this.formGroup.get('typeOrder').disable();
    }
  }

  onSave() {
    if (this.formGroup.valid && this.formGroup.value) {
      const { typeOrder, barcode, lastMileId, courierId, sizeId } = this.formGroup.value;

      this.save.emit({
        typeOrder: typeOrder ?? this.typeOrder,
        barcode,
        lastMileId,
        courierId,
        sizeId,
      });
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}
