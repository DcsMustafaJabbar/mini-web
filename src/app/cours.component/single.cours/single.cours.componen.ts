
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component ({
    selector:'my-single-cours',
    template:`<h1> COURSES NAME : </h1>
    <ul>
    <li>{{courses[id]}}</li>
   </ul>
    
   `
  
})

export class singlecoursComponent{
courses:string[];
id:number;
constructor(private route:ActivatedRoute,private _router:Router){
    this.courses=["HTLM","CSS","JAVA","ANGULAR"]
}
ngOnInit(){
    this.id= this.route.snapshot.params['id'];
    this.id-=1;
    if(this.id >=this.courses.length){
        this._router.navigate(['/cours']);
    }
   
}
}