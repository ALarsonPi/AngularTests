import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FailureComponent } from './failure/failure.component';
import { successComponent } from './success.component/success.component';
import { SuccessfulFailComponent } from './successful-fail/successful-fail.component';

@NgModule({
  declarations: [
    AppComponent,
    successComponent,
    FailureComponent,
    SuccessfulFailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
