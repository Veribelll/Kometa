import { Component, InjectFlags, Injector, Input, OnInit } from '@angular/core';
import { isArray, isEmpty } from 'lodash';
import { LazyLoadEvent } from 'primeng/api';
import {
  GetSmsTemplatesQuery,
  GetSmsTemplatesQueryVariables,
  IdOperationFilterInput,
  SmsTemplateFragment,
  SortEnumType,
} from '@kometa/smde/sms/template/types';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject, tap } from 'rxjs';
import { GetSmsTemplatesGQL } from '@kometa/smde/sms/template/data-access';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import { PrimeNgSelectionMode } from '@kometa/shared/primeng/ui-table';
import { QueryRef } from 'apollo-angular';

@UntilDestroy()
@Component({
  selector: 'kometa-sms-template-select-control',
  templateUrl: './sms-template-select-control.component.html',
  styleUrls: ['./sms-template-select-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SmsTemplateSelectControlComponent,
      multi: true,
    },
  ],
})
export class SmsTemplateSelectControlComponent implements OnInit, ControlValueAccessor {
  readonly smsTemplates$ = new BehaviorSubject<SmsTemplateFragment[]>([]);
  readonly totalRecords$ = new BehaviorSubject<number>(0);
  readonly loading$ = new BehaviorSubject<boolean>(false);
  queryRef?: QueryRef<GetSmsTemplatesQuery, GetSmsTemplatesQueryVariables>;

  open = false;
  selected?: SmsTemplateFragment | SmsTemplateFragment[];
  ngControl?: NgControl | null;
  touched = false;
  disabled = false;

  @Input()
  inputId?: string;

  @Input()
  selectionMode: PrimeNgSelectionMode = 'single';

  @Input()
  where?: GetSmsTemplatesQueryVariables['where'];

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
    private readonly getSmsTemplatesGQL: GetSmsTemplatesGQL,
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

      this.getSmsTemplatesGQL
        .fetch({
          where: { id: filter },
        })
        .pipe(
          tap(({ data }) => {
            const smsTemplates = data?.smsTemplates?.items ?? [];
            if (array) {
              this.selected = smsTemplates;
            } else {
              this.selected = smsTemplates[0];
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

  onSelectedChange(selected: SmsTemplateFragment | SmsTemplateFragment[]) {
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
      this.queryRef = this.getSmsTemplatesGQL.watch(this.getFilter(event), {
        useInitialLoading: true,
      });

      this.queryRef.valueChanges
        .pipe(
          tap(({ data, loading }) => {
            this.loading$.next(loading);
            if (data?.smsTemplates) {
              this.smsTemplates$.next(data.smsTemplates?.items ?? []);
              this.totalRecords$.next(data.smsTemplates?.totalCount ?? 0);
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

  private getFilter({ globalFilter, first, rows }: LazyLoadEvent): GetSmsTemplatesQueryVariables {
    let where = this.where;

    if (!isEmpty(globalFilter)) {
      where = {
        or: [
          {
            name: { contains: globalFilter },
          },
        ],
        ...(where ?? {}),
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
