import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
  ControllerFragment,
  GetControllersQuery,
  GetControllersQueryVariables,
  LockFragment,
  SortEnumType,
} from '@kometa/shared/postamat/controller/types';
import { GetControllersGQL } from '@kometa/shared/postamat/controller/data-access';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import { QueryRef } from 'apollo-angular';
import { LazyLoadEvent } from 'primeng/api';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { sortBy } from 'lodash';
import { ControllerDriverFactory } from '@kometa/shared/driver/feature';
import { map } from 'rxjs/operators';

type Lock = LockFragment & { controller: { name: string }; status$: Observable<string> };

@UntilDestroy()
@Component({
  selector: 'kometa-locks-page',
  templateUrl: './locks-page.component.html',
  styleUrls: ['./locks-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocksPageComponent {
  readonly locks$ = new BehaviorSubject<Lock[]>([]);
  readonly loading$ = new BehaviorSubject<boolean>(false);
  queryRef?: QueryRef<GetControllersQuery, GetControllersQueryVariables>;

  @Input()
  postamatId!: string;

  constructor(
    private readonly getControllersGQL: GetControllersGQL,
    private readonly driverFactory: ControllerDriverFactory
  ) {}

  async onLazyLoad(event: LazyLoadEvent): Promise<void> {
    if (this.queryRef) {
      await this.queryRef.setVariables(this.getFilter());
    } else {
      this.queryRef = this.getControllersGQL.watch(this.getFilter(), {
        useInitialLoading: true,
      });
      this.queryRef.valueChanges
        .pipe(
          tap(async ({ data, loading }) => {
            this.loading$.next(loading);
            let locks: Lock[] = [];
            if (data?.controllers) {
              for (const controller of data.controllers) {
                const driver = await this.driverFactory.getDriver(controller);
                locks = [
                  ...locks,
                  ...controller.locks.map((l) => ({
                    controller,
                    ...l,
                    status$: driver
                      .isOpen({ lockId: l.id })
                      .pipe(map((s) => (s ? 'Открыт' : 'Закрыт'))),
                  })),
                ];
              }
              this.locks$.next(sortBy(locks, ['controller.name', 'address']));
            }
          }),
          untilDestroyed(this)
        )
        .subscribe();
    }
  }

  private getFilter(): GetControllersQueryVariables {
    return {
      postamatId: this.postamatId,
      order: {
        name: SortEnumType.Asc,
      },
    };
  }
}
