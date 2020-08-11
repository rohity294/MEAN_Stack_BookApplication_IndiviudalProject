import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BookServiceService } from '../book-service.service';
import {Book} from '../book';
import {switchMap} from 'rxjs/operators';




@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styles: [],
  providers:[BookServiceService]
})
export class DetailsPageComponent implements OnInit {

  constructor(private bookDataService : BookServiceService, private route : ActivatedRoute) { }

  newBook : Book;

  ngOnInit(): void {
         this.route.params.pipe(
           switchMap((params: Params) => {
             return this.bookDataService.getSingleBook(params['bookid'])
           })
         )
         .subscribe((newBook : Book) => {
           this.newBook = newBook;
           this.pageContent.header.title = newBook.name;
           this.pageContent.header.body = "Details for the selected book"
         });
  }
  pageContent = {
    header : {
      title : '',
      body : ''
    }
  };


// for deleting the book
public deleteBook(newBook : Book):void{
  this.bookDataService.deleteBook(newBook._id);
  window.location.href = '';
}

// for updating the book
public updateBook(newBook : Book):void{
  this.bookDataService.updateBook(newBook);
  window.location.href = '';
}


}
