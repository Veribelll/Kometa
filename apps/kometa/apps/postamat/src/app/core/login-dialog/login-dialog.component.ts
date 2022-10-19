import { Component } from '@angular/core';
import { TypedFormBuilder, TypedFormGroup } from '@kometa/shared/typed-form';
import { Validators } from '@angular/forms';
import { AuthorizationService } from '@kometa/shared/abp';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ScannerService } from '@kometa/postamat/feature-scanner';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { tap } from 'rxjs';
import { CurrentPostamatService } from '@kometa/postamat/core';

type FormModel = {
  username: string;
  password: string;
};

@UntilDestroy()
@Component({
  selector: 'kometa-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss'],
})
export class LoginDialogComponent {
  readonly formGroup: TypedFormGroup<FormModel>;

  constructor(
    private readonly currentPostamatService: CurrentPostamatService,
    private readonly fb: TypedFormBuilder,
    private readonly authorizationService: AuthorizationService,
    private readonly scannerService: ScannerService,
    private readonly ref: DynamicDialogRef,
    private readonly spinner: NgxSpinnerService
  ) {
    this.formGroup = this.fb.group<FormModel>({
      username: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required]),
    });

    this.scannerService.scan$
      .pipe(
        tap(async (scan) => {
          await this.spinner.show();
          const login = await this.authorizationService.loginByAccessKey(
            scan,
            localStorage.getItem('postamatId') ?? ''
          );
          if (login) {
            this.ref.close(true);
          }
          await this.spinner.hide();
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  async onAuth() {
    if (this.formGroup.valid && this.formGroup.value) {
      await this.spinner.show();

      const { username, password } = this.formGroup.value;
      const login = await this.authorizationService.login(username, password);
      if (login) {
        this.ref.close(true);
      }
      await this.spinner.hide();
    }
  }

  onCancel() {
    this.ref.close();
  }
}
