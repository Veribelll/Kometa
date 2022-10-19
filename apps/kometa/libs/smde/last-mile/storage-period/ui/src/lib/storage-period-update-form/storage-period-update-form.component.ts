import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { UpdateStoragePeriodFormModel } from '../update-storage-period-form.model';
import { TypeOrder } from '@kometa/smde/last-mile/storage-period/types';
import { enumToArray } from '@kometa/shared/utils';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'kometa-storage-period-update-form',
  templateUrl: './storage-period-update-form.component.html',
  styleUrls: ['./storage-period-update-form.component.scss'],
})
export class StoragePeriodUpdateFormComponent implements OnInit {
  readonly typesOrder = enumToArray(TypeOrder).map(({ id, name }) => ({
    id,
    name: this.translocoService.translate('TypeOrder:' + name),
  }));

  @Input()
  formGroup!: TypedFormGroup<UpdateStoragePeriodFormModel>;

  @Input()
  typeOrder?: TypeOrder;

  @Output()
  readonly save = new EventEmitter<UpdateStoragePeriodFormModel>();

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
      const { typeOrder, period } = this.formGroup.value;

      this.save.emit({
        typeOrder: typeOrder ?? this.typeOrder,
        period,
      });
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}
