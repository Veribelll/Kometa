import { Component } from '@angular/core';
import { CurrentPostamatService } from '@kometa/postamat/core';

@Component({
  selector: 'kometa-placing-packing-place',
  templateUrl: './placing-packing-place.component.html',
  styleUrls: ['./placing-packing-place.component.scss'],
})
export class PlacingPackingPlaceComponent {
  get postamatId$() {
    return this.currentPostamatService.currentId$;
  }

  constructor(private readonly currentPostamatService: CurrentPostamatService) {}
}
