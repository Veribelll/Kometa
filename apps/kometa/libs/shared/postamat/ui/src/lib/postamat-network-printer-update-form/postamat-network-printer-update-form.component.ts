import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UpdatePostamatNetworkPrinterFormModel } from '../update-postamat-network-printer-form.model';
import { TypedFormGroup } from '@kometa/shared/typed-form';

@Component({
  selector: 'kometa-postamat-network-printer-update-form',
  templateUrl: './postamat-network-printer-update-form.component.html',
  styleUrls: ['./postamat-network-printer-update-form.component.scss'],
})
export class PostamatNetworkPrinterUpdateFormComponent {
  @Input()
  formGroup!: TypedFormGroup<UpdatePostamatNetworkPrinterFormModel>;

  @Output()
  readonly save = new EventEmitter<UpdatePostamatNetworkPrinterFormModel>();

  @Output()
  readonly cancel = new EventEmitter();

  onSave() {
    if (this.formGroup.valid && this.formGroup.value) {
      const { ipAddress, port, reconnectOnTimeout, isEnabled } = this.formGroup.value;
      this.save.emit({ ipAddress, port, reconnectOnTimeout, isEnabled });
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}
