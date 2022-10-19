import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from './interceptors';
import { PermissionDirective } from './directives';
import { TENANT_KEY } from './tokens';
import { ApplicationConfigurationService } from './services';

function init(applicationConfigurationService: ApplicationConfigurationService) {
  return () => applicationConfigurationService.get();
}

@NgModule({
  imports: [CommonModule],
  declarations: [PermissionDirective],
  exports: [PermissionDirective],
})
export class SharedAbpModule {
  static forRoot(): ModuleWithProviders<SharedAbpModule> {
    return {
      ngModule: SharedAbpModule,
      providers: [
        { provide: TENANT_KEY, useValue: '__tenant' },
        {
          provide: HTTP_INTERCEPTORS,
          useExisting: ApiInterceptor,
          multi: true,
        },
        {
          provide: APP_INITIALIZER,
          multi: true,
          deps: [ApplicationConfigurationService],
          useFactory: init,
        },
      ],
    };
  }
}
