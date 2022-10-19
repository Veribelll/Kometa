import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EmployeeFragment, GetEmployeesDocument } from '@kometa/smde/employee/types';
import { DeleteEmployeeGQL } from '@kometa/smde/employee/data-access';
import { finalize, tap } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@UntilDestroy()
@Component({
  selector: 'kometa-employee-delete-dialog',
  templateUrl: './employee-delete-dialog.component.html',
  styleUrls: ['./employee-delete-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeDeleteDialogComponent {
  readonly employee: EmployeeFragment;

  constructor(
    private readonly deleteEmployeeGQL: DeleteEmployeeGQL,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    const { employee } = this.config.data;

    this.employee = employee;
  }

  async onDelete(): Promise<void> {
    await this.spinner.show();
    const { id } = this.employee;
    this.deleteEmployeeGQL
      .mutate(
        { input: { id } },
        {
          refetchQueries: [GetEmployeesDocument],
        }
      )
      .pipe(
        tap(({ data }) => {
          const result = data?.deleteEmployee?.identityUser;
          const errors = data?.deleteEmployee?.errors;

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
