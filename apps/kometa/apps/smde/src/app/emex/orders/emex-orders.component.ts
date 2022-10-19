import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'kometa-emex-orders',
  templateUrl: './emex-orders.component.html',
  styleUrls: ['./emex-orders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmexOrdersComponent {}
