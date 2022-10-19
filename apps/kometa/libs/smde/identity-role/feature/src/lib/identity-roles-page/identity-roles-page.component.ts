import { BehaviorSubject } from 'rxjs';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { IdentityRoleDialogService } from '../identity-role-dialog.service';
import {
  GetIdentityRolesQuery,
  GetIdentityRolesQueryVariables,
  IdentityRoleFilterInput,
  IdentityRoleFragment,
  SortEnumType,
} from '@kometa/smde/identity-role/types';
import { isEmpty } from 'lodash';
import { GetIdentityRolesGQL } from '@kometa/smde/identity-role/data-access';
import { tap } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { QueryRef } from 'apollo-angular';

@UntilDestroy()
@Component({
  selector: 'kometa-identity-roles-page',
  templateUrl: './identity-roles-page.component.html',
  styleUrls: ['./identity-roles-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DialogService, IdentityRoleDialogService],
})
export class IdentityRolesPageComponent {
  readonly identityRoles$ = new BehaviorSubject<IdentityRoleFragment[]>([]);
  readonly totalRecords$ = new BehaviorSubject<number>(0);
  readonly loading$ = new BehaviorSubject<boolean>(false);
  queryRef?: QueryRef<GetIdentityRolesQuery, GetIdentityRolesQueryVariables>;

  constructor(
    private readonly getIdentityRolesGQL: GetIdentityRolesGQL,
    private readonly identityRoleDialogService: IdentityRoleDialogService
  ) {}

  async onLazyLoad(event: LazyLoadEvent): Promise<void> {
    if (this.queryRef) {
      await this.queryRef.setVariables(this.getFilter(event));
    } else {
      this.queryRef = this.getIdentityRolesGQL.watch(this.getFilter(event), {
        useInitialLoading: true,
      });
      this.queryRef.valueChanges
        .pipe(
          tap(({ data, loading }) => {
            this.loading$.next(loading);
            if (data?.identityRoles) {
              this.identityRoles$.next(data.identityRoles.items ?? []);
              this.totalRecords$.next(data.identityRoles.totalCount ?? 0);
            }
          }),
          untilDestroyed(this)
        )
        .subscribe();
    }
  }

  onDetails(identityRole: IdentityRoleFragment): void {
    this.identityRoleDialogService.openDetail(identityRole);
  }

  onCreate(): void {
    this.identityRoleDialogService.openCreate();
  }

  onUpdate(identityRole: IdentityRoleFragment): void {
    this.identityRoleDialogService.openUpdate(identityRole);
  }

  onDelete(identityRole: IdentityRoleFragment): void {
    this.identityRoleDialogService.openDelete(identityRole);
  }

  onUpdatePermissions({ name }: IdentityRoleFragment) {
    this.identityRoleDialogService.openUpdatePermissions(name);
  }

  private getFilter({ globalFilter, first, rows }: LazyLoadEvent): GetIdentityRolesQueryVariables {
    let where: IdentityRoleFilterInput = {
      isPublic: { eq: true },
    };

    if (!isEmpty(globalFilter)) {
      where = {
        or: [
          {
            name: { contains: globalFilter },
          },
        ],
        ...where,
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
