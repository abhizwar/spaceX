import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlatFormComponent } from './plat-form/plat-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiServicesService } from './services/spacex-service';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [
    AppComponent,
    PlatFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSkeletonLoaderModule
  ],
  providers: [ApiServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
