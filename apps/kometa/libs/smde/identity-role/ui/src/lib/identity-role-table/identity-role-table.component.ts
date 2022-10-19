import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { IdentityRoleFragment } from '@kometa/smde/identity-role/types';

@Component({
  selector: 'kometa-identity-role-table',
  templateUrl: './identity-role-table.component.html',
  styleUrls: ['./identity-role-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IdentityRoleTableComponent {
  @Input()
  identityRoles: IdentityRoleFragment[] = [];

  @Input()
  loading = false;

  @Input()
  totalRecords = 0;

  @Input()
  permissionDetails = '';

  @Input()
  permissionUpdate = '';

  @Input()
  permissionDelete = '';

  @Output()
  readonly lazyLoad = new EventEmitter<LazyLoadEvent>();

  @Output()
  readonly details = new EventEmitter<IdentityRoleFragment>();

  @Output()
  readonly update = new EventEmitter<IdentityRoleFragment>();

  @Output()
  readonly delete = new EventEmitter<IdentityRoleFragment>();

  @Output()
  readonly updatePermissions = new EventEmitter<IdentityRoleFragment>();

  onLazyLoad(event: LazyLoadEvent): void {
    this.lazyLoad.emit(event);
  }

  onDetails(identityRole: IdentityRoleFragment): void {
    this.details.emit(identityRole);
  }

  onUpdate(identityRole: IdentityRoleFragment): void {
    this.update.emit(identityRole);
  }

  onDelete(identityRole: IdentityRoleFragment): void {
    this.delete.emit(identityRole);
  }

  onUpdatePermissions(identityRole: IdentityRoleFragment): void {
    this.updatePermissions.emit(identityRole);
  }
}
