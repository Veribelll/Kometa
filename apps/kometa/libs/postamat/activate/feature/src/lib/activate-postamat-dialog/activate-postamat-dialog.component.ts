import { Component } from '@angular/core';
import { ActivatePostamatGQL } from '@kometa/postamat/activate/data-access';
import { TypedFormControl } from '@kometa/shared/typed-form';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { finalize, tap } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@UntilDestroy()
@Component({
  selector: 'kometa-activate-postamat-dialog',
  templateUrl: './activate-postamat-dialog.component.html',
  styleUrls: ['./activate-postamat-dialog.component.scss'],
})
export class ActivatePostamatDialogComponent {
  readonly token = new TypedFormControl<string>('');

  constructor(
    private readonly activatePostamatGQL: ActivatePostamatGQL,
    private readonly ref: DynamicDialogRef,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {}

  async onActivate() {
    await this.spinner.show();

    this.activatePostamatGQL
      .mutate({
        input: {
          token: this.token.value ?? '',
        },
      })
      .pipe(
        tap(({ data }) => {
          const result = data?.activatePostamat?.activatedPostamat;
          const errors = data?.activatePostamat?.errors;

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
}
