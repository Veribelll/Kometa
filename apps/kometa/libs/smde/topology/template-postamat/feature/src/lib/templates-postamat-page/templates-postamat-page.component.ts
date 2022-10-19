import { QueryRef } from 'apollo-angular';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import {
  GetTemplatesPostamatQuery,
  GetTemplatesPostamatQueryVariables,
  SortEnumType,
  TemplatePostamatFilterInput,
  TemplatePostamatFragment,
} from '@kometa/smde/topology/template-postamat/types';
import { TemplatePostamatDialogService } from '../template-postamat-dialog.service';
import { isEmpty } from 'lodash';
import { GetTemplatesPostamatGQL } from '@kometa/smde/topology/template-postamat/data-access';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'kometa-templates-postamat-page',
  templateUrl: './templates-postamat-page.component.html',
  styleUrls: ['./templates-postamat-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TemplatePostamatDialogService],
})
export class TemplatesPostamatPageComponent {
  readonly templatesPostamat$ = new BehaviorSubject<TemplatePostamatFragment[]>([]);
  readonly totalRecords$ = new BehaviorSubject<number>(0);
  readonly loading$ = new BehaviorSubject<boolean>(false);
  queryRef?: QueryRef<GetTemplatesPostamatQuery, GetTemplatesPostamatQueryVariables>;

  constructor(
    private readonly getTemplatesPostamatGQL: GetTemplatesPostamatGQL,
    private readonly templatePostamatDialogService: TemplatePostamatDialogService
  ) {}

  async onLazyLoad(event: LazyLoadEvent): Promise<void> {
    if (this.queryRef) {
      await this.queryRef.setVariables(this.getFilter(event));
    } else {
      this.queryRef = this.getTemplatesPostamatGQL.watch(this.getFilter(event), {
        useInitialLoading: true,
      });
      this.queryRef.valueChanges
        .pipe(
          tap(({ data, loading }) => {
            this.loading$.next(loading);
            if (data?.templatesPostamat) {
              this.templatesPostamat$.next(data.templatesPostamat.items ?? []);
              this.totalRecords$.next(data.templatesPostamat.totalCount ?? 0);
            }
          }),
          untilDestroyed(this)
        )
        .subscribe();
    }
  }

  onDetails(templatePostamat: TemplatePostamatFragment) {
    this.templatePostamatDialogService.openDetail(templatePostamat);
  }

  onCreate(): void {
    this.templatePostamatDialogService.openCreate();
  }

  onUpdate(templatePostamat: TemplatePostamatFragment) {
    this.templatePostamatDialogService.openUpdate(templatePostamat);
  }

  onDelete(templatePostamat: TemplatePostamatFragment): void {
    this.templatePostamatDialogService.openDelete(templatePostamat);
  }

  private getFilter({
    globalFilter,
    first,
    rows,
  }: LazyLoadEvent): GetTemplatesPostamatQueryVariables {
    let where: TemplatePostamatFilterInput | undefined = undefined;
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
