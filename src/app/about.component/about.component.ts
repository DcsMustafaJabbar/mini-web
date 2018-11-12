
import { Component,OnInit } from '@angular/core';
import { listecours } from '../about.component/service';
@Component ({
    selector:'my-cours',
    template:`<h1> cours code </h1>
    <ul>
    <li *ngFor="let id of courses; let i=index;">
    <li>{{courses}}</li>
        <a (click)="goTocours(i)">{{id}}</a>
        </li>
   </ul>
   `
   providers:[listecours]
})

export class aboutComponent implements OnInit {
courses = [ ];
constructor(private _listecours: listecours){}
    ngOninit(){
    this.courses =this._listecours.getcours();
}
}
