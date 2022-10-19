import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { IdentityRoleFragment } from '@kometa/smde/identity-role/types';

@Component({
  selector: 'kometa-identity-role-delete-form',
  templateUrl: './identity-role-delete-form.component.html',
  styleUrls: ['./identity-role-delete-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IdentityRoleDeleteFormComponent {
  @Input()
  identityRole?: IdentityRoleFragment;

  @Output()
  readonly delete = new EventEmitter();

  @Output()
  readonly cancel = new EventEmitter();

  onDelete() {
    this.delete.emit();
  }

  onCancel() {
    this.cancel.emit();
  }
}
