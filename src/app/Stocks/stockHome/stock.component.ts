import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { StockService } from '../stock.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class StockComponent implements OnInit {
  selected = false;
  tab: any;
  selectedTabValue = 'available';
  activeLink: any;
  masterDrugList = [];
  public tabs = [
    { name: 'HOME', id: 0 },
    { name: 'Available Stocks', id: 1 },
    { name: 'Indentable Stocks', id: 2 },
    { name: 'Expired Stocks', id: 3 },
  ];
  constructor(
    public actRoute: ActivatedRoute,
    private route: Router,
    public stockService: StockService
  ) {}
  loggedInUser: any;
  ngOnInit(): void {
    this.actRoute.params.subscribe(
      (data) => (this.loggedInUser = data['name'])
    );

    this.stockService.getStock().subscribe((data) => {
      this.masterDrugList = data;
      console.log('master', this.masterDrugList);
    });
  }
  selectedTab(value: any) {
    if (value.id == 1) {
      this.selectedTabValue = 'available';
    } else if (value.id == 2) {
      this.selectedTabValue = 'indentedStock';
    } else if (value.id == 3) {
      this.selectedTabValue = 'expiredStock';
    } else if (value.id == 0) {
      this.route.navigate(['admin/' + this.loggedInUser]);
    }
  }
}
