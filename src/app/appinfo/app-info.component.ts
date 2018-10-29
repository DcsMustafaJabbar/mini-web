
import {Component, Output, Input} from '@angular/core';
import {EventEmitter} from '@angular/core';
@Component ({
    selector:'my-info',
    templateUrl :'./app-info.component.html',
    styleUrls:['./app-info.component.css'],
    inputs:['childAge']
})

export class AppinfoComponent{

    // (childEvent)="messageFromChild($event)"
    @Output() 
    childEvent= new EventEmitter<string>();

    // [childAge]="outerAge"
   // @Input()
    childAge: string;
    
    constructor(){        
        this.childAge= "";
    }

    sendtoapp(event: string){
       this.childEvent.emit(event);
     }        
}



