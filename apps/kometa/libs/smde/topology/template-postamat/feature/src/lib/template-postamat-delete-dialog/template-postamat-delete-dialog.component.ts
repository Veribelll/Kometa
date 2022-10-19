import { finalize, tap } from 'rxjs/operators';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import {
  GetTemplatesPostamatDocument,
  TemplatePostamatFragment,
} from '@kometa/smde/topology/template-postamat/types';
import { DeleteTemplatePostamatGQL } from '@kometa/smde/topology/template-postamat/data-access';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@UntilDestroy()
@Component({
  selector: 'kometa-template-postamat-delete-dialog',
  templateUrl: './template-postamat-delete-dialog.component.html',
  styleUrls: ['./template-postamat-delete-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplatePostamatDeleteDialogComponent {
  readonly templatePostamat: TemplatePostamatFragment;

  constructor(
    private readonly deleteTemplatePostamatGQL: DeleteTemplatePostamatGQL,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    const { templatePostamat } = this.config.data;

    this.templatePostamat = templatePostamat;
  }

  async onDelete(): Promise<void> {
    await this.spinner.show();
    const { id } = this.templatePostamat;
    this.deleteTemplatePostamatGQL
      .mutate(
        { input: { id } },
        {
          refetchQueries: [GetTemplatesPostamatDocument],
        }
      )
      .pipe(
        tap(({ data }) => {
          const result = data?.deleteTemplatePostamat?.templatePostamat;
          const errors = data?.deleteTemplatePostamat?.errors;

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
