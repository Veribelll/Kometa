import { Component, Input } from '@angular/core';
import { PackingPlaceForPlacementFragment } from '@kometa/postamat/placing-packing-place/types';

@Component({
  selector: 'kometa-packing-place-for-placement-table',
  templateUrl: './packing-place-for-placement-table.component.html',
  styleUrls: ['./packing-place-for-placement-table.component.css'],
})
export class PackingPlaceForPlacementTableComponent {
  @Input()
  packingPlaces: PackingPlaceForPlacementFragment[] = [];

  @Input()
  loading = false;
}
