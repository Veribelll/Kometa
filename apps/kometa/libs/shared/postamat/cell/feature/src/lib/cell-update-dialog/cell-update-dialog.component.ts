import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { CellFormService } from '../cell-form.service';
import { finalize, tap } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { UpdateCellFormModel } from '@kometa/shared/postamat/cell/ui';
import { CellFragment, GetCellsDocument } from '@kometa/shared/postamat/cell/types';
import { UpdateCellGQL } from '@kometa/shared/postamat/cell/data-access';

@UntilDestroy()
@Component({
  selector: 'kometa-cell-update-dialog',
  templateUrl: './cell-update-dialog.component.html',
  styleUrls: ['./cell-update-dialog.component.scss'],
})
export class CellUpdateDialogComponent {
  readonly formGroup: TypedFormGroup<UpdateCellFormModel>;
  readonly cell: CellFragment;
  readonly postamatId: string;

  constructor(
    private readonly updateCellGQL: UpdateCellGQL,
    private readonly cellFormService: CellFormService,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    const { cell, postamatId } = this.config.data;

    this.cell = cell;
    this.postamatId = postamatId;
    this.formGroup = this.cellFormService.buildFormUpdate(this.postamatId, this.cell);
  }

  async onSave(input: UpdateCellFormModel): Promise<void> {
    await this.spinner.show();
    const { id } = this.cell;
    this.updateCellGQL
      .mutate(
        { input: { ...input, cellId: id, postamatId: this.postamatId } },
        {
          refetchQueries: [GetCellsDocument],
        }
      )
      .pipe(
        tap(({ data }) => {
          const result = data?.updateCell?.cell;
          const errors = data?.updateCell?.errors;

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
