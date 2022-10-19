import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
  GetLastMileReturnPeriodsQuery,
  GetLastMileReturnPeriodsQueryVariables,
  LastMileReturnPeriodFragment,
  TypeOrder
} from '@kometa/smde/last-mile/return-period/types';
import { BehaviorSubject, tap } from 'rxjs';
import { LazyLoadEvent } from 'primeng/api';
import { GetLastMileReturnPeriodsGQL } from '@kometa/smde/last-mile/return-period/data-access';
import { enumToArray } from '@kometa/shared/utils';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { QueryRef } from 'apollo-angular';
import { ReturnPeriodDialogService } from '../return-period-dialog.service';
import { find } from 'lodash';

@UntilDestroy()
@Component({
  selector: 'kometa-return-periods-page',
  templateUrl: './return-periods-page.component.html',
  styleUrls: ['./return-periods-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReturnPeriodsPageComponent {
  readonly returnPeriods$ = new BehaviorSubject<LastMileReturnPeriodFragment[]>([]);
  readonly loading$ = new BehaviorSubject<boolean>(false);
  queryRef?: QueryRef<GetLastMileReturnPeriodsQuery, GetLastMileReturnPeriodsQueryVariables>;

  @Input()
  lastMileId!: string;

  constructor(
    private readonly getReturnPeriodsGQL: GetLastMileReturnPeriodsGQL,
    private readonly returnPeriodDialogService: ReturnPeriodDialogService
  ) {}

  async onLazyLoad(event: LazyLoadEvent): Promise<void> {
    if (this.queryRef) {
      await this.queryRef.setVariables(this.getFilter());
    } else {
      this.queryRef = this.getReturnPeriodsGQL.watch(this.getFilter(), {
        useInitialLoading: true,
      });
      this.queryRef.valueChanges
        .pipe(
          tap(({ data, loading }) => {
            this.loading$.next(loading);
            if (data?.lastMileById) {
              const returnPeriods = data.lastMileById.returnPeriods ?? [];
              this.returnPeriods$.next(
                enumToArray(TypeOrder).map(({ id }) => ({
                  lastMileId: this.lastMileId,
                  typeOrder: id as TypeOrder,
                  period: find(returnPeriods, (x) => x.typeOrder === id)?.period ?? 0,
                  __typename: 'LastMileReturnPeriod',
                }))
              );
            }
          }),
          untilDestroyed(this)
        )
        .subscribe();
    }
  }

  onUpdate(returnPeriod: LastMileReturnPeriodFragment): void {
    this.returnPeriodDialogService.openUpdate(this.lastMileId, returnPeriod);
  }

  getFilter(): GetLastMileReturnPeriodsQueryVariables {
    return {
      lastMileId: this.lastMileId,
    };
  }
}
