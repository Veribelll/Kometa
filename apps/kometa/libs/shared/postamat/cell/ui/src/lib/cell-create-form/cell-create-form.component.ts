import { Component, EventEmitter, Input, Output } from '@angular/core';
import { enumToArray } from '@kometa/shared/utils';
import { TypeCell } from '@kometa/smde/postamat/types';
import { CreateCellFormModel } from '../create-cell-form.model';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'kometa-cell-create-form',
  templateUrl: './cell-create-form.component.html',
  styleUrls: ['./cell-create-form.component.scss'],
})
export class CellCreateFormComponent {
  readonly typesCell = enumToArray(TypeCell).map(({ id, name }) => ({
    id,
    name: this.translocoService.translate('TypeCell:' + name),
  }));

  @Input()
  formGroup!: TypedFormGroup<CreateCellFormModel>;

  @Output()
  readonly save = new EventEmitter<CreateCellFormModel>();

  @Output()
  readonly cancel = new EventEmitter();

  constructor(private readonly translocoService: TranslocoService) {}

  onSave() {
    if (this.formGroup.valid && this.formGroup.value) {
      const { typeCell, name, barcode } = this.formGroup.value;

      this.save.emit({
        typeCell,
        name,
        barcode,
      });
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}
