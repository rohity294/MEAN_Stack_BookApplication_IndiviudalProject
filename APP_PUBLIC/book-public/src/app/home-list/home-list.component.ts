import { Component, OnInit, Injectable } from '@angular/core';
import {Book} from '../book';
import {BookServiceService} from '../book-service.service';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  //styleUrls: ['./home-list.component.css']
  providers : [BookServiceService]
})


export class HomeListComponent implements OnInit {

  books : Book[]
  
  constructor(private bookService : BookServiceService){} 
   
  newBook : Book;

  ngOnInit(){
    this.bookService
         .getBooks()
         .then((books : Book[])=>{
                this.books = books.map(book=>{
                  return book;
                });
         });
        
    }

    //for deleting the book
    public deleteBook(newBook : Book):void{
      this.bookService.deleteBook(newBook._id);
      window.location.href = '';
    }
  
}
