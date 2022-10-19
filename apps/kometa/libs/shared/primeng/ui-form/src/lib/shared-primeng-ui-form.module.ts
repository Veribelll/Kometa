import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { FormActionsComponent } from './form-actions/form-actions.component';
import { FormBodyComponent } from './form-body/form-body.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { FormDeleteActionsComponent } from './form-delete-actions/form-delete-actions.component';
import { KeyboardDirective } from './keyboard.directive';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { KeyboardDialogComponent } from './keyboard-dialog/keyboard-dialog.component';
import { KeyboardButtonComponent } from './keyboard-button/keyboard-button.component';
import { InputTextModule } from 'primeng/inputtext';
import { KeyPinComponent } from './key-pin/key-pin.component';

@NgModule({
  imports: [CommonModule, ButtonModule, RippleModule, InputTextModule],
  declarations: [
    FormActionsComponent,
    FormBodyComponent,
    FormFieldComponent,
    FormDeleteActionsComponent,
    KeyboardDirective,
    KeyboardComponent,
    KeyboardDialogComponent,
    KeyboardButtonComponent,
    KeyPinComponent,
  ],
  exports: [
    FormActionsComponent,
    FormBodyComponent,
    FormFieldComponent,
    FormDeleteActionsComponent,
    KeyboardDirective,
    KeyPinComponent,
  ],
})
export class SharedPrimengUiFormModule {}
