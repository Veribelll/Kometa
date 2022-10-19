import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceOrderButtonComponent } from './place-order-button/place-order-button.component';
import { ReceiveOrderButtonComponent } from './receive-order-button/receive-order-button.component';
import { ReturnOrderButtonComponent } from './return-order-button/return-order-button.component';
import { CancelButtonComponent } from './cancel-button/cancel-button.component';
import { YellowButtonComponent } from './yellow-button/yellow-button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    PlaceOrderButtonComponent,
    ReceiveOrderButtonComponent,
    ReturnOrderButtonComponent,
    CancelButtonComponent,
    YellowButtonComponent,
  ],
  exports: [
    PlaceOrderButtonComponent,
    ReceiveOrderButtonComponent,
    ReturnOrderButtonComponent,
    CancelButtonComponent,
    YellowButtonComponent,
  ],
})
export class PostamatUiModule {}
