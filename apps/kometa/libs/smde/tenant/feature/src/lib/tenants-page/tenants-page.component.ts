import { BehaviorSubject } from 'rxjs';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { TenantDialogService } from '../tenant-dialog.service';
import {
  GetTenantsQuery,
  GetTenantsQueryVariables,
  SortEnumType,
  TenantFilterInput,
  TenantFragment,
} from '@kometa/smde/tenant/types';
import { GetTenantsGQL } from '@kometa/smde/tenant/data-access';
import { QueryRef } from 'apollo-angular';
import { isEmpty } from 'lodash';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { tap } from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'kometa-tenants-page',
  templateUrl: './tenants-page.component.html',
  styleUrls: ['./tenants-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TenantsPageComponent {
  readonly tenants$ = new BehaviorSubject<TenantFragment[]>([]);
  readonly totalRecords$ = new BehaviorSubject<number>(0);
  readonly loading$ = new BehaviorSubject<boolean>(false);
  queryRef?: QueryRef<GetTenantsQuery, GetTenantsQueryVariables>;

  constructor(
    private readonly getTenantsGQL: GetTenantsGQL,
    private readonly tenantDialogService: TenantDialogService
  ) {}

  async onLazyLoad(event: LazyLoadEvent): Promise<void> {
    if (this.queryRef) {
      await this.queryRef.setVariables(this.getFilter(event));
    } else {
      this.queryRef = this.getTenantsGQL.watch(this.getFilter(event), {
        useInitialLoading: true,
      });
      this.queryRef.valueChanges
        .pipe(
          tap(({ data, loading }) => {
            this.loading$.next(loading);
            if (data?.tenants) {
              this.tenants$.next(data.tenants.items ?? []);
              this.totalRecords$.next(data.tenants.totalCount ?? 0);
            }
          }),
          untilDestroyed(this)
        )
        .subscribe();
    }
  }

  onDetails(tenant: TenantFragment): void {
    this.tenantDialogService.openDetail(tenant);
  }

  onCreate(): void {
    this.tenantDialogService.openCreate();
  }

  onUpdate(tenant: TenantFragment): void {
    this.tenantDialogService.openUpdate(tenant);
  }

  onDelete(tenant: TenantFragment): void {
    this.tenantDialogService.openDelete(tenant);
  }

  private getFilter({ globalFilter, first, rows }: LazyLoadEvent): GetTenantsQueryVariables {
    let where: TenantFilterInput | undefined = undefined;

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
