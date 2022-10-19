import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatePostamatDialogComponent } from './activate-postamat-dialog/activate-postamat-dialog.component';
import { SharedTypedFormModule } from '@kometa/shared/typed-form';
import { SharedPrimengUiFormModule } from '@kometa/shared/primeng/ui-form';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  imports: [
    CommonModule,
    SharedTypedFormModule,
    SharedPrimengUiFormModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
  ],
  declarations: [ActivatePostamatDialogComponent],
})
export class PostamatActivateFeatureModule {}
