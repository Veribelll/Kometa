import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import {
  GetTemplatesSectionDocument,
  TemplateSectionFragment,
} from '@kometa/smde/topology/template-section/types';
import { TemplateSectionFormService } from '../template-section-form.service';
import { UpdateTemplateSectionFormModel } from '@kometa/smde/topology/template-section/ui';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { UpdateTemplateSectionGQL } from '@kometa/smde/topology/template-section/data-access';
import { finalize, tap } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@UntilDestroy()
@Component({
  selector: 'kometa-template-section-update-dialog',
  templateUrl: './template-section-update-dialog.component.html',
  styleUrls: ['./template-section-update-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateSectionUpdateDialogComponent {
  readonly formGroup: TypedFormGroup<UpdateTemplateSectionFormModel>;
  readonly templateSection: TemplateSectionFragment;

  constructor(
    private readonly updateTemplateSectionGQL: UpdateTemplateSectionGQL,
    private readonly templateSectionFormService: TemplateSectionFormService,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    const { templateSection } = this.config.data;

    this.templateSection = templateSection;
    this.formGroup = this.templateSectionFormService.buildFormUpdate(this.templateSection);
  }

  async onSave(input: UpdateTemplateSectionFormModel): Promise<void> {
    await this.spinner.show();
    const { id } = this.templateSection;
    this.updateTemplateSectionGQL
      .mutate(
        { input: { ...input, id } },
        {
          refetchQueries: [GetTemplatesSectionDocument],
        }
      )
      .pipe(
        tap(({ data }) => {
          const result = data?.updateTemplateSection?.templateSection;
          const errors = data?.updateTemplateSection?.errors;

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
