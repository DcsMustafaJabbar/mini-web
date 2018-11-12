import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppinfoComponent } from './appinfo/app-info.component';
import { homeComponent } from './home.component/home.component';
import { aboutComponent } from './about.component/about.component';
import { coursComponent } from './cours.component/cours.component';
import { singlecoursComponent } from './cours.component/single.cours/single.cours.componen';
import{routers} from  './app.routing'
@NgModule({
  declarations: [
    AppComponent, AppinfoComponent,homeComponent,aboutComponent,coursComponent,singlecoursComponent
  ],
  imports: [
    FormsModule,BrowserModule,routers,HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
