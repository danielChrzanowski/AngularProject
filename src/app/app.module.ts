import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoutingModule, routingComponents } from './routing.module';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SerwisService } from './mojegrzyby/services/serwis.service';
import { FormsModule } from '@angular/forms';
import { MyslInputComponent } from './mojegrzyby/components/mysl-input/mysl-input.component';
import { MyslKompComponent } from './mojegrzyby/components/mysl-komp/mysl-komp.component';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    MainComponent,
    MyslInputComponent,
    MyslKompComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule
  ],
  providers: [SerwisService],
  bootstrap: [AppComponent]
})

export class AppModule { }

