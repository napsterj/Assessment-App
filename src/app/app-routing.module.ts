import { HeaderComponent } from './header/header.component';
import { DisplayBookDetailsComponent } from './display-book-details/display-book-details.component';
import { AddNewBookComponent } from './add-new-book/add-new-book.component';
import { EditBookDetailsComponent } from './edit-book-details/edit-book-details.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {  path:"",  component: HeaderComponent},
  {  path:"book/all", component: BooksComponent },
  {  path: "book/new", component: AddNewBookComponent},  
  {  path: "book/edit/:id", component: EditBookDetailsComponent},  
  {  path: "book/display/:id", component: DisplayBookDetailsComponent},
  {  path: "authors", component: AuthorsComponent },
  {  path: "**", component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
