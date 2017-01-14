import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {JwtHelper} from 'angular2-jwt';

export class LoggingErrorHandler implements ErrorHandler {

  constructor(private _jwtHelper: JwtHelper) {
  }

  handleError(error) {
  }
}

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass:LoggingErrorHandler
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
