import { SupplyDataServiceService } from './../shared/supply-data-service.service';
import { IBookDetails } from './../../model/bookdetails';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';


@Component({
  selector: 'book-list',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  
  bookDetail: IBookDetails; 
  bookDetails : IBookDetails[] = []; 
  bookSubsrciption: any
  editedAuthorName: string;

  constructor(private supplyDataServiceService: SupplyDataServiceService,
              private router: Router,
              private activatedRoute: ActivatedRoute
              ) {                  
                  if(this.router.getCurrentNavigation()){                      
                      let state = this.router.getCurrentNavigation()?.extras?.state;
                      if(state !== undefined) {
                          this.editedAuthorName = state.editedBook.author.givenName
                      }
                  }
               }

  ngOnInit(): void {                 
    this.DisplayBooks();
  }
    
  DisplayBooks(): any  {               
    this.bookDetails = this.supplyDataServiceService.GetBooks();     
  }
   
  DeleteBook(idToDelete: Number) {
    let index = this.bookDetails.findIndex(a=>a.id === idToDelete);  
    this.bookDetails.splice(index, 1)    
  }
  
  addNewBook() {
    this.router.navigate(['/book/new'], {relativeTo: this.activatedRoute})    
  }
  
}
