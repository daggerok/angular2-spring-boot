import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {
  HttpModule,
  CookieXSRFStrategy,
  XSRFStrategy
} from '@angular/http';

import { AppComponent }  from './app.component';
import { AppRoutes }     from './app.routes';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutes,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: XSRFStrategy, useValue: new CookieXSRFStrategy('XSRF-TOKEN', 'X-XSRF-TOKEN') }
  ],
})
export class AppModule {}
