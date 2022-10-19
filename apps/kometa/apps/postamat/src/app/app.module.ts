import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core';
import { DialogService } from 'primeng/dynamicdialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ENVIRONMENT, SharedAbpModule } from '@kometa/shared/abp';
import { GraphqlModule } from './graphql';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments';
import { TranslocoRootModule } from './transloco-root.module';
import { SharedValidateModule } from '@kometa/shared/validate';
import { PostamatFeatureScannerModule } from '@kometa/postamat/feature-scanner';
import { ElectronModule } from './electron';
import { PostamatActivateFeatureModule } from '@kometa/postamat/activate/feature';
import { ControllerDriversToken } from '@kometa/shared/driver/feature';
import { PromixControllerDriver } from '@kometa/postamat/driver/feature';
import { ElectronService } from './electron/electron.service';
import { NullControllerDriver } from '../../../../libs/shared/driver/feature/src/lib/null-controller.driver';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    ElectronModule.forRoot(),
    GraphqlModule,
    SharedAbpModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 5000,
      progressBar: true,
      closeButton: true,
    }),
    NgxSpinnerModule,
    SharedValidateModule,
    HttpClientModule,
    TranslocoRootModule,
    PostamatFeatureScannerModule,
    PostamatActivateFeatureModule,
  ],
  declarations: [AppComponent],
  providers: [
    {
      provide: ENVIRONMENT,
      useValue: environment,
    },
    {
      provide: ControllerDriversToken,
      useFactory: (electron: ElectronService) => {
        return {
          PromixController: () => {
            if (electron.serialPortPack) {
              return new PromixControllerDriver(electron.serialPortPack);
            } else {
              return new NullControllerDriver();
            }
          },
        };
      },
      deps: [ElectronService],
    },
    DialogService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
