import { Component } from '@angular/core';
import { TypedFormBuilder, TypedFormGroup } from '@kometa/shared/typed-form';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { Validators } from '@angular/forms';

@Component({
  selector: 'kometa-forgot-your-password-dialog',
  templateUrl: './forgot-your-password-dialog.component.html',
  styleUrls: ['./forgot-your-password-dialog.component.scss']
})
export class ForgotYourPasswordDialogComponent {
  readonly formGroup: TypedFormGroup<{username: string}>;

  constructor(
    private readonly fb: TypedFormBuilder,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig,
    private readonly spinner: NgxSpinnerService
  ) {
    const { username } = this.config.data;

    this.formGroup = this.fb.group<{username: string}>({
      username: this.fb.control(username ?? '', [Validators.required, Validators.email]),
    });
  }

  async onSend(): Promise<void> {
    await this.spinner.show();
    setTimeout(async () => {
      await this.spinner.hide();
      this.ref.close()
    }, 1000)
  }

  onCancel() {
    this.ref.close()
  }
}
