import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CompanyFragment, GetContractorsDocument } from '@kometa/smde/contractor/types';
import { DeleteCompanyGQL } from '@kometa/smde/contractor/data-access';
import { finalize, tap } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@UntilDestroy()
@Component({
  selector: 'kometa-company-delete-dialog',
  templateUrl: './company-delete-dialog.component.html',
  styleUrls: ['./company-delete-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyDeleteDialogComponent {
  readonly company: CompanyFragment;

  constructor(
    private readonly deleteCompanyGQL: DeleteCompanyGQL,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    const { company } = this.config.data;

    this.company = company;
  }

  async onDelete(): Promise<void> {
    await this.spinner.show();
    const { id } = this.company;
    this.deleteCompanyGQL
      .mutate(
        { input: { id } },
        {
          refetchQueries: [GetContractorsDocument],
        }
      )
      .pipe(
        tap(({ data }) => {
          const result = data?.deleteCompany?.company;
          const errors = data?.deleteCompany?.errors;

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
