import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoreModule } from './core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ENVIRONMENT, SharedAbpModule } from '@kometa/shared/abp';
import { GraphqlModule } from './graphql';
import { environment } from '../environments';
import { API_KEY_DADATA } from '@kometa/shared/dadata';
import { DialogService } from 'primeng/dynamicdialog';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
import { ControllerDriversToken } from '@kometa/shared/driver/feature';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    GraphqlModule,
    SharedAbpModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 5000,
      progressBar: true,
      closeButton: true,
    }),
    NgxSpinnerModule,
    HttpClientModule,
    TranslocoRootModule,
  ],
  declarations: [AppComponent],
  providers: [
    {
      provide: ENVIRONMENT,
      useValue: environment,
    },
    {
      provide: API_KEY_DADATA,
      useValue: '310d4a3d0de426b6c5266ec45395948f7d8b0056',
    },
    {
      provide: ControllerDriversToken,
      useValue: {},
    },
    DialogService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
