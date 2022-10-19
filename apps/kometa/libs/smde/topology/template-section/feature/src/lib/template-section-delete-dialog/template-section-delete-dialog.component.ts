import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import {
  GetTemplatesSectionDocument,
  TemplateSectionFragment,
} from '@kometa/smde/topology/template-section/types';
import { DeleteTemplateSectionGQL } from '@kometa/smde/topology/template-section/data-access';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { finalize, tap } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@UntilDestroy()
@Component({
  selector: 'kometa-template-section-delete-dialog',
  templateUrl: './template-section-delete-dialog.component.html',
  styleUrls: ['./template-section-delete-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateSectionDeleteDialogComponent {
  readonly templateSection: TemplateSectionFragment;

  constructor(
    private readonly deleteTemplateSectionGQL: DeleteTemplateSectionGQL,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    const { templateSection } = this.config.data;

    this.templateSection = templateSection;
  }

  async onDelete(): Promise<void> {
    await this.spinner.show();
    const { id } = this.templateSection;
    this.deleteTemplateSectionGQL
      .mutate(
        { input: { id } },
        {
          refetchQueries: [GetTemplatesSectionDocument],
        }
      )
      .pipe(
        tap(({ data }) => {
          const result = data?.deleteTemplateSection?.templateSection;
          const errors = data?.deleteTemplateSection?.errors;

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
