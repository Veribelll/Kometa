import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PrimeNgSelectionMode } from '@kometa/shared/primeng/ui-table';
import { LazyLoadEvent } from 'primeng/api';
import { GetEmployeesForSelectQuery } from '@kometa/shared/employee/types';

type Employee = NonNullable<NonNullable<GetEmployeesForSelectQuery['employees']>['items']>[0];
type SelectedType = Employee | Employee[];

@Component({
  selector: 'kometa-employee-select-table',
  templateUrl: './employee-select-table.component.html',
  styleUrls: ['./employee-select-table.component.scss'],
})
export class EmployeeSelectTableComponent {
  @Input()
  employees: Employee[] = [];

  @Input()
  loading = false;

  @Input()
  totalRecords = 0;

  @Input()
  selected?: SelectedType;

  @Input()
  selectionMode: PrimeNgSelectionMode = 'single';

  @Output()
  readonly lazyLoad = new EventEmitter<LazyLoadEvent>();

  @Output()
  readonly details = new EventEmitter<Employee>();

  @Output()
  readonly selectedChange = new EventEmitter<SelectedType>();

  onLazyLoad(event: LazyLoadEvent): void {
    this.lazyLoad.emit(event);
  }

  onDetails(employee: Employee): void {
    this.details.emit(employee);
  }

  onSelectedChange(selected: SelectedType) {
    this.selectedChange.emit(selected);
  }
}
