import { Component, InjectFlags, Injector, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import { PrimeNgSelectionMode } from '@kometa/shared/primeng/ui-table';
import {
  CourierFragment,
  GetCouriersQuery,
  GetCouriersQueryVariables,
  IdentityUserFilterInput,
  IdOperationFilterInput,
  SortEnumType,
} from '@kometa/smde/courier/types';
import { isArray, isEmpty } from 'lodash';
import { GetCouriersGQL } from '@kometa/smde/courier/data-access';
import { BehaviorSubject, tap } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { LazyLoadEvent } from 'primeng/api';
import { QueryRef } from 'apollo-angular';
import { FioPipe } from '@kometa/shared/employee/ui';

@UntilDestroy()
@Component({
  selector: 'kometa-courier-select-control',
  templateUrl: './courier-select-control.component.html',
  styleUrls: ['./courier-select-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CourierSelectControlComponent,
      multi: true,
    },
    FioPipe,
  ],
})
export class CourierSelectControlComponent implements OnInit, ControlValueAccessor {
  readonly couriers$ = new BehaviorSubject<CourierFragment[]>([]);
  readonly totalRecords$ = new BehaviorSubject<number>(0);
  readonly loading$ = new BehaviorSubject<boolean>(false);
  queryRef?: QueryRef<GetCouriersQuery, GetCouriersQueryVariables>;

  open = false;
  selected?: CourierFragment | CourierFragment[];
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
    private readonly getCouriersGQL: GetCouriersGQL,
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

      this.getCouriersGQL
        .fetch({
          where: { id: filter },
        })
        .pipe(
          tap(({ data }) => {
            const couriers = data?.couriers?.items ?? [];
            if (array) {
              this.selected = couriers;
            } else {
              this.selected = couriers[0];
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

  onSelectedChange(selected: CourierFragment | CourierFragment[]) {
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
      this.queryRef = this.getCouriersGQL.watch(this.getFilter(event), {
        useInitialLoading: true,
      });

      this.queryRef.valueChanges
        .pipe(
          tap(({ data, loading }) => {
            this.loading$.next(loading);
            if (data?.couriers) {
              this.couriers$.next(data.couriers?.items ?? []);
              this.totalRecords$.next(data.couriers?.totalCount ?? 0);
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

  private getFilter({ globalFilter, first, rows }: LazyLoadEvent): GetCouriersQueryVariables {
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
