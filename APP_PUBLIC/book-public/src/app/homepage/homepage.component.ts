  import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styles: [
  ],
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pageContent = {
     header :{
       title : 'My Books List',
       body : 'This is a list of the books I have read'

     }
  };

}
