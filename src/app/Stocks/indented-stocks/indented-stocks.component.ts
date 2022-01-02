import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-indented-stocks',
  templateUrl: './indented-stocks.component.html',
  styleUrls: ['./indented-stocks.component.css'],
})
export class IndentedStocksComponent implements OnInit {
  @Input() indStockList: any;
  newList: any;
  constructor() {}

  ngOnInit(): void {
    this.newList = this.indStockList.filter((item: any) => item.quantity < 20);
    console.log('intdented', this.newList);
  }
}
