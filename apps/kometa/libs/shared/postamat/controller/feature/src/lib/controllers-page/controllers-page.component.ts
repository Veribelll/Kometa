import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LazyLoadEvent, MenuItem } from 'primeng/api';
import { PromixControllerDialogService } from '../promix-controller-dialog.service';
import { BehaviorSubject, tap } from 'rxjs';
import { LockDialogService } from '../lock-dialog.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { isEmpty } from 'lodash';
import { QueryRef } from 'apollo-angular';
import {
  ControllerBaseFilterInput,
  ControllerFragment,
  GetControllersQuery,
  GetControllersQueryVariables,
  SortEnumType,
} from '@kometa/shared/postamat/controller/types';
import { GetControllersGQL } from '@kometa/shared/postamat/controller/data-access';

@UntilDestroy()
@Component({
  selector: 'kometa-controllers-page',
  templateUrl: './controllers-page.component.html',
  styleUrls: ['./controllers-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PromixControllerDialogService, LockDialogService],
})
export class ControllersPageComponent {
  readonly controllers$ = new BehaviorSubject<ControllerFragment[]>([]);
  readonly loading$ = new BehaviorSubject<boolean>(false);
  readonly menuToCreate: MenuItem[] = [
    {
      label: 'Promix',
      command: () => this.onCreate('PromixController'),
    },
  ];
  queryRef?: QueryRef<GetControllersQuery, GetControllersQueryVariables>;

  @Input()
  postamatId!: string;

  @Input()
  ports?: string[];

  constructor(
    private readonly getControllersGQL: GetControllersGQL,
    private readonly promixControllerDialogService: PromixControllerDialogService,
    private readonly lockDialogService: LockDialogService
  ) {}

  async onLazyLoad(event: LazyLoadEvent): Promise<void> {
    if (this.queryRef) {
      await this.queryRef.setVariables(this.getFilter(event));
    } else {
      this.queryRef = this.getControllersGQL.watch(this.getFilter(event), {
        useInitialLoading: true,
      });
      this.queryRef.valueChanges
        .pipe(
          tap(({ data, loading }) => {
            this.loading$.next(loading);
            if (data?.controllers) {
              this.controllers$.next(data.controllers ?? []);
            }
          }),
          untilDestroyed(this)
        )
        .subscribe();
    }
  }

  onCreate(type: ControllerFragment['__typename']) {
    if (type === 'PromixController') {
      this.promixControllerDialogService.openCreate(this.postamatId, this.ports);
    }
  }

  onUpdate(controller: ControllerFragment) {
    if (controller.__typename === 'PromixController') {
      this.promixControllerDialogService.openUpdate(this.postamatId, controller, this.ports);
    }
  }

  onDelete(controller: ControllerFragment) {
    if (controller.__typename === 'PromixController') {
      this.promixControllerDialogService.openDelete(this.postamatId, controller);
    }
  }

  onShowLocks() {
    this.lockDialogService.openPage(this.postamatId);
  }

  private getFilter({ globalFilter }: LazyLoadEvent): GetControllersQueryVariables {
    let where: ControllerBaseFilterInput | undefined = undefined;
    if (!isEmpty(globalFilter)) {
      where = {
        or: [
          {
            name: { contains: globalFilter },
          },
        ],
      };
    }

    return {
      postamatId: this.postamatId,
      where,
      order: {
        name: SortEnumType.Asc,
      },
    };
  }
}
