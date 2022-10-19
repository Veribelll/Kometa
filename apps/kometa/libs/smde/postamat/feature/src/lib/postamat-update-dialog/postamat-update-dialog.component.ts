import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PostamatFormService } from '../postamat-form.service';
import { GetPostamatsDocument, PostamatFragment } from '@kometa/smde/postamat/types';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { UpdatePostamatFormModel } from '@kometa/smde/postamat/ui';
import { UpdatePostamatGQL } from '@kometa/smde/postamat/data-access';
import { finalize, tap } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@UntilDestroy()
@Component({
  selector: 'kometa-postamat-update-dialog',
  templateUrl: './postamat-update-dialog.component.html',
  styleUrls: ['./postamat-update-dialog.component.scss'],
})
export class PostamatUpdateDialogComponent {
  readonly formGroup: TypedFormGroup<UpdatePostamatFormModel>;
  readonly postamat: PostamatFragment;

  constructor(
    private readonly updatePostamatGQL: UpdatePostamatGQL,
    private readonly postamatFormService: PostamatFormService,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    const { postamat } = this.config.data;

    this.postamat = postamat;
    this.formGroup = this.postamatFormService.buildFormUpdate(this.postamat);
  }

  async onSave(input: UpdatePostamatFormModel): Promise<void> {
    await this.spinner.show();
    const { id } = this.postamat;
    this.updatePostamatGQL
      .mutate(
        { input: { ...input, id } },
        {
          refetchQueries: [GetPostamatsDocument],
        }
      )
      .pipe(
        tap(({ data }) => {
          const result = data?.updatePostamat?.postamat;
          const errors = data?.updatePostamat?.errors;

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
