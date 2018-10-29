import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name : any;
  outerAge:number;
  childdata:string="";


  constructor(){
    this.name="Hallo",
    this.outerAge=28
  }

  new(){
    this.name="Mustafa";
    }
    
    new2(){
      this.name="Jabbar";
    }


    messageFromChild(event) {
      console.log('messageFromChild', event);
      this.outerAge = event;
    }

}
