import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedNgModule } from '@kometa/shared/ng';
import { SharedValidateModule } from '@kometa/shared/validate';
import { SharedTypedFormModule } from '@kometa/shared/typed-form';
import { SharedPrimengUiFormModule } from '@kometa/shared/primeng/ui-form';
import { SharedPrimengUiTableModule } from '@kometa/shared/primeng/ui-table';
import { SharedPrimengUiDetailModule } from '@kometa/shared/primeng/ui-detail';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputMaskModule } from 'primeng/inputmask';
import { EmexOrderCreateFormComponent } from './emex-order-create-form/emex-order-create-form.component';
import { EmexOrderDeleteFormComponent } from './emex-order-delete-form/emex-order-delete-form.component';
import { EmexOrderDetailFormComponent } from './emex-order-detail-form/emex-order-detail-form.component';
import { EmexOrderTableComponent } from './emex-order-table/emex-order-table.component';
import { EmexOrderUpdateFormComponent } from './emex-order-update-form/emex-order-update-form.component';
import { EmexProductCreateFormComponent } from './emex-product-create-form/emex-product-create-form.component';
import { EmexProductDeleteFormComponent } from './emex-product-delete-form/emex-product-delete-form.component';
import { EmexProductDetailFormComponent } from './emex-product-detail-form/emex-product-detail-form.component';
import { EmexProductTableComponent } from './emex-product-table/emex-product-table.component';
import { EmexProductUpdateFormComponent } from './emex-product-update-form/emex-product-update-form.component';
import { TranslocoModule } from '@ngneat/transloco';
import { EmexCustomerFormComponent } from './emex-customer-form/emex-customer-form.component';
import { SmdePackingPlaceControlsModule } from '@kometa/smde/packing-place/controls';

@NgModule({
  imports: [
    CommonModule,
    SharedNgModule,
    SharedValidateModule,
    SharedTypedFormModule,
    SharedPrimengUiFormModule,
    SharedPrimengUiTableModule,
    SharedPrimengUiDetailModule,
    SmdePackingPlaceControlsModule,
    DropdownModule,
    InputNumberModule,
    InputTextModule,
    TableModule,
    PanelModule,
    ButtonModule,
    RippleModule,
    InputMaskModule,
    TranslocoModule,
  ],
  declarations: [
    EmexOrderCreateFormComponent,
    EmexOrderDeleteFormComponent,
    EmexOrderDetailFormComponent,
    EmexOrderTableComponent,
    EmexOrderUpdateFormComponent,
    EmexProductCreateFormComponent,
    EmexProductDeleteFormComponent,
    EmexProductDetailFormComponent,
    EmexProductTableComponent,
    EmexProductUpdateFormComponent,
    EmexCustomerFormComponent,
  ],
  exports: [
    EmexOrderCreateFormComponent,
    EmexOrderDeleteFormComponent,
    EmexOrderDetailFormComponent,
    EmexOrderTableComponent,
    EmexOrderUpdateFormComponent,
    EmexProductCreateFormComponent,
    EmexProductDeleteFormComponent,
    EmexProductDetailFormComponent,
    EmexProductTableComponent,
    EmexProductUpdateFormComponent,
  ],
})
export class SmdeEmexOrderUiModule {}
