import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { SharedNgModule } from '@kometa/shared/ng';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { SharedTypedFormModule } from '@kometa/shared/typed-form';
import { SharedUiSerialPortModule } from '@kometa/shared/ui-serial-port';
import { SharedPrimengUiFormModule } from '@kometa/shared/primeng/ui-form';
import { SharedPrimengUiTableModule } from '@kometa/shared/primeng/ui-table';
import { SharedPrimengUiDetailModule } from '@kometa/shared/primeng/ui-detail';
import { SharedValidateModule } from '@kometa/shared/validate';
import { SharedAbpModule } from '@kometa/shared/abp';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { MenuModule } from 'primeng/menu';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TranslocoModule } from '@ngneat/transloco';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { SkeletonModule } from 'primeng/skeleton';
import { PostamatSettingsUpdateFormComponent } from './postamat-settings-update-form/postamat-settings-update-form.component';
import { PostamatScannerUpdateFormComponent } from './postamat-scanner-update-form/postamat-scanner-update-form.component';
import { PostamatSerialPrinterSkeletonComponent } from './postamat-serial-printer-skeleton/postamat-serial-printer-skeleton.component';
import { PostamatNetworkPrinterSkeletonComponent } from './postamat-network-printer-skeleton/postamat-network-printer-skeleton.component';
import { PostamatSettingsSkeletonComponent } from './postamat-settings-skeleton/postamat-settings-skeleton.component';
import { PostamatSerialPrinterUpdateFormComponent } from './postamat-serial-printer-update-form/postamat-serial-printer-update-form.component';
import { PostamatFilePrinterUpdateFormComponent } from './postamat-file-printer-update-form/postamat-file-printer-update-form.component';
import { PostamatNetworkPrinterUpdateFormComponent } from './postamat-network-printer-update-form/postamat-network-printer-update-form.component';
import { PostamatScannerSkeletonComponent } from './postamat-scanner-skeleton/postamat-scanner-skeleton.component';
import { PostamatFilePrinterSkeletonComponent } from './postamat-file-printer-skeleton/postamat-file-printer-skeleton.component';

@NgModule({
  imports: [
    CommonModule,
    SharedNgModule,
    SharedAbpModule,
    SharedValidateModule,
    SharedTypedFormModule,
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
    ToggleButtonModule,
    SkeletonModule,
  ],
  declarations: [
    PostamatSettingsUpdateFormComponent,
    PostamatScannerUpdateFormComponent,
    PostamatScannerSkeletonComponent,
    PostamatSettingsSkeletonComponent,
    PostamatFilePrinterUpdateFormComponent,
    PostamatFilePrinterSkeletonComponent,
    PostamatNetworkPrinterUpdateFormComponent,
    PostamatNetworkPrinterSkeletonComponent,
    PostamatSerialPrinterUpdateFormComponent,
    PostamatSerialPrinterSkeletonComponent,
  ],
  exports: [
    PostamatSettingsUpdateFormComponent,
    PostamatScannerUpdateFormComponent,
    PostamatScannerSkeletonComponent,
    PostamatSettingsSkeletonComponent,
    PostamatFilePrinterUpdateFormComponent,
    PostamatFilePrinterSkeletonComponent,
    PostamatNetworkPrinterUpdateFormComponent,
    PostamatNetworkPrinterSkeletonComponent,
    PostamatSerialPrinterUpdateFormComponent,
    PostamatSerialPrinterSkeletonComponent,
  ],
})
export class SharedPostamatUiModule {}
