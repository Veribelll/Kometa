import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { TenantFragment } from '@kometa/smde/tenant/types';

@Component({
  selector: 'kometa-tenant-table',
  templateUrl: './tenant-table.component.html',
  styleUrls: ['./tenant-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TenantTableComponent {
  @Input()
  tenants: TenantFragment[] = [];

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
  readonly details = new EventEmitter<TenantFragment>();

  @Output()
  readonly update = new EventEmitter<TenantFragment>();

  @Output()
  readonly delete = new EventEmitter<TenantFragment>();

  onLazyLoad(event: LazyLoadEvent): void {
    this.lazyLoad.emit(event);
  }

  onDetails(tenant: TenantFragment): void {
    this.details.emit(tenant);
  }

  onUpdate(tenant: TenantFragment): void {
    this.update.emit(tenant);
  }

  onDelete(tenant: TenantFragment): void {
    this.delete.emit(tenant);
  }
}
