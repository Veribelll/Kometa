import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmexOrderCreateDialogComponent } from './emex-order-create-dialog/emex-order-create-dialog.component';
import { EmexOrderDeleteDialogComponent } from './emex-order-delete-dialog/emex-order-delete-dialog.component';
import { EmexOrderDetailDialogComponent } from './emex-order-detail-dialog/emex-order-detail-dialog.component';
import { EmexOrdersPageComponent } from './emex-orders-page/emex-orders-page.component';
import { EmexOrderUpdateDialogComponent } from './emex-order-update-dialog/emex-order-update-dialog.component';
import { EmexProductCreateDialogComponent } from './emex-product-create-dialog/emex-product-create-dialog.component';
import { EmexProductDeleteDialogComponent } from './emex-product-delete-dialog/emex-product-delete-dialog.component';
import { EmexProductDetailDialogComponent } from './emex-product-detail-dialog/emex-product-detail-dialog.component';
import { EmexProductUpdateDialogComponent } from './emex-product-update-dialog/emex-product-update-dialog.component';
import { SharedAbpModule } from '@kometa/shared/abp';
import { SmdeEmexOrderUiModule } from '@kometa/smde/emex/order/ui';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
  imports: [
    CommonModule,
    SmdeEmexOrderUiModule,
    SharedAbpModule,
    PanelModule,
    ButtonModule,
    RippleModule,
    ToolbarModule,
  ],
  declarations: [
    EmexOrderCreateDialogComponent,
    EmexOrderDeleteDialogComponent,
    EmexOrderDetailDialogComponent,
    EmexOrdersPageComponent,
    EmexOrderUpdateDialogComponent,
    EmexProductCreateDialogComponent,
    EmexProductDeleteDialogComponent,
    EmexProductDetailDialogComponent,
    EmexProductUpdateDialogComponent,
  ],
  exports: [EmexOrdersPageComponent],
})
export class SmdeEmexOrderFeatureModule {}
