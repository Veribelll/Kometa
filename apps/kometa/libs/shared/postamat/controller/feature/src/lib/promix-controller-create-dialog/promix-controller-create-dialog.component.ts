import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PromixControllerFormService } from '../promix-controller-form.service';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { finalize, tap } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CreatePromixControllerFormModel } from '@kometa/shared/postamat/controller/ui';
import { GetControllersDocument } from '@kometa/shared/postamat/controller/types';
import { CreatePromixControllerGQL } from '@kometa/shared/postamat/controller/data-access';

@UntilDestroy()
@Component({
  selector: 'kometa-promix-controller-create-dialog',
  templateUrl: './promix-controller-create-dialog.component.html',
  styleUrls: ['./promix-controller-create-dialog.component.scss'],
})
export class PromixControllerCreateDialogComponent {
  readonly postamatId: string;
  readonly formGroup: TypedFormGroup<CreatePromixControllerFormModel>;
  readonly ports?: string[];

  constructor(
    private readonly createPromixControllerGQL: CreatePromixControllerGQL,
    private readonly promixControllerFormService: PromixControllerFormService,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    const { postamatId, ports } = this.config.data;

    this.postamatId = postamatId;
    this.ports = ports;
    this.formGroup = this.promixControllerFormService.buildFormCreate(this.postamatId);
  }

  async onSave(input: CreatePromixControllerFormModel): Promise<void> {
    await this.spinner.show();
    this.createPromixControllerGQL
      .mutate(
        { input: { ...input, postamatId: this.postamatId } },
        {
          refetchQueries: [GetControllersDocument],
        }
      )
      .pipe(
        tap(({ data }) => {
          const result = data?.createPromixController?.promixController;
          const errors = data?.createPromixController?.errors;

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
