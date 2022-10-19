import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LazyLoadEvent } from 'primeng/api';
import { ReturnRequestDialogService } from '../return-request-dialog';
import {
  GetReturnRequestsQuery,
  GetReturnRequestsQueryVariables,
  ReturnRequestFilterInput,
  ReturnRequestFragment,
  SortEnumType,
} from '@kometa/smde/return-request/types';
import { isEmpty } from 'lodash';
import { tap } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { QueryRef } from 'apollo-angular';
import { GetReturnRequestsGQL } from '@kometa/smde/return-request/data-access';
import { CurrentContractorService } from '@kometa/shared/abp';

@UntilDestroy()
@Component({
  selector: 'kometa-return-requests-page',
  templateUrl: './return-requests-page.component.html',
  styleUrls: ['./return-requests-page.component.scss'],
})
export class ReturnRequestsPageComponent {
  readonly returnRequests$ = new BehaviorSubject<ReturnRequestFragment[]>([]);
  readonly totalRecords$ = new BehaviorSubject<number>(0);
  readonly loading$ = new BehaviorSubject<boolean>(false);
  queryRef?: QueryRef<GetReturnRequestsQuery, GetReturnRequestsQueryVariables>;

  constructor(
    private readonly getReturnRequestsGQL: GetReturnRequestsGQL,
    private readonly returnRequestDialogService: ReturnRequestDialogService,
    private readonly currentContractorService: CurrentContractorService
  ) {
    this.currentContractorService.current$
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
      this.queryRef = this.getReturnRequestsGQL.watch(this.getFilter(event), {
        useInitialLoading: true,
      });
      this.queryRef.valueChanges
        .pipe(
          tap(({ data, loading }) => {
            this.loading$.next(loading);
            if (data?.returnRequests) {
              this.returnRequests$.next(data.returnRequests.items ?? []);
              this.totalRecords$.next(data.returnRequests.totalCount ?? 0);
            }
          }),
          untilDestroyed(this)
        )
        .subscribe();
    }
  }

  onDetails(request: ReturnRequestFragment): void {
    this.returnRequestDialogService.openDetail(request);
  }

  onCreate(): void {
    this.returnRequestDialogService.openCreate();
  }

  onUpdate(request: ReturnRequestFragment): void {
    this.returnRequestDialogService.openUpdate(request);
  }

  onReturn(request: ReturnRequestFragment): void {
    this.returnRequestDialogService.openReturn(request);
  }

  onCancel(request: ReturnRequestFragment): void {
    this.returnRequestDialogService.openCancel(request);
  }

  onTimeline(request: ReturnRequestFragment) {
    this.returnRequestDialogService.openTimeline(request);
  }

  private getFilter({ globalFilter, first, rows }: LazyLoadEvent): GetReturnRequestsQueryVariables {
    let where: ReturnRequestFilterInput | undefined = undefined;
    if (!isEmpty(globalFilter)) {
      where = {
        or: [
          {
            code: { contains: globalFilter },
          },
        ],
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
