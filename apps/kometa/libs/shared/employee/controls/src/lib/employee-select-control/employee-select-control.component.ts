import { Component, InjectFlags, Injector, Input, OnInit } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { QueryRef } from 'apollo-angular';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import { PrimeNgSelectionMode } from '@kometa/shared/primeng/ui-table';
import { isArray, isEmpty } from 'lodash';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { LazyLoadEvent } from 'primeng/api';
import { FioPipe } from '@kometa/shared/employee/ui';
import {
  GetEmployeesForSelectQuery,
  GetEmployeesForSelectQueryVariables,
  IdOperationFilterInput,
  IdentityUserFilterInput,
  SortEnumType,
} from '@kometa/shared/employee/types';
import { GetEmployeesForSelectGQL } from '@kometa/shared/employee/data-access';

type Employee = NonNullable<NonNullable<GetEmployeesForSelectQuery['employees']>['items']>[0];

@UntilDestroy()
@Component({
  selector: 'kometa-employee-select-control',
  templateUrl: './employee-select-control.component.html',
  styleUrls: ['./employee-select-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: EmployeeSelectControlComponent,
      multi: true,
    },
    FioPipe,
  ],
})
export class EmployeeSelectControlComponent implements OnInit, ControlValueAccessor {
  readonly employees$ = new BehaviorSubject<Employee[]>([]);
  readonly totalRecords$ = new BehaviorSubject<number>(0);
  readonly loading$ = new BehaviorSubject<boolean>(false);
  queryRef?: QueryRef<GetEmployeesForSelectQuery, GetEmployeesForSelectQueryVariables>;

  open = false;
  selected?: Employee | Employee[];
  ngControl?: NgControl | null;
  touched = false;
  disabled = false;

  @Input()
  inputId?: string;

  @Input()
  selectionMode: PrimeNgSelectionMode = 'single';

  get control() {
    return this.ngControl?.control;
  }

  get displayValue() {
    if (this.selected) {
      if (isArray(this.selected)) {
        return this.selected.map((x) => this.fio.transform(x)).join('; ');
      } else {
        return this.fio.transform(this.selected);
      }
    }
    return '';
  }

  constructor(
    private readonly getEmployeesGQL: GetEmployeesForSelectGQL,
    private readonly fio: FioPipe,
    private readonly injector: Injector
  ) {}

  ngOnInit() {
    this.ngControl = this.injector.get(NgControl, null, InjectFlags.Optional);
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange = (value: string | string[] | null) => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouched = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: string | string[]): void {
    if (obj) {
      const array = isArray(obj);
      let filter: IdOperationFilterInput;

      if (array) {
        filter = { in: obj };
      } else {
        filter = { eq: obj };
      }

      this.getEmployeesGQL
        .fetch({
          where: { id: filter },
        })
        .pipe(
          tap(({ data }) => {
            const employees = data?.employees?.items ?? [];
            if (array) {
              this.selected = employees;
            } else {
              this.selected = employees[0];
            }
          }),
          untilDestroyed(this)
        )
        .subscribe();
    }
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  onSelectedChange(selected: Employee | Employee[]) {
    this.selected = selected;
    if (selected) {
      if (isArray(selected)) {
        this.onChange(selected.map((x) => x.id));
      } else {
        this.onChange(selected.id);
      }
    } else {
      this.onChange(null);
    }
  }

  async onLazyLoad(event: LazyLoadEvent): Promise<void> {
    if (this.queryRef) {
      await this.queryRef.setVariables(this.getFilter(event));
    } else {
      this.queryRef = this.getEmployeesGQL.watch(this.getFilter(event), {
        useInitialLoading: true,
      });

      this.queryRef.valueChanges
        .pipe(
          tap(({ data, loading }) => {
            this.loading$.next(loading);
            if (data?.employees) {
              this.employees$.next(data.employees?.items ?? []);
              this.totalRecords$.next(data.employees?.totalCount ?? 0);
            }
          }),
          untilDestroyed(this)
        )
        .subscribe();
    }
  }

  onOpen() {
    this.markAsTouched();
    this.open = true;
  }

  onClose() {
    this.markAsTouched();
    this.open = false;
  }

  private getFilter({
    globalFilter,
    first,
    rows,
  }: LazyLoadEvent): GetEmployeesForSelectQueryVariables {
    let where: IdentityUserFilterInput | undefined = undefined;
    if (!isEmpty(globalFilter)) {
      where = {
        or: [
          {
            surname: { contains: globalFilter },
          },
          {
            name: { contains: globalFilter },
          },
          {
            phoneNumber: { contains: globalFilter },
          },
        ],
      };
    }

    return {
      where,
      order: {
        name: SortEnumType.Asc,
      },
      skip: first,
      take: rows,
    };
  }
}
