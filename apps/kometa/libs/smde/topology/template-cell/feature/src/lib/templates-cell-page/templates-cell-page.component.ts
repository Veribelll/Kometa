import { BehaviorSubject } from 'rxjs';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import {
  GetTemplatesCellQuery,
  GetTemplatesCellQueryVariables,
  SortEnumType,
  TemplateCellFilterInput,
  TemplateCellFragment,
} from '@kometa/smde/topology/template-cell/types';
import { TemplateCellDialogService } from '../template-cell-dialog.service';
import { isEmpty } from 'lodash';
import { QueryRef } from 'apollo-angular';
import { GetTemplatesCellGQL } from '@kometa/smde/topology/template-cell/data-access';
import { tap } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'kometa-templates-cell-page',
  templateUrl: './templates-cell-page.component.html',
  styleUrls: ['./templates-cell-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TemplateCellDialogService],
})
export class TemplatesCellPageComponent {
  readonly templatesCell$ = new BehaviorSubject<TemplateCellFragment[]>([]);
  readonly totalRecords$ = new BehaviorSubject<number>(0);
  readonly loading$ = new BehaviorSubject<boolean>(false);
  queryRef?: QueryRef<GetTemplatesCellQuery, GetTemplatesCellQueryVariables>;

  constructor(
    private readonly getTemplatesCellGQL: GetTemplatesCellGQL,
    private readonly templateCellDialogService: TemplateCellDialogService
  ) {}

  async onLazyLoad(event: LazyLoadEvent): Promise<void> {
    if (this.queryRef) {
      await this.queryRef.setVariables(this.getFilter(event));
    } else {
      this.queryRef = this.getTemplatesCellGQL.watch(this.getFilter(event), {
        useInitialLoading: true,
      });

      this.queryRef.valueChanges
        .pipe(
          tap(({ data, loading }) => {
            this.loading$.next(loading);
            if (data?.templatesCell) {
              this.templatesCell$.next(data.templatesCell.items ?? []);
              this.totalRecords$.next(data.templatesCell.totalCount ?? 0);
            }
          }),
          untilDestroyed(this)
        )
        .subscribe();
    }
  }

  onDetails(templateCell: TemplateCellFragment): void {
    this.templateCellDialogService.openDetail(templateCell);
  }

  onCreate(): void {
    this.templateCellDialogService.openCreate();
  }

  onUpdate(templateCell: TemplateCellFragment): void {
    this.templateCellDialogService.openUpdate(templateCell);
  }

  onDelete(templateCell: TemplateCellFragment): void {
    this.templateCellDialogService.openDelete(templateCell);
  }

  private getFilter({ globalFilter, first, rows }: LazyLoadEvent): GetTemplatesCellQueryVariables {
    let where: TemplateCellFilterInput | undefined = undefined;
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
