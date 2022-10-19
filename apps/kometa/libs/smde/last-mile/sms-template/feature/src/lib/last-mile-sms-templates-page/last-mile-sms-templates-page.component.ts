import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
  GetLastMileSmsTemplatesQuery,
  GetLastMileSmsTemplatesQueryVariables,
  LastMileSmsTemplateFragment,
  NotificationEventType,
  TypeOrder,
} from '@kometa/smde/last-mile/sms-template/types';
import { BehaviorSubject, tap } from 'rxjs';
import { GetLastMileSmsTemplatesGQL } from '@kometa/smde/last-mile/sms-template/data-access';
import { LazyLoadEvent } from 'primeng/api';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { QueryRef } from 'apollo-angular';
import { LastMileSmsTemplateDialogService } from '../last-mile-sms-template-dialog.service';
import { enumToArray } from '@kometa/shared/utils';
import { findIndex } from 'lodash';

@UntilDestroy()
@Component({
  selector: 'kometa-last-mile-sms-templates-page',
  templateUrl: './last-mile-sms-templates-page.component.html',
  styleUrls: ['./last-mile-sms-templates-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LastMileSmsTemplatesPageComponent {
  readonly smsTemplates$ = new BehaviorSubject<LastMileSmsTemplateFragment[]>([]);
  readonly loading$ = new BehaviorSubject<boolean>(false);
  queryRef?: QueryRef<GetLastMileSmsTemplatesQuery, GetLastMileSmsTemplatesQueryVariables>;

  @Input()
  lastMileId!: string;

  constructor(
    private readonly getLastMileSmsTemplatesGQL: GetLastMileSmsTemplatesGQL,
    private readonly lastMileSmsTemplateDialogService: LastMileSmsTemplateDialogService
  ) {}

  async onLazyLoad(event: LazyLoadEvent): Promise<void> {
    if (this.queryRef) {
      await this.queryRef.setVariables(this.getFilter());
    } else {
      this.queryRef = this.getLastMileSmsTemplatesGQL.watch(this.getFilter(), {
        useInitialLoading: true,
      });
      this.queryRef.valueChanges
        .pipe(
          tap(({ data, loading }) => {
            this.loading$.next(loading);
            if (data?.lastMileById.smsTemplates) {
              const smsTemplates = [...data.lastMileById.smsTemplates];
              const typesOrder = enumToArray(TypeOrder);
              const eventTypes = enumToArray(NotificationEventType);

              for (const { id: typeOrder } of typesOrder) {
                for (const { id: eventType } of eventTypes) {
                  const index = findIndex(
                    smsTemplates,
                    (x) => x.typeOrder === typeOrder && x.eventType === eventType
                  );
                  if (index < 0) {
                    smsTemplates.push({
                      typeOrder: typeOrder as TypeOrder,
                      eventType: eventType as NotificationEventType,
                      lastMileId: this.lastMileId,
                      smsTemplateId: '',
                      smsTemplate: { id: '', name: '' },
                    });
                  }
                }
              }

              this.smsTemplates$.next(smsTemplates);
            }
          }),
          untilDestroyed(this)
        )
        .subscribe();
    }
  }

  onUpdate(lastMileSmsTemplate: LastMileSmsTemplateFragment): void {
    this.lastMileSmsTemplateDialogService.openUpdate(this.lastMileId, lastMileSmsTemplate);
  }

  onDelete(lastMileSmsTemplate: LastMileSmsTemplateFragment): void {
    this.lastMileSmsTemplateDialogService.openDelete(this.lastMileId, lastMileSmsTemplate);
  }

  private getFilter(): GetLastMileSmsTemplatesQueryVariables {
    return {
      lastMileId: this.lastMileId,
    };
  }
}
