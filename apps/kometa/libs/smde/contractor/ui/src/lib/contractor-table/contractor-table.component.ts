import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { ContractorFragment } from '@kometa/smde/contractor/types';

@Component({
  selector: 'kometa-contractor-table',
  templateUrl: './contractor-table.component.html',
  styleUrls: ['./contractor-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContractorTableComponent {
  @Input()
  contractors: ContractorFragment[] = [];

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
  readonly details = new EventEmitter<ContractorFragment>();

  @Output()
  readonly update = new EventEmitter<ContractorFragment>();

  @Output()
  readonly delete = new EventEmitter<ContractorFragment>();

  onLazyLoad(event: LazyLoadEvent): void {
    this.lazyLoad.emit(event);
  }

  onDetails(contractor: ContractorFragment): void {
    this.details.emit(contractor);
  }

  onUpdate(contractor: ContractorFragment): void {
    this.update.emit(contractor);
  }

  onDelete(contractor: ContractorFragment): void {
    this.delete.emit(contractor);
  }
}
