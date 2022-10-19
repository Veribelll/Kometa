import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TenantFragment } from '@kometa/smde/tenant/types';

@Component({
  selector: 'kometa-tenant-detail-dialog',
  templateUrl: './tenant-detail-dialog.component.html',
  styleUrls: ['./tenant-detail-dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TenantDetailDialogComponent {
  readonly tenant: TenantFragment;

  constructor(
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig
  ) {
    const { tenant } = this.config.data;

    this.tenant = tenant;
  }
}
