import { Component, Input } from '@angular/core';

@Component({
  selector: 'kometa-packing-place-placed-table',
  templateUrl: './packing-place-placed-table.component.html',
  styleUrls: ['./packing-place-placed-table.component.css'],
})
export class PackingPlacePlacedTableComponent {
  @Input()
  placedList: { customerId: string; barcode: string; cellName: string }[] = [];
}
