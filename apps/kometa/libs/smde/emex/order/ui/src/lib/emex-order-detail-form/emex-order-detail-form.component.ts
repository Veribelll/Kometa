import { Component, Input } from '@angular/core';
import { EmexOrderFragment } from '@kometa/smde/emex/order/types';

@Component({
  selector: 'kometa-emex-order-detail-form',
  templateUrl: './emex-order-detail-form.component.html',
  styleUrls: ['./emex-order-detail-form.component.scss'],
})
export class EmexOrderDetailFormComponent {
  @Input()
  order?: EmexOrderFragment;
}
