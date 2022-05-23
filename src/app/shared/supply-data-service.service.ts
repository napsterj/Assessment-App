import { IAuthorDetails } from './../../model/authordetails';
import { DataProviderService } from './../../Services/dataproviderservice';
import { IBookDetails } from './../../model/bookdetails';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class SupplyDataServiceService {  
  book: IBookDetails 
  books : IBookDetails[] = [];
  author: IAuthorDetails;
  authors: IAuthorDetails[] = [];

  constructor(private dataProviderService: DataProviderService) { 
    this.loadBooks();
    this.loadAuthors();
  }

  loadBooks(): any{          
     this.dataProviderService.GetBooks()
         .subscribe((booklist) => {
                      booklist.map((eachBook) => {
                           this.book = {
                              id: eachBook.id,
                              title: eachBook.title,
                              ISBN: eachBook.ISBN,
                              author: eachBook.author,
                              edition: eachBook.edition,
                              publisher: eachBook.publisher,
                              publishingDate : eachBook.publishingDate,     
                              chapters : []           
                          }
                          this.book.author.givenName = this.book.author.givenName + " " + this.book.author.surName
                          this.books.push(eachBook)
                      })                                           
     });
  }

  GetBooks() {
    return this.books.sort((a, b) => {
            return a.id < b.id ? -1: 1
    });        
  }

  addNewBook(book: IBookDetails) {
    book.id = this.generateNewBookId();
    this.books.push(book);
  } 

  findBookById(id: Number) : IBookDetails {      
     const book = this.books.find(b => b.id === id)      
     const date = new Date(book.publishingDate)
     book.publishingDate = date.toLocaleDateString()
     return book;
  }

  editBookDetail(bookToEdit: IBookDetails) {
      const index = this.books.findIndex(b=>b.id === bookToEdit.id);      
      let book = this.books.splice(index,1);      
      
      this.books.push(bookToEdit)
  }

  loadAuthors() {
    this.dataProviderService.GetAuthors()
          .subscribe((authorList: IAuthorDetails[]) => {
             authorList.map((eachAuthor: IAuthorDetails) => {
                    this.author = {
                      id: eachAuthor.id,
                      givenName: eachAuthor.givenName + " " + eachAuthor.surName,
                      surName: eachAuthor.surName,
                      dateOfBirth: eachAuthor.dateOfBirth,
                      bio: eachAuthor.bio
                    }
                    this.authors.push(this.author);
             })
          });
  }
  
  getAuthors() {
      return this.authors;
  }  

  private generateNewBookId() {
    return Math.max(...this.books.map(book => book.id as number)) + 1
  }
}
