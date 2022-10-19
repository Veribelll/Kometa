import { Component, Input } from '@angular/core';
import { PackingPlaceDetailFragment } from '@kometa/shared/packing-place/types';

@Component({
  selector: 'kometa-packing-place-detail-form',
  templateUrl: './packing-place-detail-form.component.html',
  styleUrls: ['./packing-place-detail-form.component.scss'],
})
export class PackingPlaceDetailFormComponent {
  @Input()
  packingPlace?: PackingPlaceDetailFragment;
}
