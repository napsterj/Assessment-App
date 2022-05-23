import { AuthorNamePipe } from './common/author-name-pipe';
import { SupplyDataServiceService } from './shared/supply-data-service.service';

import { DataProviderService } from './../Services/dataproviderservice';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { Common } from 'src/ngx-bootstrap-components/common';
import { BooksComponent } from './books/books.component';
import { AuthorsComponent } from './authors/authors.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EditBookDetailsComponent } from './edit-book-details/edit-book-details.component';
import { ConfirmComponent } from './common/confirm.component';
import { AddNewBookComponent } from './add-new-book/add-new-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisplayBookDetailsComponent } from './display-book-details/display-book-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksComponent,
    AuthorsComponent,
    PagenotfoundComponent,
    EditBookDetailsComponent,
    ConfirmComponent,
    AddNewBookComponent,
    DisplayBookDetailsComponent,
    AuthorNamePipe
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    Common
  ],
  providers: [DataProviderService,SupplyDataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
