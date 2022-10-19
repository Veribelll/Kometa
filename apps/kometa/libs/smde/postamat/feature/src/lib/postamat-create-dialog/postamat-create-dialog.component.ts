import { Component } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { PostamatFormService } from '../postamat-form.service';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { CreatePostamatFormModel } from '@kometa/smde/postamat/ui';
import { CreatePostamatGQL } from '@kometa/smde/postamat/data-access';
import { finalize, tap } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { GetPostamatsDocument } from '@kometa/smde/postamat/types';

@UntilDestroy()
@Component({
  selector: 'kometa-postamat-create-dialog',
  templateUrl: './postamat-create-dialog.component.html',
  styleUrls: ['./postamat-create-dialog.component.scss'],
})
export class PostamatCreateDialogComponent {
  readonly formGroup: TypedFormGroup<CreatePostamatFormModel>;

  constructor(
    private readonly createPostamatGQL: CreatePostamatGQL,
    private readonly postamatFormService: PostamatFormService,
    private readonly ref: DynamicDialogRef,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    this.formGroup = this.postamatFormService.buildFormCreate();
  }

  async onSave(input: CreatePostamatFormModel): Promise<void> {
    await this.spinner.show();
    this.createPostamatGQL
      .mutate(
        { input },
        {
          refetchQueries: [GetPostamatsDocument],
        }
      )
      .pipe(
        tap(({ data }) => {
          const result = data?.createPostamat?.postamat;
          const errors = data?.createPostamat?.errors;

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
