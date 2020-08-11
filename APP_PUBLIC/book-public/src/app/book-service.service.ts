import { Injectable } from '@angular/core';
import {Book} from './book';
import {HttpRequest, HttpResponse, HttpClient} from '@angular/common/http';

// 

@Injectable()
export class BookServiceService {

  private booksUrl = 'http://localhost:3000/api/books';
  constructor(private http : HttpClient) {}

 //get("/api/foods")

   getBooks() : Promise<void | Book[]>{
    return this.http.get(this.booksUrl)
    .toPromise()
    //.then(response=>response.json() as Food[])
    .then(response=>response as Book[])
    .catch(this.handleError);
  }


  getSingleBook(bookId: String): Promise<void | Book>{
    return this.http.get(this.booksUrl + '/' +bookId)
    .toPromise()
    .then(response => response as Book)
    .catch(this.handleError);

  }

  createFood(newBook: Book): Promise<void | Book>{
    return this.http.post(this.booksUrl,newBook)
    .toPromise()
    .then(response => response as Book)
    .catch(this.handleError);
  }


  updateBook(newBook: Book): Promise<void | Book>{
    return this.http.put(this.booksUrl + '/' +newBook._id,newBook)
    .toPromise()
    .then(response => response as Book)
    .catch(this.handleError);
  }


  deleteBook(bookId: String): Promise<void | Book>{
    return this.http.delete(this.booksUrl + '/' +bookId)
    .toPromise()
    .then(response => response as Book)
    .catch(this.handleError);
  }

  alphaBookList(book: Book){
    const observable = this.http.get(this.booksUrl);
    console.log(observable);
    // return this.http.get(this.booksUrl)
    // .toPromise()
    // .then(response=>response as Book[])
    // .catch(this.handleError);
  }

  private handleError (error:any){
    console.log("error");
  }


  
}
