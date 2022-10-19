import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { finalize, tap } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CellFragment, GetCellsDocument } from '@kometa/shared/postamat/cell/types';
import { DeleteCellGQL } from '@kometa/shared/postamat/cell/data-access';

@UntilDestroy()
@Component({
  selector: 'kometa-cell-delete-dialog',
  templateUrl: './cell-delete-dialog.component.html',
  styleUrls: ['./cell-delete-dialog.component.scss'],
})
export class CellDeleteDialogComponent {
  readonly cell: CellFragment;
  readonly postamatId: string;

  constructor(
    private readonly deleteCellGQL: DeleteCellGQL,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    const { cell, postamatId } = this.config.data;

    this.postamatId = postamatId;
    this.cell = cell;
  }

  async onDelete(): Promise<void> {
    await this.spinner.show();
    const { id } = this.cell;
    this.deleteCellGQL
      .mutate(
        { input: { cellId: id, postamatId: this.postamatId } },
        {
          refetchQueries: [GetCellsDocument],
        }
      )
      .pipe(
        tap(({ data }) => {
          const result = data?.deleteCell?.cell;
          const errors = data?.deleteCell?.errors;

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
