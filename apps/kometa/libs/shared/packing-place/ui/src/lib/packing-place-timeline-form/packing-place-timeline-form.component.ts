import { Component, Input } from '@angular/core';
import { PackingPlaceStatus } from '@kometa/shared/packing-place/types';
import { getEnumKey } from '@kometa/shared/utils';

@Component({
  selector: 'kometa-packing-place-timeline-form',
  templateUrl: './packing-place-timeline-form.component.html',
  styleUrls: ['./packing-place-timeline-form.component.scss'],
})
export class PackingPlaceTimelineFormComponent {
  @Input()
  changesHistory: { status: PackingPlaceStatus; creationTime?: Date }[] = [];

  getStatus({ status }: { status: PackingPlaceStatus }) {
    return getEnumKey(status, PackingPlaceStatus);
  }
}
