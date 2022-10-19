import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { finalize, tap } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import {
  GetControllersDocument,
  PromixControllerFragment,
} from '@kometa/shared/postamat/controller/types';
import { DeletePromixControllerGQL } from '@kometa/shared/postamat/controller/data-access';

@UntilDestroy()
@Component({
  selector: 'kometa-promix-controller-delete-dialog',
  templateUrl: './promix-controller-delete-dialog.component.html',
  styleUrls: ['./promix-controller-delete-dialog.component.scss'],
})
export class PromixControllerDeleteDialogComponent {
  readonly postamatId: string;
  readonly controller: PromixControllerFragment;

  constructor(
    private readonly deletePromixControllerGQL: DeletePromixControllerGQL,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    const { controller, postamatId } = this.config.data;

    this.postamatId = postamatId;
    this.controller = controller;
  }

  async onDelete(): Promise<void> {
    await this.spinner.show();
    const { id } = this.controller;
    this.deletePromixControllerGQL
      .mutate(
        { input: { postamatId: this.postamatId, controllerId: id } },
        {
          refetchQueries: [GetControllersDocument],
        }
      )
      .pipe(
        tap(({ data }) => {
          const result = data?.deletePromixController?.promixController;
          const errors = data?.deletePromixController?.errors;

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
