import { BehaviorSubject } from 'rxjs';
import { Component } from '@angular/core';
import { LazyLoadEvent, MenuItem } from 'primeng/api';
import {
  GetSmsAccountsQuery,
  GetSmsAccountsQueryVariables,
  SmsAccountFilterInput,
  SmsAccountFragment,
  SortEnumType,
} from '@kometa/smde/sms/account/types';
import { SmsCenterAccountDialogService } from '../sms-center-account-dialog.service';
import { CurrentContractorService } from '@kometa/shared/abp';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { tap } from 'rxjs/operators';
import { isEmpty } from 'lodash';
import { QueryRef } from 'apollo-angular';
import { GetSmsAccountsGQL } from '@kometa/smde/sms/account/data-access';

@UntilDestroy()
@Component({
  selector: 'kometa-sms-accounts-page',
  templateUrl: './sms-accounts-page.component.html',
  styleUrls: ['./sms-accounts-page.component.css'],
  providers: [SmsCenterAccountDialogService],
})
export class SmsAccountsPageComponent {
  readonly accounts$ = new BehaviorSubject<SmsAccountFragment[]>([]);
  readonly totalRecords$ = new BehaviorSubject<number>(0);
  readonly loading$ = new BehaviorSubject<boolean>(false);
  queryRef?: QueryRef<GetSmsAccountsQuery, GetSmsAccountsQueryVariables>;

  readonly menuToCreate: MenuItem[] = [
    {
      label: 'Смс центр',
      command: () => this.onCreate('SmsCenterAccount'),
    },
  ];

  constructor(
    private readonly getSmsAccountsGQL: GetSmsAccountsGQL,
    private readonly currentContractorService: CurrentContractorService,
    private readonly smsCenterAccountDialogService: SmsCenterAccountDialogService
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
      this.queryRef = this.getSmsAccountsGQL.watch(this.getFilter(event), {
        useInitialLoading: true,
      });

      this.queryRef.valueChanges
        .pipe(
          tap(({ data, loading }) => {
            this.loading$.next(loading);
            if (data?.smsAccounts) {
              this.accounts$.next(data.smsAccounts.items ?? []);
              this.totalRecords$.next(data.smsAccounts.totalCount ?? 0);
            }
          }),
          untilDestroyed(this)
        )
        .subscribe();
    }
  }

  onDetails(account: SmsAccountFragment): void {
    if (account.__typename === 'SmsCenterAccount') {
      this.smsCenterAccountDialogService.openDetail(account);
    }
  }

  onCreate(type: SmsAccountFragment['__typename']): void {
    if (type === 'SmsCenterAccount') {
      this.smsCenterAccountDialogService.openCreate();
    }
  }

  onUpdate(account: SmsAccountFragment): void {
    if (account.__typename === 'SmsCenterAccount') {
      this.smsCenterAccountDialogService.openUpdate(account);
    }
  }

  onDelete(account: SmsAccountFragment): void {
    if (account.__typename === 'SmsCenterAccount') {
      this.smsCenterAccountDialogService.openDelete(account);
    }
  }

  private getFilter({ globalFilter, first, rows }: LazyLoadEvent): GetSmsAccountsQueryVariables {
    let where: SmsAccountFilterInput | undefined = undefined;
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
