import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { QueryRef } from 'apollo-angular';
import { LazyLoadEvent } from 'primeng/api';
import { tap } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import {
  GetLastMileStoragePeriodsQuery,
  GetLastMileStoragePeriodsQueryVariables,
  LastMileStoragePeriodFragment,
  TypeOrder,
} from '@kometa/smde/last-mile/storage-period/types';
import { GetLastMileStoragePeriodsGQL } from '@kometa/smde/last-mile/storage-period/data-access';
import { StoragePeriodDialogService } from '../storage-period-dialog.service';
import { enumToArray } from '@kometa/shared/utils';
import { find } from 'lodash';

@UntilDestroy()
@Component({
  selector: 'kometa-storage-periods-page',
  templateUrl: './storage-periods-page.component.html',
  styleUrls: ['./storage-periods-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoragePeriodsPageComponent {
  readonly storagePeriods$ = new BehaviorSubject<LastMileStoragePeriodFragment[]>([]);
  readonly loading$ = new BehaviorSubject<boolean>(false);
  queryRef?: QueryRef<GetLastMileStoragePeriodsQuery, GetLastMileStoragePeriodsQueryVariables>;

  @Input()
  lastMileId!: string;

  constructor(
    private readonly getStoragePeriodsGQL: GetLastMileStoragePeriodsGQL,
    private readonly storagePeriodDialogService: StoragePeriodDialogService
  ) {}

  async onLazyLoad(event: LazyLoadEvent): Promise<void> {
    if (this.queryRef) {
      await this.queryRef.setVariables(this.getFilter());
    } else {
      this.queryRef = this.getStoragePeriodsGQL.watch(this.getFilter(), {
        useInitialLoading: true,
      });
      this.queryRef.valueChanges
        .pipe(
          tap(({ data, loading }) => {
            this.loading$.next(loading);
            if (data?.lastMileById) {
              const storagePeriods = data.lastMileById.storagePeriods ?? [];
              this.storagePeriods$.next(
                enumToArray(TypeOrder).map(({ id }) => ({
                  lastMileId: this.lastMileId,
                  typeOrder: id as TypeOrder,
                  period: find(storagePeriods, (x) => x.typeOrder === id)?.period ?? 0,
                  __typename: 'LastMileStoragePeriod',
                }))
              );
            }
          }),
          untilDestroyed(this)
        )
        .subscribe();
    }
  }

  onUpdate(storagePeriod: LastMileStoragePeriodFragment): void {
    this.storagePeriodDialogService.openUpdate(this.lastMileId, storagePeriod);
  }

  getFilter(): GetLastMileStoragePeriodsQueryVariables {
    return {
      lastMileId: this.lastMileId,
    };
  }
}
