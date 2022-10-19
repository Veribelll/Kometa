import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { EmployeeFragment } from '@kometa/smde/employee/types';

@Component({
  selector: 'kometa-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeTableComponent {
  @Input()
  employees: EmployeeFragment[] = [];

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

  @Input()
  actionButtons = true;

  @Output()
  readonly lazyLoad = new EventEmitter<LazyLoadEvent>();

  @Output()
  readonly details = new EventEmitter<EmployeeFragment>();

  @Output()
  readonly update = new EventEmitter<EmployeeFragment>();

  @Output()
  readonly delete = new EventEmitter<EmployeeFragment>();

  @Output()
  readonly updatePermissions = new EventEmitter<EmployeeFragment>();

  onLazyLoad(event: LazyLoadEvent): void {
    this.lazyLoad.emit(event);
  }

  onDetails(employee: EmployeeFragment): void {
    this.details.emit(employee);
  }

  onUpdate(employee: EmployeeFragment): void {
    this.update.emit(employee);
  }

  onDelete(employee: EmployeeFragment): void {
    this.delete.emit(employee);
  }

  getContractorNames(employee: EmployeeFragment) {
    return employee.contractors?.map((x) => x.name) ?? [];
  }

  getRoleNames(employee: EmployeeFragment) {
    return employee.roles?.map((x) => x.name) ?? [];
  }

  onUpdatePermissions(employee: EmployeeFragment): void {
    this.updatePermissions.emit(employee);
  }
}
