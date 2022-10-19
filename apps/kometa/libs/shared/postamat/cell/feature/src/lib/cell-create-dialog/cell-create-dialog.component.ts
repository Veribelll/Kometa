import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CellFormService } from '../cell-form.service';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { finalize, tap } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CreateCellFormModel } from '@kometa/shared/postamat/cell/ui';
import { GetCellsDocument } from '@kometa/shared/postamat/cell/types';
import { CreateCellGQL } from '@kometa/shared/postamat/cell/data-access';

@UntilDestroy()
@Component({
  selector: 'kometa-cell-create-dialog',
  templateUrl: './cell-create-dialog.component.html',
  styleUrls: ['./cell-create-dialog.component.scss'],
})
export class CellCreateDialogComponent {
  readonly formGroup: TypedFormGroup<CreateCellFormModel>;
  readonly postamatId: string;

  constructor(
    private readonly createCellGQL: CreateCellGQL,
    private readonly cellFormService: CellFormService,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    const { postamatId } = this.config.data;

    this.postamatId = postamatId;
    this.formGroup = this.cellFormService.buildFormCreate(this.postamatId);
  }

  async onSave(input: CreateCellFormModel): Promise<void> {
    await this.spinner.show();
    this.createCellGQL
      .mutate(
        { input: { ...input, postamatId: this.postamatId } },
        {
          refetchQueries: [GetCellsDocument],
        }
      )
      .pipe(
        tap(({ data }) => {
          const result = data?.createCell?.cell;
          const errors = data?.createCell?.errors;

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
