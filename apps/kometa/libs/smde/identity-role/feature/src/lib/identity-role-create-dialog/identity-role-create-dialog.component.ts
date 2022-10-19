import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { IdentityRoleFormService } from '../identity-role-form.service';
import { CreateIdentityRoleFormModel } from '@kometa/smde/identity-role/ui';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { CreateIdentityRoleGQL } from '@kometa/smde/identity-role/data-access';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { finalize, tap } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { GetIdentityRolesDocument } from '@kometa/smde/identity-role/types';

@UntilDestroy()
@Component({
  selector: 'kometa-identity-role-create-dialog',
  templateUrl: './identity-role-create-dialog.component.html',
  styleUrls: ['./identity-role-create-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IdentityRoleCreateDialogComponent {
  readonly formGroup: TypedFormGroup<CreateIdentityRoleFormModel>;

  constructor(
    private readonly createIdentityRoleGQL: CreateIdentityRoleGQL,
    private readonly identityRoleFormService: IdentityRoleFormService,
    private readonly ref: DynamicDialogRef,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    this.formGroup = this.identityRoleFormService.buildFormCreate();
  }

  async onSave(input: CreateIdentityRoleFormModel): Promise<void> {
    await this.spinner.show();
    this.createIdentityRoleGQL
      .mutate(
        { input: { ...input, isPublic: true, isDefault: false } },
        {
          refetchQueries: [GetIdentityRolesDocument],
        }
      )
      .pipe(
        tap(({ data }) => {
          const result = data?.createIdentityRole?.identityRole;
          const errors = data?.createIdentityRole?.errors;

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
