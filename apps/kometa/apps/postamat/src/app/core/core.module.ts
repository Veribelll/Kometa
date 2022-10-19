import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { CoreComponent } from './core.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { SharedTypedFormModule } from '@kometa/shared/typed-form';
import { SharedPrimengUiFormModule } from '@kometa/shared/primeng/ui-form';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { PostamatUiModule } from '@kometa/postamat/ui';
import { SharedValidateModule } from '@kometa/shared/validate';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedTypedFormModule,
    SharedPrimengUiFormModule,
    SharedValidateModule,
    PostamatUiModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
  ],
  declarations: [
    HomeComponent,
    MenuComponent,
    HeaderComponent,
    CoreComponent,
    LoginDialogComponent,
  ],
  exports: [CoreComponent, MenuComponent],
})
export class CoreModule {}
