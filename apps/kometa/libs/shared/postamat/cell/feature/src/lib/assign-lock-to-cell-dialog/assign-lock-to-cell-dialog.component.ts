import { Component } from '@angular/core';
import { AssignLockToCellFormModel } from '@kometa/shared/postamat/cell/ui';
import {
  CellFragment,
  GetCellsDocument,
  GetDataForAssignLockToCellQuery,
} from '@kometa/shared/postamat/cell/types';
import { TypedFormBuilder, TypedFormGroup } from '@kometa/shared/typed-form';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import {
  AssignLockToCellGQL,
  GetDataForAssignLockToCellGQL,
} from '@kometa/shared/postamat/cell/data-access';
import { finalize, tap } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject } from 'rxjs';
import { Validators } from '@angular/forms';

type Controller = GetDataForAssignLockToCellQuery['controllers'][0];

@UntilDestroy()
@Component({
  selector: 'kometa-assign-lock-to-cell-dialog',
  templateUrl: './assign-lock-to-cell-dialog.component.html',
  styleUrls: ['./assign-lock-to-cell-dialog.component.scss'],
})
export class AssignLockToCellDialogComponent {
  readonly formGroup: TypedFormGroup<AssignLockToCellFormModel>;
  readonly controllers$ = new BehaviorSubject<Controller[]>([]);
  readonly cell: CellFragment;
  readonly postamatId: string;

  constructor(
    private readonly assignLockToCellGQL: AssignLockToCellGQL,
    private readonly getDataGQL: GetDataForAssignLockToCellGQL,
    private readonly fb: TypedFormBuilder,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    const { cell, postamatId } = this.config.data;

    this.cell = cell;
    this.postamatId = postamatId;
    this.formGroup = this.fb.group<AssignLockToCellFormModel>({
      lockId: this.fb.control(this.cell.lockId ?? null, [Validators.required]),
    });
    this.getDataGQL
      .fetch({ postamatId })
      .pipe(
        tap(({ data }) => {
          if (data) {
            this.controllers$.next(data.controllers);
          }
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  async onSave(input: AssignLockToCellFormModel): Promise<void> {
    await this.spinner.show();
    this.assignLockToCellGQL
      .mutate(
        { input: { ...input, postamatId: this.postamatId, cellId: this.cell.id } },
        {
          refetchQueries: [GetCellsDocument],
        }
      )
      .pipe(
        tap(({ data }) => {
          const result = data?.postamatAssignLockToCell?.postamat;
          const errors = data?.postamatAssignLockToCell?.errors;

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
