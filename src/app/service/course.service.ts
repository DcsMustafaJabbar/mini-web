
import { Injectable} from '@angular/core';
import {HttpClient } from '@angular/common/http' ;

@Injectable()
export class CourseService {

    constructor( private __http: HttpClient ){
    }

    getListOfCourses() {
        return this.__http.get("https://jsonplaceholder.typicode.com/photos");                   
    }
}