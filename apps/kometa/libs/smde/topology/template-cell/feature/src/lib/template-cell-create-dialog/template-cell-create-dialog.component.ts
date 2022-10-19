import { BehaviorSubject, finalize, lastValueFrom } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { TemplateCellFormService } from '../template-cell-form.service';
import { CreateTemplateCellFormModel } from '@kometa/smde/topology/template-cell/ui';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import {
  CreateTemplateCellGQL,
  GetDataForCreateTemplateCellGQL,
} from '@kometa/smde/topology/template-cell/data-access';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { HttpClient } from '@angular/common/http';
import { EnvironmentService } from '@kometa/shared/abp';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { GetTemplatesCellDocument } from '@kometa/smde/topology/template-cell/types';

@UntilDestroy()
@Component({
  selector: 'kometa-template-cell-create-dialog',
  templateUrl: './template-cell-create-dialog.component.html',
  styleUrls: ['./template-cell-create-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateCellCreateDialogComponent {
  readonly formGroup: TypedFormGroup<CreateTemplateCellFormModel>;
  readonly sizes$ = new BehaviorSubject<{ id: string; name: string }[]>([]);

  constructor(
    private readonly createTemplateCellGQL: CreateTemplateCellGQL,
    private readonly getDataForCreateTemplateCellGQL: GetDataForCreateTemplateCellGQL,
    private readonly httpClient: HttpClient,
    private readonly environmentService: EnvironmentService,
    private readonly templateCellFormService: TemplateCellFormService,
    private readonly ref: DynamicDialogRef,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    this.formGroup = this.templateCellFormService.buildFormCreate();

    this.getDataForCreateTemplateCellGQL
      .watch(
        {},
        {
          useInitialLoading: false,
        }
      )
      .valueChanges.pipe(
        tap(({ data }) => {
          this.sizes$.next(data.sizes?.items ?? []);
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  async onSave({
    name,
    height,
    width,
    isCell,
    sizeId,
    image,
  }: CreateTemplateCellFormModel): Promise<void> {
    await this.spinner.show();

    const query$ = this.createTemplateCellGQL
      .mutate(
        {
          input: {
            name,
            height,
            width,
            isCell,
            sizeId,
            isImage: !!image,
          },
        },
        {
          refetchQueries: [GetTemplatesCellDocument],
        }
      )
      .pipe(
        untilDestroyed(this),
        finalize(() => this.spinner.hide())
      );

    const { data } = await lastValueFrom(query$);

    const templateCell = data?.createTemplateCell.templateCell;
    const errors = data?.createTemplateCell.errors;

    if (templateCell && image) {
      const api = this.environmentService.getApiUrl();

      const formData = new FormData();
      formData.append('file', image, image.name);
      await lastValueFrom(this.httpClient.post(`${api}/${templateCell.imageUrl}`, formData));
    }

    if (templateCell) {
      this.ref.close(templateCell);
    }

    if (errors) {
      for (const { message } of errors) {
        this.toastrService.error(message);
      }
    }
  }

  onCancel(): void {
    this.ref.close();
  }
}
