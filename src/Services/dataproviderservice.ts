import { Observable } from "rxjs";
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable()
export class DataProviderService  {            
    constructor(private httpClient: HttpClient) {      
      this.GetBooks();
    }

    GetBooks(): Observable<any> {        
        return this.httpClient.get('/assets/books.json');                                  
    }

    GetAuthors(): Observable<any> {
      return this.httpClient.get('/assets/authors.json')
    }
}