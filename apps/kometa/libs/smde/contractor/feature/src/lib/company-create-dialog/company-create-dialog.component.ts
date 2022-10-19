import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { CompanyFormService } from '../company-form.service';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { CreateCompanyFormModel } from '@kometa/smde/contractor/ui';
import { CreateCompanyGQL } from '@kometa/smde/contractor/data-access';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { finalize, tap } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { GetContractorsDocument } from '@kometa/smde/contractor/types';

@UntilDestroy()
@Component({
  selector: 'kometa-company-create-dialog',
  templateUrl: './company-create-dialog.component.html',
  styleUrls: ['./company-create-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyCreateDialogComponent {
  readonly formGroup: TypedFormGroup<CreateCompanyFormModel>;

  constructor(
    private readonly createCompanyGQL: CreateCompanyGQL,
    private readonly companyFormService: CompanyFormService,
    private readonly ref: DynamicDialogRef,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    this.formGroup = this.companyFormService.buildFormCreate();
  }

  async onSave(input: CreateCompanyFormModel): Promise<void> {
    await this.spinner.show();
    this.createCompanyGQL
      .mutate(
        { input },
        {
          refetchQueries: [GetContractorsDocument],
        }
      )
      .pipe(
        tap(({ data }) => {
          const result = data?.createCompany?.company;
          const errors = data?.createCompany?.errors;

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
