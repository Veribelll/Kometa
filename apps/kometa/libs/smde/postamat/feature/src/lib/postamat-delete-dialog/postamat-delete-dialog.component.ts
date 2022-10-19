import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { GetPostamatsDocument, PostamatFragment } from '@kometa/smde/postamat/types';
import { DeletePostamatGQL } from '@kometa/smde/postamat/data-access';
import { finalize, tap } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@UntilDestroy()
@Component({
  selector: 'kometa-postamat-delete-dialog',
  templateUrl: './postamat-delete-dialog.component.html',
  styleUrls: ['./postamat-delete-dialog.component.scss'],
})
export class PostamatDeleteDialogComponent {
  readonly postamat: PostamatFragment;

  constructor(
    private readonly deletePostamatGQL: DeletePostamatGQL,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    const { postamat } = this.config.data;

    this.postamat = postamat;
  }

  async onDelete(): Promise<void> {
    await this.spinner.show();
    const { id } = this.postamat;
    this.deletePostamatGQL
      .mutate(
        { input: { id } },
        {
          refetchQueries: [GetPostamatsDocument],
        }
      )
      .pipe(
        tap(({ data }) => {
          const result = data?.deletePostamat?.postamat;
          const errors = data?.deletePostamat?.errors;

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
