import { Component, InjectFlags, Injector, Input, OnInit } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { QueryRef } from 'apollo-angular';
import {
  GetLastMilesQuery,
  GetLastMilesQueryVariables,
  IdOperationFilterInput,
  LastMileFilterInput,
  LastMileFragment,
  SortEnumType,
} from '@kometa/smde/last-mile/types';
import { NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import { PrimeNgSelectionMode } from '@kometa/shared/primeng/ui-table';
import { isArray, isEmpty } from 'lodash';
import { GetLastMilesGQL } from '@kometa/smde/last-mile/data-access';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { LazyLoadEvent } from 'primeng/api';

@UntilDestroy()
@Component({
  selector: 'kometa-last-mile-select-control',
  templateUrl: './last-mile-select-control.component.html',
  styleUrls: ['./last-mile-select-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: LastMileSelectControlComponent,
      multi: true,
    },
  ],
})
export class LastMileSelectControlComponent implements OnInit {
  readonly lastMiles$ = new BehaviorSubject<LastMileFragment[]>([]);
  readonly totalRecords$ = new BehaviorSubject<number>(0);
  readonly loading$ = new BehaviorSubject<boolean>(false);
  queryRef?: QueryRef<GetLastMilesQuery, GetLastMilesQueryVariables>;

  open = false;
  selected?: LastMileFragment | LastMileFragment[];
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
        return this.selected.map((x) => x.name).join('; ');
      } else {
        return this.selected.name;
      }
    }
    return '';
  }

  constructor(
    private readonly getLastMilesGQL: GetLastMilesGQL,
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

      this.getLastMilesGQL
        .fetch({
          where: { id: filter },
        })
        .pipe(
          tap(({ data }) => {
            const lastMiles = data?.lastMiles?.items ?? [];
            if (array) {
              this.selected = lastMiles;
            } else {
              this.selected = lastMiles[0];
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

  onSelectedChange(selected: LastMileFragment | LastMileFragment[]) {
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
      this.queryRef = this.getLastMilesGQL.watch(this.getFilter(event), {
        useInitialLoading: true,
      });

      this.queryRef.valueChanges
        .pipe(
          tap(({ data, loading }) => {
            this.loading$.next(loading);
            if (data?.lastMiles) {
              this.lastMiles$.next(data.lastMiles?.items ?? []);
              this.totalRecords$.next(data.lastMiles?.totalCount ?? 0);
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

  private getFilter({ globalFilter, first, rows }: LazyLoadEvent): GetLastMilesQueryVariables {
    let where: LastMileFilterInput | undefined = undefined;
    if (!isEmpty(globalFilter)) {
      where = {
        or: [
          {
            name: { contains: globalFilter },
          },
          {
            address: { contains: globalFilter },
          },
          {
            externalId: { contains: globalFilter },
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
