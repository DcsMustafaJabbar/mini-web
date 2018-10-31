import { Component } from '@angular/core';

@Component ({
    selector:'my-home',
    templateUrl :'./home.component.html',
    styleUrls:['./home.component.css'],
  
})

export class homeComponent{

userData:any
    
    constructor(){  
        this.userData={
            name:"username",
            Email:"bb@bb.com",
            Class_work :0.1,
            Lab_work :0.1

        };      
       
    }
    setSubmit(value:any){
        console.log(value);
    }
    
}

