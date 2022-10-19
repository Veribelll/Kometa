import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedNgModule } from '@kometa/shared/ng';
import { SharedAbpModule } from '@kometa/shared/abp';
import { SharedDadataModule } from '@kometa/shared/dadata';
import { SharedValidateModule } from '@kometa/shared/validate';
import { SharedTypedFormModule } from '@kometa/shared/typed-form';
import { SharedPostamatUiModule } from '@kometa/shared/postamat/ui';
import { SharedUiSerialPortModule } from '@kometa/shared/ui-serial-port';
import { SharedPrimengUiFormModule } from '@kometa/shared/primeng/ui-form';
import { SharedPrimengUiTableModule } from '@kometa/shared/primeng/ui-table';
import { SharedPrimengUiDetailModule } from '@kometa/shared/primeng/ui-detail';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { TableModule } from 'primeng/table';
import { MenuModule } from 'primeng/menu';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TranslocoModule } from '@ngneat/transloco';
import { ControllerTableComponent } from './controller-table/controller-table.component';
import { LockTableComponent } from './lock-table/lock-table.component';
import { PromixControllerCreateFormComponent } from './promix-controller-create-form/promix-controller-create-form.component';
import { PromixControllerDeleteFormComponent } from './promix-controller-delete-form/promix-controller-delete-form.component';
import { PromixControllerDetailFormComponent } from './promix-controller-detail-form/promix-controller-detail-form.component';
import { PromixControllerUpdateFormComponent } from './promix-controller-update-form/promix-controller-update-form.component';

@NgModule({
  imports: [
    CommonModule,
    SharedNgModule,
    SharedAbpModule,
    SharedDadataModule,
    SharedValidateModule,
    SharedTypedFormModule,
    SharedPostamatUiModule,
    SharedUiSerialPortModule,
    SharedPrimengUiFormModule,
    SharedPrimengUiTableModule,
    SharedPrimengUiDetailModule,
    DropdownModule,
    InputTextModule,
    InputNumberModule,
    TableModule,
    MenuModule,
    InputSwitchModule,
    ButtonModule,
    RippleModule,
    TranslocoModule,
  ],
  declarations: [
    ControllerTableComponent,
    LockTableComponent,
    PromixControllerCreateFormComponent,
    PromixControllerDeleteFormComponent,
    PromixControllerDetailFormComponent,
    PromixControllerUpdateFormComponent,
  ],
  exports: [
    ControllerTableComponent,
    LockTableComponent,
    PromixControllerCreateFormComponent,
    PromixControllerDeleteFormComponent,
    PromixControllerDetailFormComponent,
    PromixControllerUpdateFormComponent,
  ],
})
export class SharedPostamatControllerUiModule {}
