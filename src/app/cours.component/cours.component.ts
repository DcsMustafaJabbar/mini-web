import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component ({
    selector:'my-cours',
    template:`<h1> cours code </h1>
    <ul>
    <li *ngFor="let id of courses; let i=index;">
        <a (click)="goTocours(i)">{{id}}</a>
        </li>
   </ul>
    
   `
  
})

export class coursComponent{
courses:string[];

constructor(private _router:Router){
    this.courses=["C5101","MG505","IT555"];
}

goTocours(index:number){
    this._router.navigate(['/cours',index+1]);

}
    
}

