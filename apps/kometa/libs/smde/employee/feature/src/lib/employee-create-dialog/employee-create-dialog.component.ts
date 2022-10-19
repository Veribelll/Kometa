import { BehaviorSubject } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { EmployeeFormService } from '../employee-form.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { CreateEmployeeFormModel } from '@kometa/smde/employee/ui';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import {
  CreateEmployeeGQL,
  GetDataForCreateEmployeeGQL,
} from '@kometa/smde/employee/data-access';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { GetEmployeesDocument } from '@kometa/smde/employee/types';
import { omit } from 'lodash';

@UntilDestroy()
@Component({
  selector: 'kometa-employee-create-dialog',
  templateUrl: './employee-create-dialog.component.html',
  styleUrls: ['./employee-create-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeCreateDialogComponent {
  readonly formGroup: TypedFormGroup<CreateEmployeeFormModel>;
  readonly contractors$ = new BehaviorSubject<{ id: string; name: string }[]>([]);
  readonly identityRoles$ = new BehaviorSubject<{ id: string; name: string }[]>([]);

  constructor(
    private readonly createEmployeeGQL: CreateEmployeeGQL,
    private readonly getDataForCreateEmployeeGQL: GetDataForCreateEmployeeGQL,
    private readonly employeeFormService: EmployeeFormService,
    private readonly ref: DynamicDialogRef,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    this.formGroup = this.employeeFormService.buildFormCreate();

    this.getDataForCreateEmployeeGQL
      .watch({}, { useInitialLoading: false })
      .valueChanges.pipe(
        tap(({ data }) => {
          this.contractors$.next(data.contractors?.items ?? []);
          this.identityRoles$.next(data.identityRoles?.items ?? []);
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  async onSave(input: CreateEmployeeFormModel): Promise<void> {
    await this.spinner.show();

    this.createEmployeeGQL
      .mutate(
        { input: omit(input, 'passwordConfirm') },
        {
          refetchQueries: [GetEmployeesDocument],
        }
      )
      .pipe(
        tap(({ data }) => {
          const result = data?.createEmployee?.identityUser;
          const errors = data?.createEmployee?.errors;

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
