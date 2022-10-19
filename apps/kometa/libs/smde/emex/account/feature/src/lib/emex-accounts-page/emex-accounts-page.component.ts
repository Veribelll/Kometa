import { BehaviorSubject, tap } from 'rxjs';
import { Component } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import {
  EmexAccountFilterInput,
  EmexAccountFragment,
  GetEmexAccountsQuery,
  GetEmexAccountsQueryVariables,
  SortEnumType,
} from '@kometa/smde/emex/account/types';
import { EmexAccountDialogService } from '../emex-account-dialog.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { CurrentContractorService } from '@kometa/shared/abp';
import { isEmpty } from 'lodash';
import { GetEmexAccountsGQL } from '@kometa/smde/emex/account/data-access';
import { QueryRef } from 'apollo-angular';

@UntilDestroy()
@Component({
  selector: 'kometa-emex-accounts-page',
  templateUrl: './emex-accounts-page.component.html',
  styleUrls: ['./emex-accounts-page.component.scss'],
  providers: [DialogService, EmexAccountDialogService],
})
export class EmexAccountsPageComponent {
  readonly accounts$ = new BehaviorSubject<EmexAccountFragment[]>([]);
  readonly totalRecords$ = new BehaviorSubject<number>(0);
  readonly loading$ = new BehaviorSubject<boolean>(false);
  queryRef?: QueryRef<GetEmexAccountsQuery, GetEmexAccountsQueryVariables>;

  constructor(
    private readonly getEmexAccountsGQL: GetEmexAccountsGQL,
    private readonly emexAccountDialogService: EmexAccountDialogService,
    private readonly currentContractorService: CurrentContractorService
  ) {
    this.currentContractorService.currentId$
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
      this.queryRef = this.getEmexAccountsGQL.watch(this.getFilter(event), {
        useInitialLoading: true,
      });
      this.queryRef.valueChanges
        .pipe(
          tap(({ data, loading }) => {
            this.loading$.next(loading);
            if (data?.emexAccounts) {
              this.accounts$.next(data.emexAccounts.items ?? []);
              this.totalRecords$.next(data.emexAccounts.totalCount ?? 0);
            }
          }),
          untilDestroyed(this)
        )
        .subscribe();
    }
  }

  onDetails(account: EmexAccountFragment): void {
    this.emexAccountDialogService.openDetail(account);
  }

  onCreate(): void {
    this.emexAccountDialogService.openCreate();
  }

  onUpdate(account: EmexAccountFragment): void {
    this.emexAccountDialogService.openUpdate(account);
  }

  onDelete(account: EmexAccountFragment): void {
    this.emexAccountDialogService.openDelete(account);
  }

  private getFilter({ globalFilter, first, rows }: LazyLoadEvent): GetEmexAccountsQueryVariables {
    let where: EmexAccountFilterInput | undefined = undefined;
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
      where,
      order: {
        name: SortEnumType.Asc,
      },
      skip: first,
      take: rows,
    };
  }
}
