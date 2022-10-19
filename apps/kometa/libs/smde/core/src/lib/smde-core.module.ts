import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavTopComponent } from './nav-top/nav-top.component';
import { LoginComponent } from './login/login.component';
import { SharedTypedFormModule } from '@kometa/shared/typed-form';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { ContentComponent } from './content/content.component';
import { MenubarModule } from 'primeng/menubar';
import { FooterComponent } from './footer/footer.component';
import { DialogModule } from 'primeng/dialog';
import { API_KEY_DADATA } from '@kometa/shared/dadata';
import { DialogService } from 'primeng/dynamicdialog';
import { SharedValidateModule } from '@kometa/shared/validate';
import { DropdownModule } from 'primeng/dropdown';
import { ForgotYourPasswordDialogComponent } from './forgot-your-password-dialog/forgot-your-password-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    SharedTypedFormModule,
    NgxValidateCoreModule,
    DialogModule,
    CheckboxModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    MenubarModule,
    SharedValidateModule,
    DropdownModule,
  ],
  declarations: [NavTopComponent, LoginComponent, ContentComponent, FooterComponent, ForgotYourPasswordDialogComponent],
  exports: [NavTopComponent, ContentComponent, FooterComponent],
  providers: [
    {
      provide: API_KEY_DADATA,
      useValue: '37093b5284e09fde8418f3374f4582412c83da23',
    },
    DialogService,
  ],
})
export class SmdeCoreModule {}
