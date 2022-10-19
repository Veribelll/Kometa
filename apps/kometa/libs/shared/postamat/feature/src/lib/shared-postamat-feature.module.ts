import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostamatScannerUpdateComponent } from './postamat-scanner-update/postamat-scanner-update.component';
import { PostamatSettingsUpdateComponent } from './postamat-settings-update/postamat-settings-update.component';
import { PostamatFilePrinterUpdateComponent } from './postamat-file-printer-update/postamat-file-printer-update.component';
import { PostamatNetworkPrinterUpdateComponent } from './postamat-network-printer-update/postamat-network-printer-update.component';
import { PostamatSerialPrinterUpdateComponent } from './postamat-serial-printer-update/postamat-serial-printer-update.component';
import { SharedPostamatUiModule } from '@kometa/shared/postamat/ui';

@NgModule({
  imports: [CommonModule, SharedPostamatUiModule],
  declarations: [
    PostamatScannerUpdateComponent,
    PostamatSettingsUpdateComponent,
    PostamatFilePrinterUpdateComponent,
    PostamatNetworkPrinterUpdateComponent,
    PostamatSerialPrinterUpdateComponent,
  ],
  exports: [
    PostamatScannerUpdateComponent,
    PostamatSettingsUpdateComponent,
    PostamatFilePrinterUpdateComponent,
    PostamatNetworkPrinterUpdateComponent,
    PostamatSerialPrinterUpdateComponent,
  ],
})
export class SharedPostamatFeatureModule {}
