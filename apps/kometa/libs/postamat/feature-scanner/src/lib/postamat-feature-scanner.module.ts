import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScannerToken } from './scanner.token';
import { ScannerHudService } from './scanner-hud.service';

@NgModule({
  imports: [CommonModule],
  providers: [
    {
      provide: ScannerToken,
      useClass: ScannerHudService,
      multi: true,
    },
  ],
})
export class PostamatFeatureScannerModule {}
