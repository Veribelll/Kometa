import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScannerToken } from '@kometa/postamat/feature-scanner';
import { ScannerSerialService } from './scanner-serial.service';

@NgModule({
  imports: [CommonModule],
})
export class ElectronModule {
  constructor(@Optional() @SkipSelf() parentModule: ElectronModule) {
    if (parentModule) {
      throw new Error('ElectronModule is already loaded. Import it in the AppModule only.');
    }
  }

  static forRoot(): ModuleWithProviders<ElectronModule> {
    return {
      ngModule: ElectronModule,
      providers: [
        {
          provide: ScannerToken,
          useClass: ScannerSerialService,
          multi: true,
        },
      ],
    };
  }
}
