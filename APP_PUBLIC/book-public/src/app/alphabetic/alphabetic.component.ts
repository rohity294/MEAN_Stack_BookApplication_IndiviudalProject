import { Component, OnInit, Injectable } from '@angular/core';
import { BookServiceService } from '../book-service.service';
import {Book} from '../book';

@Component({
  selector: 'app-alphabetic',
  templateUrl: './alphabetic.component.html',
  styles: [],
  providers:[BookServiceService]

})
export class AlphabeticComponent implements OnInit {


  constructor(private bookDataService : BookServiceService) { }
   
  books : Book[];
  newBook : Book;

  ngOnInit(): void {
    this.bookDataService
    .getBooks()
    .then((books : Book[])=>{
           this.books = books.map(book=>{
             if(book.author=="gandhi")
             {
              console.log("check:"+book.author);
              book.name.fontcolor("orange");
             }

            //  coding logic for filtering books written by gandhi
             
             if (book.author=="gandhi"){
               book.name = "Author 'Gandhi' Found : "+book.name.concat(" : is a book written by MK Gandhi");
               book.name = book.name.toUpperCase();
             }

             else
             {
              book.name = "";
             }

             return book;

           });
    });
  }  
}





