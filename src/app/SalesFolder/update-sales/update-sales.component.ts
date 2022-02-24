import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-update-sales',
  templateUrl: './update-sales.component.html',
  styleUrls: ['./update-sales.component.css'],
})
export class UpdateSalesComponent implements OnInit {
  data: any = [];
  constructor(public sharedService: SharedService) {}

  ngOnInit(): void {
    this.sharedService.sendSalesData.subscribe((res) => (this.data = res));
    console.log(this.data);
  }
  updateSales() {
    console.log(this.data);
  }
}
