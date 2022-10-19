import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { IdentityRoleFragment } from '@kometa/smde/identity-role/types';

@Component({
  selector: 'kometa-identity-role-detail-dialog',
  templateUrl: './identity-role-detail-dialog.component.html',
  styleUrls: ['./identity-role-detail-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IdentityRoleDetailDialogComponent {
  readonly identityRole: IdentityRoleFragment;

  constructor(
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig
  ) {
    const { identityRole } = this.config.data;

    this.identityRole = identityRole;
  }
}
