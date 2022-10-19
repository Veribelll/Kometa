import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { AccessKeyDialogService } from '../access-key-dialog.service';
import { BehaviorSubject } from 'rxjs';
import { isEmpty } from 'lodash';
import { tap } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { QueryRef } from 'apollo-angular';
import {
  AccessKeyFilterInput,
  AccessKeyFragment,
  GetAccessKeysQuery,
  GetAccessKeysQueryVariables,
  SortEnumType,
} from '@kometa/shared/last-mile/access-key/types';
import { GetAccessKeysGQL } from '@kometa/shared/last-mile/access-key/data-access';

@UntilDestroy()
@Component({
  selector: 'kometa-access-keys-page',
  templateUrl: './access-keys-page.component.html',
  styleUrls: ['./access-keys-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AccessKeyDialogService],
})
export class AccessKeysPageComponent {
  readonly accessKeys$ = new BehaviorSubject<AccessKeyFragment[]>([]);
  readonly loading$ = new BehaviorSubject<boolean>(false);
  queryRef?: QueryRef<GetAccessKeysQuery, GetAccessKeysQueryVariables>;

  @Input()
  lastMileId!: string;

  constructor(
    private readonly getAccessKeysGQL: GetAccessKeysGQL,
    private readonly accessKeyDialogService: AccessKeyDialogService
  ) {}

  async onLazyLoad(event: LazyLoadEvent): Promise<void> {
    if (this.queryRef) {
      await this.queryRef.setVariables(this.getFilter(event));
    } else {
      this.queryRef = this.getAccessKeysGQL.watch(this.getFilter(event), {
        useInitialLoading: true,
      });
      this.queryRef.valueChanges
        .pipe(
          tap(({ data, loading }) => {
            this.loading$.next(loading);
            if (data?.accessKeys) {
              this.accessKeys$.next(data.accessKeys ?? []);
            }
          }),
          untilDestroyed(this)
        )
        .subscribe();
    }
  }

  onCreate(): void {
    this.accessKeyDialogService.openCreate(this.lastMileId);
  }

  onUpdate(accessKey: AccessKeyFragment): void {
    this.accessKeyDialogService.openUpdate(this.lastMileId, accessKey);
  }

  onDelete(accessKey: AccessKeyFragment): void {
    this.accessKeyDialogService.openDelete(this.lastMileId, accessKey);
  }

  getFilter({ globalFilter }: LazyLoadEvent): GetAccessKeysQueryVariables {
    let where: AccessKeyFilterInput | undefined = undefined;
    if (!isEmpty(globalFilter)) {
      where = {
        or: [
          {
            barcode: { contains: globalFilter },
          },
        ],
      };
    }

    return {
      lastMileId: this.lastMileId,
      where,
      order: {
        barcode: SortEnumType.Asc,
      },
    };
  }
}
