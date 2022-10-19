import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import {
  GetTemplatesPostamatDocument,
  TemplatePostamatFragment,
} from '@kometa/smde/topology/template-postamat/types';
import { TemplatePostamatFormService } from '../template-postamat-form.service';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { UpdateTemplatePostamatFormModel } from '@kometa/smde/topology/template-postamat/ui';
import { UpdateTemplatePostamatGQL } from '@kometa/smde/topology/template-postamat/data-access';
import { finalize, tap } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@UntilDestroy()
@Component({
  selector: 'kometa-template-postamat-update-dialog',
  templateUrl: './template-postamat-update-dialog.component.html',
  styleUrls: ['./template-postamat-update-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplatePostamatUpdateDialogComponent {
  readonly formGroup: TypedFormGroup<UpdateTemplatePostamatFormModel>;
  readonly templatePostamat: TemplatePostamatFragment;

  constructor(
    private readonly updateTemplatePostamatGQL: UpdateTemplatePostamatGQL,
    private readonly templatePostamatFormService: TemplatePostamatFormService,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    const { templatePostamat } = this.config.data;

    this.templatePostamat = templatePostamat;
    this.formGroup = this.templatePostamatFormService.buildFormUpdate(this.templatePostamat);
  }

  async onSave(input: UpdateTemplatePostamatFormModel): Promise<void> {
    await this.spinner.show();
    const { id } = this.templatePostamat;
    this.updateTemplatePostamatGQL
      .mutate(
        { input: { ...input, id } },
        {
          refetchQueries: [GetTemplatesPostamatDocument],
        }
      )
      .pipe(
        tap(({ data }) => {
          const result = data?.updateTemplatePostamat?.templatePostamat;
          const errors = data?.updateTemplatePostamat?.errors;

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
