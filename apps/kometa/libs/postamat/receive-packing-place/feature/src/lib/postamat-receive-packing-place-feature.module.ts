import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedPrimengUiFormModule } from '@kometa/shared/primeng/ui-form';
import { ReceivePackingPlacePageComponent } from './receive-packing-place-page/receive-packing-place-page.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { PostamatUiModule } from '@kometa/postamat/ui';
import { SharedTopologyFeatureModule } from '@kometa/shared/topology/feature';
import { RouterModule } from '@angular/router';
import { SendNewPinCodeDialogComponent } from './send-new-pin-code-dialog/send-new-pin-code-dialog.component';
import { InputMaskModule } from 'primeng/inputmask';
import { SharedTypedFormModule } from '@kometa/shared/typed-form';

@NgModule({
  imports: [
    CommonModule,
    SharedPrimengUiFormModule,
    SharedTopologyFeatureModule,
    SharedTypedFormModule,
    PostamatUiModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    RouterModule,
    InputMaskModule,
  ],
  declarations: [ReceivePackingPlacePageComponent, SendNewPinCodeDialogComponent],
  exports: [ReceivePackingPlacePageComponent],
})
export class PostamatReceivePackingPlaceFeatureModule {}
