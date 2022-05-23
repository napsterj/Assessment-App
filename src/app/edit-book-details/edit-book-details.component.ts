import { Subscription } from 'rxjs';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { SupplyDataServiceService } from './../shared/supply-data-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { otherAuthorValidator } from '../common/other-author-validator';
import { IBookDetails } from 'src/model/bookdetails';
import { IAuthorDetails } from 'src/model/authordetails';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-book-details',
  templateUrl: './edit-book-details.component.html',
  styleUrls: ['./edit-book-details.component.css']
})
export class EditBookDetailsComponent implements OnInit {
  editBookForm: NgForm;
  selected: string = "";
  author: IAuthorDetails;  authors: IAuthorDetails[] = []
  authorname;  
  existingAuthorSelected : string
  book: IBookDetails;
  id: Number;
  title: string;
  ISBN: string;
  givenName: string;
  edition: string;
  publisher: string;
  publishingDate: string;
  other: string;  
  editBookSubscription: Subscription

  constructor(private router: Router, 
              private supplyDataService: SupplyDataServiceService,              
              private activatedRoute : ActivatedRoute) {}  

  ngOnInit(): void {    
    this.retrieveAuthors();         
    this.bindBookDetails();
  }

  bindBookDetails() {
    this.editBookSubscription =  this.activatedRoute.paramMap.subscribe((param) => {
        this.id = Number(param.get('id'));
        this.book = this.supplyDataService.findBookById(this.id)                  
        let author = this.authors.find(a => a.id === this.book.author.id);
        this.author = author;
        let indexInArray = this.authors.findIndex(a=>a.id === author.id);
                
        this.title= this.book.title,
        this.ISBN= this.book.ISBN,
        this.givenName = this.authors[indexInArray].givenName 
        
            //other: '',
        this.edition = this.book.edition,
        this.publisher= this.book.publisher,
        this.publishingDate= this.book.publishingDate                              
        this.existingAuthorSelected = this.authors[indexInArray].givenName;            
    })
  }

  ngOnDestroy() {
    this.editBookSubscription.unsubscribe();
  }

  retrieveAuthors() {        
    this.authors = this.supplyDataService.getAuthors();              
  }

onSubmit(editBookForm: NgForm) {
  console.log(editBookForm)
  const formValues = editBookForm.value;         
  if(formValues.givenName === "other" || 
     formValues.givenName === "Other") {
      formValues.givenName = formValues.other
  }  
  
  const bookValues = {...formValues} 
  
  this.book.title = bookValues.title;
  this.book.ISBN = bookValues.ISBN;  
  this.book.author.givenName = bookValues.givenName;
  this.book.edition = bookValues.edition;
  this.book.publisher = bookValues.publisher;
  this.book.publishingDate = bookValues.publishingDate;

  this.supplyDataService.editBookDetail(this.book);
  this.router.navigate(['/book/all/'], {state:{ editedBook: this.book}})  
}

navigateToHome(){
  this.router.navigate([''])
}

onChange(event: any){                     
    this.selected = this.givenName;        
    this.author = this.authors.find(a=>a.givenName === this.givenName)
}

validateOtherAuthor() {    
  const value = this.editBookForm.errors["empty"]            
  const otherAuthor = this.editBookForm.controls["other"].value;
  if(value && otherAuthor === "") {
    return true;
  } 

  return false;
}

}
