import { Component, InjectFlags, Injector, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import { BehaviorSubject, tap } from 'rxjs';
import {
  GetPackingPlacesQuery,
  GetPackingPlacesQueryVariables,
  IdOperationFilterInput,
  PackingPlaceFilterInput,
  PackingPlaceFragment,
  SortEnumType,
  InputMaybe,
} from '@kometa/smde/packing-place/types';
import { QueryRef } from 'apollo-angular';
import { GetPackingPlacesGQL } from '@kometa/smde/packing-place/data-access';
import { isArray, isEmpty } from 'lodash';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { LazyLoadEvent } from 'primeng/api';
import { PrimeNgSelectionMode } from '@kometa/shared/primeng/ui-table';

@UntilDestroy()
@Component({
  selector: 'kometa-packing-place-select-control',
  templateUrl: './packing-place-select-control.component.html',
  styleUrls: ['./packing-place-select-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: PackingPlaceSelectControlComponent,
      multi: true,
    },
  ],
})
export class PackingPlaceSelectControlComponent implements OnInit, ControlValueAccessor {
  readonly packingPlaces$ = new BehaviorSubject<PackingPlaceFragment[]>([]);
  readonly totalRecords$ = new BehaviorSubject<number>(0);
  readonly loading$ = new BehaviorSubject<boolean>(false);
  queryRef?: QueryRef<GetPackingPlacesQuery, GetPackingPlacesQueryVariables>;

  open = false;
  selected?: PackingPlaceFragment | PackingPlaceFragment[];
  ngControl?: NgControl | null;
  touched = false;
  disabled = false;

  @Input()
  inputId?: string;

  @Input()
  selectionMode: PrimeNgSelectionMode = 'single';

  @Input()
  where?: GetPackingPlacesQueryVariables['where'];

  get control() {
    return this.ngControl?.control;
  }

  get displayValue() {
    if (this.selected) {
      if (isArray(this.selected)) {
        return this.selected.map((x) => x.barcode).join('; ');
      } else {
        return this.selected.barcode;
      }
    }
    return '';
  }

  constructor(
    private readonly getPackingPlacesGQL: GetPackingPlacesGQL,
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

      this.getPackingPlacesGQL
        .fetch({
          where: { id: filter },
        })
        .pipe(
          tap(({ data }) => {
            const packingPlaces = data?.packingPlaces?.items ?? [];
            if (array) {
              this.selected = packingPlaces;
            } else {
              this.selected = packingPlaces[0];
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

  onSelectedChange(selected: PackingPlaceFragment | PackingPlaceFragment[]) {
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
      this.queryRef = this.getPackingPlacesGQL.watch(this.getFilter(event), {
        useInitialLoading: true,
      });

      this.queryRef.valueChanges
        .pipe(
          tap(({ data, loading }) => {
            this.loading$.next(loading);
            if (data?.packingPlaces) {
              this.packingPlaces$.next(data.packingPlaces?.items ?? []);
              this.totalRecords$.next(data.packingPlaces?.totalCount ?? 0);
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

  private getFilter({ globalFilter, first, rows }: LazyLoadEvent): GetPackingPlacesQueryVariables {
    let where: InputMaybe<PackingPlaceFilterInput> | undefined = this.where;
    if (!isEmpty(globalFilter)) {
      where = {
        or: [
          {
            barcode: { contains: globalFilter },
          },
        ],
        ...(where ?? {}),
      };
    }

    return {
      where,
      order: {
        lastModificationTime: SortEnumType.Desc,
        creationTime: SortEnumType.Desc,
      },
      skip: first,
      take: rows,
    };
  }
}
