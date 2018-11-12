import { Component } from '@angular/core';

@Component ({
    selector:'my-home',
    templateUrl :'./home.component.html',
    styleUrls:['./home.component.css'],
    
} )
export class homeComponent {
    userData: any;
    constructor() { 
        this.userData = {
            name: "Mustafa J",
            Email: "bb@bb.com",
            Street: "Am kellerberg",
            City: "Furth",
            PostalCode:"90776"
        };
    }

    setSubmit(value: any) {
        console.log(value);
    }
}




/*import { Component, OnInit } from '@angular/core';
//import { Homeservice } from '../service/home.service';

@Component ({
    selector:'my-home',
    templateUrl :'./home.component.html',
    styleUrls:['./home.component.css'],
    //providers: [Homeservice]
})

export class homeComponent{
  /*  blogs: any = [];

    constructor(private _lastBlogs: Homeservice) {

    }

    ngOnInit() {

        this._lastBlogs.getLasetBlogs().subscribe(
          data => {
              for(var i=0; i<9; i++) {
                  this.blogs.push(data[i]);
              }
              
          }
        );

    }

}*/

