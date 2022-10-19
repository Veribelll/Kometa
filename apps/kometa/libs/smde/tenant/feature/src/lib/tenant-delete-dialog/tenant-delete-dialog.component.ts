import { finalize, tap } from 'rxjs/operators';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { GetTenantsDocument, TenantFragment } from '@kometa/smde/tenant/types';
import { DeleteTenantGQL } from '@kometa/smde/tenant/data-access';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'kometa-tenant-delete-dialog',
  templateUrl: './tenant-delete-dialog.component.html',
  styleUrls: ['./tenant-delete-dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TenantDeleteDialogComponent {
  readonly tenant: TenantFragment;

  constructor(
    private readonly deleteTenantGQL: DeleteTenantGQL,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    const { tenant } = this.config.data;

    this.tenant = tenant;
  }

  async onDelete(): Promise<void> {
    await this.spinner.show();
    const { id } = this.tenant;
    this.deleteTenantGQL
      .mutate(
        { input: { id } },
        {
          refetchQueries: [GetTenantsDocument],
        }
      )
      .pipe(
        tap(({ data }) => {
          const result = data?.deleteTenant?.tenant;
          const errors = data?.deleteTenant?.errors;

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
