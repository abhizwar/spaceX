import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlatFormComponent } from './plat-form/plat-form.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { ApiServicesService } from './services/spacex-service';

@NgModule({
  declarations: [
    AppComponent,
    PlatFormComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutServerModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatCardModule,
    FlexLayoutModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [ApiServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
