import { Component } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import {
  PermissionListFragment,
  UpdatePermissionDtoInput,
} from '@kometa/smde/permission/types';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { GetPermissionsGQL, UpdatePermissionsGQL } from '@kometa/smde/permission/data-access';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'kometa-update-permissions-dialog',
  templateUrl: './update-permissions-dialog.component.html',
  styleUrls: ['./update-permissions-dialog.component.scss'],
})
export class UpdatePermissionsDialogComponent {
  readonly providerName: 'R' | 'U' | 'C';
  readonly providerKey: string;
  readonly permissions$ = new BehaviorSubject<PermissionListFragment | undefined>(undefined);
  readonly loading$ = new BehaviorSubject<boolean>(false);

  constructor(
    private readonly getPermissionsGQL: GetPermissionsGQL,
    private readonly updatePermissionsGQL: UpdatePermissionsGQL,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    const { providerName, providerKey } = this.config.data;

    this.providerName = providerName;
    this.providerKey = providerKey;

    this.getPermissionsGQL
      .watch({ providerName, providerKey }, { useInitialLoading: true })
      .valueChanges.pipe(
        tap(({ data, loading }) => {
          this.loading$.next(loading);
          if (data?.permissions) {
            this.permissions$.next(data.permissions);
          }
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  async onSave(input: UpdatePermissionDtoInput[]): Promise<void> {
    await this.spinner.show();
    this.updatePermissionsGQL
      .mutate({
        input: {
          providerName: this.providerName,
          providerKey: this.providerKey,
          permissions: { permissions: input },
        },
      })
      .pipe(
        tap(({ data }) => {
          const errors = data?.updatePermissions?.errors;

          if (!errors) {
            this.ref.close(true);
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
