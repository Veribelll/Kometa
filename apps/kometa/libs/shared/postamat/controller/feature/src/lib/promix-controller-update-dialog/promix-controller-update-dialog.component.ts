import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PromixControllerFormService } from '../promix-controller-form.service';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { finalize, tap } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { UpdatePromixControllerFormModel } from '@kometa/shared/postamat/controller/ui';
import {
  GetControllersDocument,
  PromixControllerFragment,
} from '@kometa/shared/postamat/controller/types';
import { UpdatePromixControllerGQL } from '@kometa/shared/postamat/controller/data-access';

@UntilDestroy()
@Component({
  selector: 'kometa-promix-controller-update-dialog',
  templateUrl: './promix-controller-update-dialog.component.html',
  styleUrls: ['./promix-controller-update-dialog.component.scss'],
})
export class PromixControllerUpdateDialogComponent {
  readonly formGroup: TypedFormGroup<UpdatePromixControllerFormModel>;
  readonly postamatId: string;
  readonly controller: PromixControllerFragment;
  readonly ports?: string[];

  constructor(
    private readonly updatePromixControllerGQL: UpdatePromixControllerGQL,
    private readonly promixControllerFormService: PromixControllerFormService,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    const { controller, postamatId, ports } = this.config.data;

    this.postamatId = postamatId;
    this.controller = controller;
    this.ports = ports;
    this.formGroup = this.promixControllerFormService.buildFormUpdate(
      this.postamatId,
      this.controller
    );
  }

  async onSave(input: UpdatePromixControllerFormModel): Promise<void> {
    await this.spinner.show();
    const { id } = this.controller;
    this.updatePromixControllerGQL
      .mutate(
        { input: { ...input, postamatId: this.postamatId, controllerId: id } },
        {
          refetchQueries: [GetControllersDocument],
        }
      )
      .pipe(
        tap(({ data }) => {
          const result = data?.updatePromixController?.promixController;
          const errors = data?.updatePromixController?.errors;

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
