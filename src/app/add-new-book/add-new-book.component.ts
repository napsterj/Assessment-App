import { IBookDetails } from './../../model/bookdetails';
import { SupplyDataServiceService } from './../shared/supply-data-service.service';
import { otherAuthorValidator } from './../common/other-author-validator';
import { IAuthorDetails } from './../../model/authordetails';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-book',
  templateUrl: './add-new-book.component.html',
  styleUrls: ['./add-new-book.component.css']
})
export class AddNewBookComponent implements OnInit {  
  newBookForm: FormGroup;
  selected: string = "";
  author: IAuthorDetails;
  authors: IAuthorDetails[] = []
  book: IBookDetails;

  constructor(
    private supplyDataService: SupplyDataServiceService,    
    private router: Router
  ) { }

  ngOnInit(): void {
    this.retrieveAuthors();
    this.newBookForm = new FormGroup({
        title: new FormControl('', Validators.required),
        ISBN: new FormControl('', Validators.required),
        givenName: new FormControl('', Validators.required),
        other: new FormControl(''),
        edition: new FormControl(''),
        publisher: new FormControl(''),
        publishingDate: new FormControl(''),         
    }, otherAuthorValidator());
  }

  retrieveAuthors() {        
      this.authors = this.supplyDataService.getAuthors();          
  }

  onSubmit() {
    const formValues = this.newBookForm.value;         
    if(formValues.givenName === "other" || 
       formValues.givenName === "Other") {
        formValues.givenName = formValues.other
    }

    this.book = {...formValues} as IBookDetails
    this.supplyDataService.addNewBook(this.book);
    this.navigateToHome()
  }

  navigateToHome(){
    this.router.navigate([''])
  }

  onChange(event: any){                 
      this.selected = this.newBookForm.get('givenName').value;                  
  }
  
  validateOtherAuthor() {    
    const value = this.newBookForm.errors["empty"]            
    const otherAuthor = this.newBookForm.controls["other"].value;
    if(value && otherAuthor === "") {
      return true;
    } 

    return false;
  }
}
