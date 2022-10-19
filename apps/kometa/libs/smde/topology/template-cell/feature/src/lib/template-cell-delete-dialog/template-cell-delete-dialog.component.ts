import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import {
  GetTemplatesCellDocument,
  TemplateCellFragment,
} from '@kometa/smde/topology/template-cell/types';
import { DeleteTemplateCellGQL } from '@kometa/smde/topology/template-cell/data-access';
import { finalize, tap } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@UntilDestroy()
@Component({
  selector: 'kometa-template-cell-delete-dialog',
  templateUrl: './template-cell-delete-dialog.component.html',
  styleUrls: ['./template-cell-delete-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateCellDeleteDialogComponent {
  readonly templateCell: TemplateCellFragment;

  constructor(
    private readonly deleteTemplateCellGQL: DeleteTemplateCellGQL,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    const { templateCell } = this.config.data;

    this.templateCell = templateCell;
  }

  async onDelete(): Promise<void> {
    await this.spinner.show();
    const { id } = this.templateCell;
    this.deleteTemplateCellGQL
      .mutate(
        { input: { id } },
        {
          refetchQueries: [GetTemplatesCellDocument],
        }
      )
      .pipe(
        tap(({ data }) => {
          const tenant = data?.deleteTemplateCell?.templateCell;
          const errors = data?.deleteTemplateCell?.errors;

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
