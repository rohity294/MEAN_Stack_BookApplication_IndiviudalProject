import { Component, OnInit } from '@angular/core';
import {Book} from '../book';
import {BookServiceService} from '../book-service.service'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styles: [],
  providers: [BookServiceService]
})

export class CreateComponent implements OnInit {

 public newBook : Book ={
    _id : '',
    name : '',
    type : '',
    author : '',
    isbn_code : ''
 };

  constructor(private bookDataService : BookServiceService) { }

  ngOnInit(): void {


    
  }


  public createNewBook(newBook : Book):void{
    this.bookDataService.createFood(newBook);
    window.location.href = ''; // for auto-redirection to home page
}

  
  
}
