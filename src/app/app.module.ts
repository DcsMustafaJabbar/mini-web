import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppinfoComponent } from './appinfo/app-info.component';

@NgModule({
  declarations: [
    AppComponent, AppinfoComponent
  ],
  imports: [
    FormsModule,BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
