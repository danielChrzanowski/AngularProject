import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoutingModule, routingComponents } from './routing.module';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SerwisService } from './mojegrzyby/services/serwis.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyslInputComponent } from './mojegrzyby/components/mysl-input/mysl-input.component';
import { MyslKompComponent } from './mojegrzyby/components/mysl-komp/mysl-komp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ModalModule } from './_modal';
import { ChartsModule } from 'ng2-charts';
import { ApixuService } from './strona-druga/apixu.service';
import { DyrektywaDirective } from './strona-druga/dyrektywa.directive';
import { DragDirective } from './mojegrzyby/components/mysl-input/dragDrop.directive';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    MainComponent,
    MyslInputComponent,
    MyslKompComponent,
    DyrektywaDirective,
    DragDirective
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ModalModule,
    ChartsModule
  ],
  providers: [SerwisService, ApixuService],
  bootstrap: [AppComponent]
})

export class AppModule { }

