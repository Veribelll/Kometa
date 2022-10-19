import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IdentityRoleFragment } from '@kometa/smde/identity-role/types';

@Component({
  selector: 'kometa-identity-role-detail-form',
  templateUrl: './identity-role-detail-form.component.html',
  styleUrls: ['./identity-role-detail-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IdentityRoleDetailFormComponent {
  @Input()
  identityRole?: IdentityRoleFragment;
}
