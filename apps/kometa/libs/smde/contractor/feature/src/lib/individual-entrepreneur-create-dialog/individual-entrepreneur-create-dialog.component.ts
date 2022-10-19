import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { IndividualEntrepreneurFormService } from '../individual-entrepreneur-form.service';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { CreateIndividualEntrepreneurFormModel } from '@kometa/smde/contractor/ui';
import { CreateIndividualEntrepreneurGQL } from '@kometa/smde/contractor/data-access';
import { GetContractorsDocument } from '@kometa/smde/contractor/types';
import { finalize, tap } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@UntilDestroy()
@Component({
  selector: 'kometa-individual-entrepreneur-create-dialog',
  templateUrl: './individual-entrepreneur-create-dialog.component.html',
  styleUrls: ['./individual-entrepreneur-create-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndividualEntrepreneurCreateDialogComponent {
  readonly formGroup: TypedFormGroup<CreateIndividualEntrepreneurFormModel>;

  constructor(
    private readonly createIndividualEntrepreneurGQL: CreateIndividualEntrepreneurGQL,
    private readonly individualEntrepreneurFormService: IndividualEntrepreneurFormService,
    private readonly ref: DynamicDialogRef,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    this.formGroup = this.individualEntrepreneurFormService.buildFormCreate();
  }

  async onSave(input: CreateIndividualEntrepreneurFormModel): Promise<void> {
    await this.spinner.show();
    this.createIndividualEntrepreneurGQL
      .mutate(
        { input },
        {
          refetchQueries: [GetContractorsDocument],
        }
      )
      .pipe(
        tap(({ data }) => {
          const result = data?.createIndividualEntrepreneur?.individualEntrepreneur;
          const errors = data?.createIndividualEntrepreneur?.errors;

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
