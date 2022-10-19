import { finalize, tap } from 'rxjs/operators';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { TenantFormService } from '../tenant-form.service';
import { GetTenantsDocument, TenantFragment } from '@kometa/smde/tenant/types';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { UpdateTenantFormModel } from '@kometa/smde/tenant/ui';
import { UpdateTenantGQL } from '@kometa/smde/tenant/data-access';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'kometa-tenant-update-dialog',
  templateUrl: './tenant-update-dialog.component.html',
  styleUrls: ['./tenant-update-dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TenantUpdateDialogComponent {
  readonly tenant: TenantFragment;
  readonly formGroup: TypedFormGroup<UpdateTenantFormModel>;

  constructor(
    private readonly updateTenantGQL: UpdateTenantGQL,
    private readonly tenantFormService: TenantFormService,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    const { tenant } = this.config.data;

    this.tenant = tenant;
    this.formGroup = this.tenantFormService.buildFormUpdate(this.tenant);
  }

  async onSave(input: UpdateTenantFormModel): Promise<void> {
    await this.spinner.show();
    const { id } = this.tenant;
    this.updateTenantGQL
      .mutate(
        { input: { ...input, id } },
        {
          refetchQueries: [GetTenantsDocument],
        }
      )
      .pipe(
        tap(({ data }) => {
          const result = data?.updateTenant?.tenant;
          const errors = data?.updateTenant?.errors;

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
