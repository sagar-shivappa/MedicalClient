import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class StockComponent implements OnInit {
  selected = false;
  tab: any;
  selectedTabValue: any;
  activeLink: any;

  public tabs = [
    { name: 'HOME', id: 0 },
    { name: 'Available', id: 1 },
    { name: 'Indented Stocks', id: 2 },
    { name: 'Expired Stocks', id: 3 },
  ];
  constructor() {}

  ngOnInit(): void {}
  selectedTab(value: any) {
    if (value.id == 1) {
      this.selectedTabValue = 'available';
    } else if (value.id == 2) {
      this.selectedTabValue = 'indentedStock';
    } else if ((value.id = 3)) {
    } else if ((value.id = 0)) {
    }
  }
}
