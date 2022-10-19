import { BehaviorSubject } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EmployeeFormService } from '../employee-form.service';
import { EmployeeFragment, GetEmployeesDocument } from '@kometa/smde/employee/types';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { UpdateEmployeeFormModel } from '@kometa/smde/employee/ui';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import {
  GetDataForUpdateEmployeeGQL,
  UpdateEmployeeGQL,
} from '@kometa/smde/employee/data-access';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@UntilDestroy()
@Component({
  selector: 'kometa-employee-update-dialog',
  templateUrl: './employee-update-dialog.component.html',
  styleUrls: ['./employee-update-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeUpdateDialogComponent {
  readonly formGroup: TypedFormGroup<UpdateEmployeeFormModel>;
  readonly employee: EmployeeFragment;
  readonly contractors$ = new BehaviorSubject<{ id: string; name: string }[]>([]);
  readonly identityRoles$ = new BehaviorSubject<{ id: string; name: string }[]>([]);

  constructor(
    private readonly updateEmployeeGQL: UpdateEmployeeGQL,
    private readonly getDataForUpdateEmployeeGQL: GetDataForUpdateEmployeeGQL,
    private readonly employeeFormService: EmployeeFormService,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    const { employee } = this.config.data;

    this.employee = employee;
    this.formGroup = this.employeeFormService.buildFormUpdate(this.employee);

    this.getDataForUpdateEmployeeGQL
      .watch({}, { useInitialLoading: false })
      .valueChanges.pipe(
        tap(({ data }) => {
          this.contractors$.next(data?.contractors?.items ?? []);
          this.identityRoles$.next(data?.identityRoles?.items ?? []);
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  async onSave(input: UpdateEmployeeFormModel): Promise<void> {
    await this.spinner.show();
    const { id } = this.employee;
    this.updateEmployeeGQL
      .mutate(
        { input: { ...input, id } },
        {
          refetchQueries: [GetEmployeesDocument],
        }
      )
      .pipe(
        tap(({ data }) => {
          const result = data?.updateEmployee?.identityUser;
          const errors = data?.updateEmployee?.errors;

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
