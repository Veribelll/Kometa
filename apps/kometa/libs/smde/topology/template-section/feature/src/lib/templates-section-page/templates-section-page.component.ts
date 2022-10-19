import { BehaviorSubject } from 'rxjs';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import {
  GetTemplatesSectionQuery,
  GetTemplatesSectionQueryVariables,
  SortEnumType,
  TemplateSectionFilterInput,
  TemplateSectionFragment,
} from '@kometa/smde/topology/template-section/types';
import { TemplateSectionDialogService } from '../template-section-dialog.service';
import { isEmpty } from 'lodash';
import { GetTemplatesSectionGQL } from '@kometa/smde/topology/template-section/data-access';
import { QueryRef } from 'apollo-angular';
import { tap } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'kometa-templates-section-page',
  templateUrl: './templates-section-page.component.html',
  styleUrls: ['./templates-section-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TemplateSectionDialogService],
})
export class TemplatesSectionPageComponent {
  readonly templatesSection$ = new BehaviorSubject<TemplateSectionFragment[]>([]);
  readonly totalRecords$ = new BehaviorSubject<number>(0);
  readonly loading$ = new BehaviorSubject<boolean>(false);
  queryRef?: QueryRef<GetTemplatesSectionQuery, GetTemplatesSectionQueryVariables>;

  constructor(
    private readonly getTemplatesSectionGQL: GetTemplatesSectionGQL,
    private readonly templateSectionDialogService: TemplateSectionDialogService
  ) {}

  async onLazyLoad(event: LazyLoadEvent): Promise<void> {
    if (this.queryRef) {
      await this.queryRef.setVariables(this.getFilter(event));
    } else {
      this.queryRef = this.getTemplatesSectionGQL.watch(this.getFilter(event), {
        useInitialLoading: true,
      });
      this.queryRef.valueChanges
        .pipe(
          tap(({ data, loading }) => {
            this.loading$.next(loading);
            if (data?.templatesSection) {
              this.templatesSection$.next(data.templatesSection.items ?? []);
              this.totalRecords$.next(data.templatesSection.totalCount ?? 0);
            }
          }),
          untilDestroyed(this)
        )
        .subscribe();
    }
  }

  onDetails(templateSection: TemplateSectionFragment) {
    this.templateSectionDialogService.openDetail(templateSection);
  }

  onCreate(): void {
    this.templateSectionDialogService.openCreate();
  }

  onUpdate(templateSection: TemplateSectionFragment) {
    this.templateSectionDialogService.openUpdate(templateSection);
  }

  onDelete(templateSection: TemplateSectionFragment): void {
    this.templateSectionDialogService.openDelete(templateSection);
  }

  private getFilter({
    globalFilter,
    first,
    rows,
  }: LazyLoadEvent): GetTemplatesSectionQueryVariables {
    let where: TemplateSectionFilterInput | undefined = undefined;
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
