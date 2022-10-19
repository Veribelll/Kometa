import { BehaviorSubject, Observable } from 'rxjs';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { TemplateSectionFormService } from '../template-section-form.service';
import { CreateTemplateSectionFormModel } from '@kometa/smde/topology/template-section/ui';
import { finalize, map, tap } from 'rxjs/operators';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import {
  CreateTemplateSectionGQL,
  GetDataForCreateTemplateSectionGQL,
} from '@kometa/smde/topology/template-section/data-access';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import {
  GetDataForCreateTemplateSectionQuery,
  GetTemplatesSectionDocument,
} from '@kometa/smde/topology/template-section/types';
import { Cell } from '@kometa/shared/topology/ui';

@UntilDestroy()
@Component({
  selector: 'kometa-template-section-create-dialog',
  templateUrl: './template-section-create-dialog.component.html',
  styleUrls: ['./template-section-create-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateSectionCreateDialogComponent {
  readonly formGroup: TypedFormGroup<CreateTemplateSectionFormModel>;
  readonly templatesCell$ = new BehaviorSubject<
    NonNullable<NonNullable<GetDataForCreateTemplateSectionQuery['templatesCell']>['items']>
  >([]);

  readonly selectableList$: Observable<Cell[]> = this.templatesCell$.pipe(
    map((x) =>
      x.map((t) => ({
        name: t.name,
        width: t.width,
        height: t.height,
        size: t.size,
        isCell: t.isCell,
        imageUrl: t.imageUrl,
        templateId: t.id,
      }))
    )
  );

  constructor(
    private readonly createTemplateSectionGQL: CreateTemplateSectionGQL,
    private readonly getDataForCreateTemplateSectionGQL: GetDataForCreateTemplateSectionGQL,
    private readonly templateSectionFormService: TemplateSectionFormService,
    private readonly ref: DynamicDialogRef,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    this.formGroup = this.templateSectionFormService.buildFormCreate();

    this.getDataForCreateTemplateSectionGQL
      .watch(
        {},
        {
          useInitialLoading: false,
        }
      )
      .valueChanges.pipe(
        tap(({ data }) => {
          this.templatesCell$.next(data.templatesCell?.items ?? []);
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  async onSave(input: CreateTemplateSectionFormModel): Promise<void> {
    await this.spinner.show();
    this.createTemplateSectionGQL
      .mutate(
        { input },
        {
          refetchQueries: [GetTemplatesSectionDocument],
        }
      )
      .pipe(
        tap(({ data }) => {
          const result = data?.createTemplateSection?.templateSection;
          const errors = data?.createTemplateSection?.errors;

          if (result) {
            this.ref.close(result);
          }

          if (errors) {
            for (const { message } of errors) {
              this.toastrService.error(message);
            }
          }
        }),
        untilDestroyed(this),
        finalize(() => this.spinner.hide())
      )
      .subscribe();
  }

  onCancel(): void {
    this.ref.close();
  }
}
