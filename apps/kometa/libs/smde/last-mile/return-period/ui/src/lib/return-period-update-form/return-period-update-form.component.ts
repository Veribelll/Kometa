import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { TranslocoService } from '@ngneat/transloco';
import { enumToArray } from '@kometa/shared/utils';
import { UpdateReturnPeriodFormModel } from '../update-return-period-form.model';
import { TypeOrder } from '@kometa/smde/last-mile/return-period/types';

@Component({
  selector: 'kometa-return-period-update-form',
  templateUrl: './return-period-update-form.component.html',
  styleUrls: ['./return-period-update-form.component.scss']
})
export class ReturnPeriodUpdateFormComponent implements OnInit {
  readonly typesOrder = enumToArray(TypeOrder).map(({ id, name }) => ({
    id,
    name: this.translocoService.translate('TypeOrder:' + name),
  }));

  @Input()
  formGroup!: TypedFormGroup<UpdateReturnPeriodFormModel>;

  @Input()
  typeOrder?: TypeOrder;

  @Output()
  readonly save = new EventEmitter<UpdateReturnPeriodFormModel>();

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
