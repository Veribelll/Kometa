import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TypedFormBuilder, TypedFormGroup } from '@kometa/shared/typed-form';
import { AuthorizationService } from '@kometa/shared/abp';
import {
  ForgotYourPasswordDialogComponent
} from '../forgot-your-password-dialog/forgot-your-password-dialog.component';

interface LoginModel {
  username: string;
  password: string;
  rememberMe: boolean;
}

@Component({
  selector: 'kometa-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  readonly formGroup: TypedFormGroup<LoginModel>;

  constructor(
    private readonly fb: TypedFormBuilder,
    private readonly authorizationService: AuthorizationService,
    private readonly dialogService: DialogService,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig,
    private readonly spinner: NgxSpinnerService
  ) {
    this.formGroup = this.fb.group<LoginModel>({
      username: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', Validators.required),
      rememberMe: this.fb.control(false),
    });
  }

  async onLogin(): Promise<void> {
    await this.spinner.show();

    if (this.formGroup.valid && this.formGroup.value) {
      const { username, password, rememberMe } = this.formGroup.value;

      const login = await this.authorizationService.login(username, password, rememberMe);
      if (login) {
        this.ref.close();
      }
      await this.spinner.hide();
    }
  }

  onForgotYourPassword() {
    this.dialogService.open(ForgotYourPasswordDialogComponent, {
      header: 'Забыли пароль?',
      width: '500px',
      data: {
        username: this.formGroup.get('username').value
      }
    })
  }
}
