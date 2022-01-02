import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-available-stocks',
  templateUrl: './available-stocks.component.html',
  styleUrls: ['./available-stocks.component.css'],
})
export class AvailableStocksComponent implements OnInit {
  @Input() activeDrugList: any;
  constructor() {}

  ngOnInit(): void {}
}
