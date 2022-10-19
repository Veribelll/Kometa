import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { TemplatePostamatFormService } from '../template-postamat-form.service';
import { CreateTemplatePostamatFormModel } from '@kometa/smde/topology/template-postamat/ui';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { finalize, map, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  CreateTemplatePostamatGQL,
  GetDataForCreateTemplatePostamatGQL,
} from '@kometa/smde/topology/template-postamat/data-access';
import {
  GetDataForCreateTemplatePostamatQuery,
  GetTemplatesPostamatDocument,
} from '@kometa/smde/topology/template-postamat/types';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Section } from '@kometa/shared/topology/ui';

@UntilDestroy()
@Component({
  selector: 'kometa-template-postamat-create-dialog',
  templateUrl: './template-postamat-create-dialog.component.html',
  styleUrls: ['./template-postamat-create-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplatePostamatCreateDialogComponent {
  readonly formGroup: TypedFormGroup<CreateTemplatePostamatFormModel>;
  readonly templatesSection$ = new BehaviorSubject<
    NonNullable<NonNullable<GetDataForCreateTemplatePostamatQuery['templatesSection']>['items']>
  >([]);

  readonly selectableList$: Observable<Section[]> = this.templatesSection$.pipe(
    map((x) =>
      x.map(({ id, name, cells }) => ({
        name,
        templateId: id,
        cells: cells.map(({ templateCell }) => ({
          name: templateCell.name,
          width: templateCell.width,
          height: templateCell.height,
          size: templateCell.size,
          isCell: templateCell.isCell,
          imageUrl: templateCell.imageUrl,
          templateId: templateCell.id,
        })),
      }))
    )
  );

  constructor(
    private readonly createTemplatePostamatGQL: CreateTemplatePostamatGQL,
    private readonly getDataForCreateTemplatePostamatGQL: GetDataForCreateTemplatePostamatGQL,
    private readonly templatePostamatFormService: TemplatePostamatFormService,
    private readonly ref: DynamicDialogRef,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    this.formGroup = this.templatePostamatFormService.buildFormCreate();

    this.getDataForCreateTemplatePostamatGQL
      .watch(
        {},
        {
          useInitialLoading: false,
        }
      )
      .valueChanges.pipe(
        tap(({ data }) => {
          this.templatesSection$.next(data.templatesSection?.items ?? []);
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  async onSave(input: CreateTemplatePostamatFormModel): Promise<void> {
    await this.spinner.show();
    this.createTemplatePostamatGQL
      .mutate(
        { input },
        {
          refetchQueries: [GetTemplatesPostamatDocument],
        }
      )
      .pipe(
        tap(({ data }) => {
          const result = data?.createTemplatePostamat?.templatePostamat;
          const errors = data?.createTemplatePostamat?.errors;

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
