import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TenantFragment } from '@kometa/smde/tenant/types';

@Component({
  selector: 'kometa-tenant-detail-form',
  templateUrl: './tenant-detail-form.component.html',
  styleUrls: ['./tenant-detail-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TenantDetailFormComponent {
  @Input()
  tenant?: TenantFragment;
}
