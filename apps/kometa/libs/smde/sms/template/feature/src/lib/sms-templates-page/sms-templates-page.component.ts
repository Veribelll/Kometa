import { Component } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import {
  GetSmsTemplatesQuery,
  GetSmsTemplatesQueryVariables,
  SmsTemplateFilterInput,
  SmsTemplateFragment,
  SortEnumType,
} from '@kometa/smde/sms/template/types';
import { SmsTemplateDialogService } from '../sms-template-dialog.service';
import { BehaviorSubject, tap } from 'rxjs';
import { CurrentContractorService } from '@kometa/shared/abp';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { isEmpty } from 'lodash';
import { QueryRef } from 'apollo-angular';
import { GetSmsTemplatesGQL } from '@kometa/smde/sms/template/data-access';

@UntilDestroy()
@Component({
  selector: 'kometa-sms-templates-page',
  templateUrl: './sms-templates-page.component.html',
  styleUrls: ['./sms-templates-page.component.scss'],
  providers: [SmsTemplateDialogService],
})
export class SmsTemplatesPageComponent {
  readonly smsTemplates$ = new BehaviorSubject<SmsTemplateFragment[]>([]);
  readonly totalRecords$ = new BehaviorSubject<number>(0);
  readonly loading$ = new BehaviorSubject<boolean>(false);
  queryRef?: QueryRef<GetSmsTemplatesQuery, GetSmsTemplatesQueryVariables>;

  constructor(
    private readonly getSmsTemplatesGQL: GetSmsTemplatesGQL,
    private readonly currentContractorService: CurrentContractorService,
    private readonly smsTemplateDialogService: SmsTemplateDialogService
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
      this.queryRef = this.getSmsTemplatesGQL.watch(this.getFilter(event), {
        useInitialLoading: true,
      });

      this.queryRef.valueChanges
        .pipe(
          tap(({ data, loading }) => {
            this.loading$.next(loading);
            if (data?.smsTemplates) {
              this.smsTemplates$.next(data.smsTemplates.items ?? []);
              this.totalRecords$.next(data.smsTemplates.totalCount ?? 0);
            }
          }),
          untilDestroyed(this)
        )
        .subscribe();
    }
  }

  onDetails(smsTemplate: SmsTemplateFragment): void {
    this.smsTemplateDialogService.openDetail(smsTemplate);
  }

  onCreate(): void {
    this.smsTemplateDialogService.openCreate();
  }

  onUpdate(smsTemplate: SmsTemplateFragment): void {
    this.smsTemplateDialogService.openUpdate(smsTemplate);
  }

  onDelete(smsTemplate: SmsTemplateFragment): void {
    this.smsTemplateDialogService.openDelete(smsTemplate);
  }

  private getFilter({ globalFilter, first, rows }: LazyLoadEvent): GetSmsTemplatesQueryVariables {
    let where: SmsTemplateFilterInput | undefined = undefined;

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
