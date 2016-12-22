import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutes } from './app.routes';
import { AppComponent }  from './app.component';
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
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {}
