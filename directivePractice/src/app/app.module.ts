import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,    
    //NgForm
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
