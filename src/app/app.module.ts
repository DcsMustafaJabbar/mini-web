import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppinfoComponent } from './appinfo/app-info.component';
import { homeComponent } from './home.component/home.component';
import { AboutComponent } from './about.component/about.component';
import { coursComponent } from './cours.component/cours.component';
import { singlecoursComponent } from './cours.component/single.cours/single.cours.componen';
import{routers} from  './app.routing'
import { CourseService } from './service/course.service';
import { WeatherService } from './service/weather.service';
@NgModule({
  declarations: [
    AppComponent, AppinfoComponent,homeComponent,AboutComponent,coursComponent,singlecoursComponent
  ],
  imports: [
    FormsModule,BrowserModule,routers,HttpClientModule
  ],
  providers: [CourseService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
