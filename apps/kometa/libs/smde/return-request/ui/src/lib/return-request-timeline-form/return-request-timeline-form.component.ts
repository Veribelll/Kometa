import { Component, Input } from '@angular/core';
import { ReturnRequestFragment, ReturnRequestStatus } from '@kometa/smde/return-request/types';
import { getEnumKey } from '@kometa/shared/utils';

@Component({
  selector: 'kometa-return-request-timeline-form',
  templateUrl: './return-request-timeline-form.component.html',
  styleUrls: ['./return-request-timeline-form.component.scss'],
})
export class ReturnRequestTimelineFormComponent {
  @Input()
  request?: ReturnRequestFragment;

  get changesHistory() {
    return this.request?.changesHistory ?? [];
  }

  getStatus(request: ReturnRequestFragment) {
    return getEnumKey(request.status, ReturnRequestStatus);
  }
}
