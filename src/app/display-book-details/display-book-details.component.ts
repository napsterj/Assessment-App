import { IBookDetails } from './../../model/bookdetails';
import { SupplyDataServiceService } from './../shared/supply-data-service.service';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-book-details',
  templateUrl: './display-book-details.component.html',
  styleUrls: ['./display-book-details.component.css']
})
export class DisplayBookDetailsComponent implements OnInit {
  id: Number
  subscription: Subscription;
  book : IBookDetails;

  constructor(private activatedRoute: ActivatedRoute, 
              private router: Router,
              private supplyDataService: SupplyDataServiceService) { }
                                                         
  ngOnInit(): void {
    this.subscription = this.activatedRoute.paramMap.subscribe((param) => {
        this.id = Number(param.get('id'));
        this.showBookInfo()
    })
  }

  showBookInfo() {  
    this.book =  this.supplyDataService.findBookById(this.id)    
  }

  navigateToHome(){
    this.router.navigate([''])
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
