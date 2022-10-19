import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { IdentityRoleFormService } from '../identity-role-form.service';
import {
  GetIdentityRolesDocument,
  IdentityRoleFragment,
} from '@kometa/smde/identity-role/types';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { UpdateIdentityRoleFormModel } from '@kometa/smde/identity-role/ui';
import { UpdateIdentityRoleGQL } from '@kometa/smde/identity-role/data-access';
import { finalize, tap } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'kometa-identity-role-update-dialog',
  templateUrl: './identity-role-update-dialog.component.html',
  styleUrls: ['./identity-role-update-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IdentityRoleUpdateDialogComponent {
  readonly formGroup: TypedFormGroup<UpdateIdentityRoleFormModel>;
  readonly identityRole: IdentityRoleFragment;

  constructor(
    private readonly updateIdentityRoleGQL: UpdateIdentityRoleGQL,
    private readonly identityRoleFormService: IdentityRoleFormService,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    const { identityRole } = this.config.data;

    this.identityRole = identityRole;
    this.formGroup = this.identityRoleFormService.buildFormUpdate(this.identityRole);
  }

  async onSave(input: UpdateIdentityRoleFormModel): Promise<void> {
    await this.spinner.show();
    const { id } = this.identityRole;
    this.updateIdentityRoleGQL
      .mutate(
        { input: { ...input, id, concurrencyStamp: '', isPublic: true, isDefault: false } },
        {
          refetchQueries: [GetIdentityRolesDocument],
        }
      )
      .pipe(
        tap(({ data }) => {
          const result = data?.updateIdentityRole?.identityRole;
          const errors = data?.updateIdentityRole?.errors;

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
