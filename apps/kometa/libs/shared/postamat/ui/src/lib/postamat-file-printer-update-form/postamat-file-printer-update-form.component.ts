import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UpdatePostamatFilePrinterFormModel } from '../update-postamat-file-printer-form.model';
import { TypedFormGroup } from '@kometa/shared/typed-form';

@Component({
  selector: 'kometa-postamat-file-printer-update-form',
  templateUrl: './postamat-file-printer-update-form.component.html',
  styleUrls: ['./postamat-file-printer-update-form.component.scss'],
})
export class PostamatFilePrinterUpdateFormComponent {
  @Input()
  formGroup!: TypedFormGroup<UpdatePostamatFilePrinterFormModel>;

  @Output()
  readonly save = new EventEmitter<UpdatePostamatFilePrinterFormModel>();

  @Output()
  readonly cancel = new EventEmitter();

  onSave() {
    if (this.formGroup.valid && this.formGroup.value) {
      const { filePath, isEnabled } = this.formGroup.value;
      this.save.emit({ filePath, isEnabled });
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}
