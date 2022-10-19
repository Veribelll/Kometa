import { finalize, tap } from 'rxjs/operators';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import {
  GetTemplatesCellDocument,
  TemplateCellFragment,
} from '@kometa/smde/topology/template-cell/types';
import { TemplateCellFormService } from '../template-cell-form.service';
import { UpdateTemplateCellFormModel } from '@kometa/smde/topology/template-cell/ui';
import { BehaviorSubject } from 'rxjs';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import {
  GetDataForUpdateTemplateCellGQL,
  UpdateTemplateCellGQL,
} from '@kometa/smde/topology/template-cell/data-access';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@UntilDestroy()
@Component({
  selector: 'kometa-template-cell-update-dialog',
  templateUrl: './template-cell-update-dialog.component.html',
  styleUrls: ['./template-cell-update-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateCellUpdateDialogComponent {
  readonly formGroup: TypedFormGroup<UpdateTemplateCellFormModel>;
  readonly templateCell: TemplateCellFragment;
  readonly sizes$ = new BehaviorSubject<{ id: string; name: string }[]>([]);

  constructor(
    private readonly updateTemplateCellGQL: UpdateTemplateCellGQL,
    private readonly getDataForUpdateTemplateCellGQL: GetDataForUpdateTemplateCellGQL,
    private readonly templateCellFormService: TemplateCellFormService,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    const { templateCell } = this.config.data;

    this.templateCell = templateCell;
    this.formGroup = this.templateCellFormService.buildFormUpdate(this.templateCell);

    this.getDataForUpdateTemplateCellGQL
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

  async onSave(input: UpdateTemplateCellFormModel): Promise<void> {
    await this.spinner.show();
    const { id } = this.templateCell;
    this.updateTemplateCellGQL
      .mutate(
        { input: { ...input, id } },
        {
          refetchQueries: [GetTemplatesCellDocument],
        }
      )
      .pipe(
        tap(({ data }) => {
          const tenant = data?.updateTemplateCell?.templateCell;
          const errors = data?.updateTemplateCell?.errors;

          if (tenant) {
            this.ref.close(tenant);
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
