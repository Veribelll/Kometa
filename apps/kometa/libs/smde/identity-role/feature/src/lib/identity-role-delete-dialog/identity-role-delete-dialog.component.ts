import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import {
  GetIdentityRolesDocument,
  IdentityRoleFragment,
} from '@kometa/smde/identity-role/types';
import { DeleteIdentityRoleGQL } from '@kometa/smde/identity-role/data-access';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { finalize, tap } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'kometa-identity-role-delete-dialog',
  templateUrl: './identity-role-delete-dialog.component.html',
  styleUrls: ['./identity-role-delete-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IdentityRoleDeleteDialogComponent {
  readonly identityRole: IdentityRoleFragment;

  constructor(
    private readonly deleteIdentityRoleGQL: DeleteIdentityRoleGQL,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    const { identityRole } = this.config.data;

    this.identityRole = identityRole;
  }

  async onDelete(): Promise<void> {
    await this.spinner.show();
    const { id } = this.identityRole;
    this.deleteIdentityRoleGQL
      .mutate(
        { input: { id } },
        {
          refetchQueries: [GetIdentityRolesDocument],
        }
      )
      .pipe(
        tap(({ data }) => {
          const result = data?.deleteIdentityRole?.identityRole;
          const errors = data?.deleteIdentityRole?.errors;

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
