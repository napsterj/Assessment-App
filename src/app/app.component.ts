import { Component } from '@angular/core';
import { DataProviderService } from 'src/Services/dataproviderservice';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'book-details';
  constructor(private dataService : DataProviderService){
    this.dataService.GetBooks();
  }  
}
