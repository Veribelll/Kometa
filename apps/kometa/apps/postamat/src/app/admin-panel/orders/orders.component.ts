import { Component } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { CurrentPostamatService } from '@kometa/postamat/core';

@UntilDestroy()
@Component({
  selector: 'kometa-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent {
  get postamatId$() {
    return this.currentPostamatService.currentId$;
  }

  constructor(private readonly currentPostamatService: CurrentPostamatService) {}
}
