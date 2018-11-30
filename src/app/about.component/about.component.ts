
import { Component,OnInit } from '@angular/core';
import { CourseService } from '../service/course.service';
import { WeatherService } from '../service/weather.service';
@Component ({
    selector:'my-cours',
    templateUrl : './about.component.html'
})

// template:`<h1> cours code </h1>
// <ul>
//     <li *ngFor="let id of courses; let i=index;">
//         {{courses}}
//         <a (click)="goTocours(i)">{{id}}</a>
//     </li>
// </ul>
// `,


export class AboutComponent implements OnInit {
courses = [ ];
forecasts = [];
constructor(private _courseService: CourseService, 
            private _weatherService:  WeatherService){
                
            }



    ngOnInit(){
        this._courseService.getListOfCourses().subscribe(
                   function success(data) { 
                        console.log(data);
                        this.courses = data; 
                    } 
        )



        this._weatherService.getWeatherForecast('ca').subscribe(

            (data) => { 
                const forecasts = data['query']['results']['channel']['item']['forecast'];
                console.log(forecasts);
                this.forecasts = forecasts; 
            }   


        );


    }

    celsius(fahrenheit){
        return 5*(fahrenheit - 32)/8
    }


}
