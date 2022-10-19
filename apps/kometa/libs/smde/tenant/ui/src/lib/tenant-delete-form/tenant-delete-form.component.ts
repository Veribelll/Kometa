import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { TenantFragment } from '@kometa/smde/tenant/types';

@Component({
  selector: 'kometa-tenant-delete-form',
  templateUrl: './tenant-delete-form.component.html',
  styleUrls: ['./tenant-delete-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TenantDeleteFormComponent {
  @Input()
  tenant?: TenantFragment;

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
