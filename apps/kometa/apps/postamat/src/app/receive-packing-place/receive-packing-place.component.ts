import { Component } from '@angular/core';
import { CurrentPostamatService } from '@kometa/postamat/core';

@Component({
  selector: 'kometa-receive-packing-place',
  templateUrl: './receive-packing-place.component.html',
  styleUrls: ['./receive-packing-place.component.scss'],
})
export class ReceivePackingPlaceComponent {
  get postamatId$() {
    return this.currentPostamatService.currentId$;
  }

  constructor(private readonly currentPostamatService: CurrentPostamatService) {}
}
