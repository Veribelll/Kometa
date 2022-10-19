import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { IndividualEntrepreneurFormService } from '../individual-entrepreneur-form.service';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { GetContractorsDocument } from '@kometa/smde/contractor/types';
import { UpdateIndividualEntrepreneurFormModel } from '@kometa/smde/contractor/ui';
import {
  GetIndividualEntrepreneurGQL,
  UpdateIndividualEntrepreneurGQL,
} from '@kometa/smde/contractor/data-access';
import { finalize, tap } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'kometa-individual-entrepreneur-update-dialog',
  templateUrl: './individual-entrepreneur-update-dialog.component.html',
  styleUrls: ['./individual-entrepreneur-update-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndividualEntrepreneurUpdateDialogComponent {
  readonly id: string;
  readonly loading$ = new BehaviorSubject(false);
  formGroup?: TypedFormGroup<UpdateIndividualEntrepreneurFormModel>;

  constructor(
    private readonly getIndividualEntrepreneurGQL: GetIndividualEntrepreneurGQL,
    private readonly updateIndividualEntrepreneurGQL: UpdateIndividualEntrepreneurGQL,
    private readonly individualEntrepreneurFormService: IndividualEntrepreneurFormService,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    const { id } = this.config.data;

    this.id = id;

    this.getIndividualEntrepreneurGQL
      .watch(
        { id },
        {
          useInitialLoading: true,
        }
      )
      .valueChanges.pipe(
        tap(({ data, loading }) => {
          this.loading$.next(loading);
          if (data?.individualEntrepreneurById) {
            this.formGroup = this.individualEntrepreneurFormService.buildFormUpdate(
              data.individualEntrepreneurById
            );
          }
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  async onSave(input: UpdateIndividualEntrepreneurFormModel): Promise<void> {
    await this.spinner.show();
    this.updateIndividualEntrepreneurGQL
      .mutate(
        { input: { ...input, id: this.id } },
        {
          refetchQueries: [GetContractorsDocument],
        }
      )
      .pipe(
        tap(({ data }) => {
          const result = data?.updateIndividualEntrepreneur?.individualEntrepreneur;
          const errors = data?.updateIndividualEntrepreneur?.errors;

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
