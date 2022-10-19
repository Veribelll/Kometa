import { BehaviorSubject, Observable, tap } from 'rxjs';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { EmployeeDialogService } from '../employee-dialog.service';
import {
  EmployeeFragment,
  GetEmployeesQuery,
  GetEmployeesQueryVariables,
  IdentityUserFilterInput,
  SortEnumType,
} from '@kometa/smde/employee/types';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { CurrentContractorService } from '@kometa/shared/abp';
import { isEmpty } from 'lodash';
import { QueryRef } from 'apollo-angular';
import { GetEmployeesGQL } from '@kometa/smde/employee/data-access';

@UntilDestroy()
@Component({
  selector: 'kometa-employees-page',
  templateUrl: './employees-page.component.html',
  styleUrls: ['./employees-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DialogService, EmployeeDialogService],
})
export class EmployeesPageComponent {
  readonly employees$ = new BehaviorSubject<EmployeeFragment[]>([]);
  readonly totalRecords$ = new BehaviorSubject<number>(0);
  readonly loading$ = new BehaviorSubject<boolean>(false);
  queryRef?: QueryRef<GetEmployeesQuery, GetEmployeesQueryVariables>;

  constructor(
    private readonly getEmployeesGQL: GetEmployeesGQL,
    private readonly employeeDialogService: EmployeeDialogService,
    private readonly currentContractorService: CurrentContractorService
  ) {
    this.currentContractorService.currentId$
      .pipe(
        tap(() => this.queryRef?.refetch()),
        untilDestroyed(this)
      )
      .subscribe();
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
              this.employees$.next(data.employees.items ?? []);
              this.totalRecords$.next(data.employees.totalCount ?? 0);
            }
          }),
          untilDestroyed(this)
        )
        .subscribe();
    }
  }

  onDetails(employee: EmployeeFragment) {
    this.employeeDialogService.openDetail(employee);
  }

  onCreate(): void {
    this.employeeDialogService.openCreate();
  }

  onUpdate(employee: EmployeeFragment) {
    this.employeeDialogService.openUpdate(employee);
  }

  onDelete(employee: EmployeeFragment): void {
    this.employeeDialogService.openDelete(employee);
  }

  onUpdatePermissions({ id }: EmployeeFragment) {
    this.employeeDialogService.openUpdatePermissions(id);
  }

  private getFilter({ globalFilter, first, rows }: LazyLoadEvent): GetEmployeesQueryVariables {
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
