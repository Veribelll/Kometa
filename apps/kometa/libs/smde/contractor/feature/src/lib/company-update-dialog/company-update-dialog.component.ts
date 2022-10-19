import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CompanyFormService } from '../company-form.service';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { GetContractorsDocument } from '@kometa/smde/contractor/types';
import { UpdateCompanyFormModel } from '@kometa/smde/contractor/ui';
import { GetCompanyGQL, UpdateCompanyGQL } from '@kometa/smde/contractor/data-access';
import { finalize, tap } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'kometa-company-update-dialog',
  templateUrl: './company-update-dialog.component.html',
  styleUrls: ['./company-update-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyUpdateDialogComponent {
  readonly id: string;
  readonly loading$ = new BehaviorSubject(false);
  formGroup?: TypedFormGroup<UpdateCompanyFormModel>;

  constructor(
    private readonly updateCompanyGQL: UpdateCompanyGQL,
    private readonly getCompanyGQL: GetCompanyGQL,
    private readonly companyFormService: CompanyFormService,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    const { id } = this.config.data;

    this.id = id;

    this.getCompanyGQL
      .watch(
        { id },
        {
          useInitialLoading: true,
        }
      )
      .valueChanges.pipe(
        tap(({ data, loading }) => {
          this.loading$.next(loading);
          if (data?.companyById) {
            this.formGroup = this.companyFormService.buildFormUpdate(data.companyById);
          }
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  async onSave(input: UpdateCompanyFormModel): Promise<void> {
    await this.spinner.show();
    this.updateCompanyGQL
      .mutate(
        { input: { ...input, id: this.id } },
        {
          refetchQueries: [GetContractorsDocument],
        }
      )
      .pipe(
        tap(({ data }) => {
          const result = data?.updateCompany?.company;
          const errors = data?.updateCompany?.errors;

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
