
import {Component, Output, Input} from '@angular/core';
import {EventEmitter} from '@angular/core';
@Component ({
    selector:'my-info',
    templateUrl :'./app-info.component.html',
    styleUrls:['./app-info.component.css'],
    inputs:['name','age'],
    outputs:['childEvent']
})

export class AppinfoComponent{

    // (childEvent)="messageFromChild($event)"
   // @Output() 
    childEvent= new EventEmitter<string>();
    name: string;
    age:any;
    
    constructor(){        
        this.name= "";
        this.age="";
    }

    sendtoapp(value: string){
       this.childEvent.emit(value);
     }        
}



