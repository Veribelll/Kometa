import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { TenantFormService } from '../tenant-form.service';
import { CreateTenantFormModel } from '@kometa/smde/tenant/ui';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { MenuItem } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';
import {
  CompanyFormService,
  IndividualEntrepreneurFormService,
} from '@kometa/smde/contractor/feature';
import {
  CreateCompanyFormModel,
  CreateIndividualEntrepreneurFormModel,
} from '@kometa/smde/contractor/ui';
import { CreateTenantInput, GetTenantsDocument } from '@kometa/smde/tenant/types';
import { CreateTenantGQL } from '@kometa/smde/tenant/data-access';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { finalize, tap } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@UntilDestroy()
@Component({
  selector: 'kometa-tenant-create-dialog',
  templateUrl: './tenant-create-dialog.component.html',
  styleUrls: ['./tenant-create-dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TenantCreateDialogComponent {
  readonly formGroup: TypedFormGroup<CreateTenantFormModel>;
  readonly formGroupCompany: TypedFormGroup<CreateCompanyFormModel>;
  readonly formGroupIndividualEntrepreneur: TypedFormGroup<CreateIndividualEntrepreneurFormModel>;
  readonly typesContractor = [
    { id: 1, name: 'Компания' },
    { id: 2, name: 'Индивидуальный предпрениматель' },
  ];
  readonly activeIndex$ = new BehaviorSubject(0);
  readonly stepsItem: MenuItem[] = [
    {
      label: 'Арендатор',
    },
    {
      label: 'Контрагент',
    },
  ];

  tenant?: CreateTenantFormModel;
  typeContractor: 1 | 2 = 1;

  constructor(
    private readonly createTenantGQL: CreateTenantGQL,
    private readonly tenantFormService: TenantFormService,
    private readonly companyFormService: CompanyFormService,
    private readonly individualEntrepreneurFormService: IndividualEntrepreneurFormService,
    private readonly ref: DynamicDialogRef,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    this.formGroup = this.tenantFormService.buildFormCreate();
    this.formGroupCompany = this.companyFormService.buildFormCreate();
    this.formGroupIndividualEntrepreneur = this.individualEntrepreneurFormService.buildFormCreate();

    this.formGroupCompany.get('name').clearAsyncValidators();
    this.formGroupCompany.get('inn').clearAsyncValidators();

    this.formGroupIndividualEntrepreneur.get('name').clearAsyncValidators();
    this.formGroupIndividualEntrepreneur.get('inn').clearAsyncValidators();
  }

  onNext(input: CreateTenantFormModel) {
    this.activeIndex$.next(1);
    this.tenant = input;
  }

  onBack() {
    this.activeIndex$.next(0);

    setTimeout(() => {
      this.formGroup.get('name').updateValueAndValidity();
      this.formGroup.get('adminEmailAddress').updateValueAndValidity();
    }, 100);
  }

  async onSave(contractor: CreateCompanyFormModel | CreateIndividualEntrepreneurFormModel) {
    if (!this.tenant) {
      return;
    }

    const { name, adminEmailAddress, emailForDocuments, adminPassword } = this.tenant;

    const input: CreateTenantInput = {
      name,
      adminEmailAddress,
      emailForDocuments,
      adminPassword,
      contractor: {
        company: this.typeContractor === 1 ? contractor : undefined,
        individualEntrepreneur: this.typeContractor === 2 ? contractor : undefined,
      },
    };

    await this.spinner.show();

    this.createTenantGQL
      .mutate(
        { input },
        {
          refetchQueries: [GetTenantsDocument],
        }
      )
      .pipe(
        tap(({ data }) => {
          const result = data?.createTenant?.tenant;
          const errors = data?.createTenant?.errors;

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
