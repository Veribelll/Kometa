import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import {
  GetContractorsDocument,
  IndividualEntrepreneurFragment,
} from '@kometa/smde/contractor/types';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { finalize, tap } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { DeleteIndividualEntrepreneurGQL } from '@kometa/smde/contractor/data-access';

@UntilDestroy()
@Component({
  selector: 'kometa-individual-entrepreneur-delete-dialog',
  templateUrl: './individual-entrepreneur-delete-dialog.component.html',
  styleUrls: ['./individual-entrepreneur-delete-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndividualEntrepreneurDeleteDialogComponent {
  readonly individualEntrepreneur: IndividualEntrepreneurFragment;

  constructor(
    private readonly deleteIndividualEntrepreneurGQL: DeleteIndividualEntrepreneurGQL,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    const { individualEntrepreneur } = this.config.data;

    this.individualEntrepreneur = individualEntrepreneur;
  }

  async onDelete(): Promise<void> {
    await this.spinner.show();
    const { id } = this.individualEntrepreneur;
    this.deleteIndividualEntrepreneurGQL
      .mutate(
        { input: { id } },
        {
          refetchQueries: [GetContractorsDocument],
        }
      )
      .pipe(
        tap(({ data }) => {
          const result = data?.deleteIndividualEntrepreneur?.individualEntrepreneur;
          const errors = data?.deleteIndividualEntrepreneur?.errors;

          if (result) {
            this.ref.close(result);
          }

          if (errors) {
            for (const error of errors) {
              if (error.__typename === 'ContractorHostDeletionError') {
                this.toastrService.error('Нельзя удалить хоста!');
              } else {
                this.toastrService.error(error.message);
              }
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
