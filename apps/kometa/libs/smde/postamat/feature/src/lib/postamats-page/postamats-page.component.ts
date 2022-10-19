import { BehaviorSubject, tap } from 'rxjs';
import { Component } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { PostamatDialogService } from '../postamat-dialog.service';
import {
  GetPostamatsQuery,
  GetPostamatsQueryVariables,
  PostamatFilterInput,
  PostamatFragment,
  SortEnumType,
} from '@kometa/smde/postamat/types';
import { CurrentContractorService } from '@kometa/shared/abp';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { isEmpty } from 'lodash';
import { QueryRef } from 'apollo-angular';
import { GetPostamatsGQL } from '@kometa/smde/postamat/data-access';
import { StoragePeriodDialogService } from '@kometa/smde/last-mile/storage-period/feature';
import { LastMileSmsTemplateDialogService } from '@kometa/smde/last-mile/sms-template/feature';
import { ControllerDialogService } from '@kometa/shared/postamat/controller/feature';
import { CellDialogService } from '@kometa/shared/postamat/cell/feature';
import { AccessKeyDialogService } from '@kometa/shared/last-mile/access-key/feature';
import { LastMileDialogService } from '@kometa/smde/last-mile/feature';
import { ReturnPeriodDialogService } from '@kometa/smde/last-mile/return-period/feature';

@UntilDestroy()
@Component({
  selector: 'kometa-postamats-page',
  templateUrl: './postamats-page.component.html',
  styleUrls: ['./postamats-page.component.scss'],
})
export class PostamatsPageComponent {
  readonly postamats$ = new BehaviorSubject<PostamatFragment[]>([]);
  readonly totalRecords$ = new BehaviorSubject<number>(0);
  readonly loading$ = new BehaviorSubject<boolean>(false);
  queryRef?: QueryRef<GetPostamatsQuery, GetPostamatsQueryVariables>;

  constructor(
    private readonly getPostamatsGQL: GetPostamatsGQL,
    private readonly lastMileDialogService: LastMileDialogService,
    private readonly postamatDialogService: PostamatDialogService,
    private readonly controllerDialogService: ControllerDialogService,
    private readonly cellDialogService: CellDialogService,
    private readonly accessKeyDialogService: AccessKeyDialogService,
    private readonly storagePeriodDialogService: StoragePeriodDialogService,
    private readonly returnPeriodDialogService:ReturnPeriodDialogService,
    private readonly lastMileSmsTemplateDialogService: LastMileSmsTemplateDialogService,
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
      this.queryRef = this.getPostamatsGQL.watch(this.getFilter(event), {
        useInitialLoading: true,
      });
      this.queryRef.valueChanges
        .pipe(
          tap(({ data, loading }) => {
            this.loading$.next(loading);
            if (data?.postamats) {
              this.postamats$.next(data.postamats.items ?? []);
              this.totalRecords$.next(data.postamats.totalCount ?? 0);
            }
          }),
          untilDestroyed(this)
        )
        .subscribe();
    }
  }

  onCreate() {
    this.postamatDialogService.openCreate();
  }

  onUpdate(postamat: PostamatFragment) {
    this.postamatDialogService.openUpdate(postamat);
  }

  onDetails(postamat: PostamatFragment) {
    this.postamatDialogService.openDetail(postamat);
  }

  onDelete(postamat: PostamatFragment) {
    this.postamatDialogService.openDelete(postamat);
  }

  onShowSettings({ id }: PostamatFragment) {
    this.postamatDialogService.openSettingsUpdate(id);
  }

  onShowAccounts({ id }: PostamatFragment) {
    this.lastMileDialogService.openUpdateAccounts(id);
  }

  onShowStoragePeriods({ id }: PostamatFragment) {
    this.storagePeriodDialogService.openPage(id);
  }

  onShowReturnPeriods({ id }: PostamatFragment) {
    this.returnPeriodDialogService.openPage(id);
  }

  onShowControllers({ id }: PostamatFragment) {
    this.controllerDialogService.openPage(id);
  }

  onShowCells({ id }: PostamatFragment) {
    this.cellDialogService.openPage(id);
  }

  onShowScanner({ id }: PostamatFragment) {
    this.postamatDialogService.openScannerUpdate(id);
  }

  onShowPrinters({ id }: PostamatFragment) {
    this.postamatDialogService.openPrinters(id);
  }

  onShowAccessKeys(postamat: PostamatFragment) {
    this.accessKeyDialogService.openPage(postamat.id);
  }

  onShowSmsTemplates({ id }: PostamatFragment) {
    this.lastMileSmsTemplateDialogService.openPage(id);
  }

  private getFilter({ globalFilter, first, rows }: LazyLoadEvent): GetPostamatsQueryVariables {
    let where: PostamatFilterInput | undefined = undefined;
    if (!isEmpty(globalFilter)) {
      where = {
        or: [
          {
            name: { contains: globalFilter },
            factoryNumber: { contains: globalFilter },
            externalId: { contains: globalFilter },
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
