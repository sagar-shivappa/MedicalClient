import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-todays-sales',
  templateUrl: './todays-sales.component.html',
  styleUrls: ['./todays-sales.component.css'],
})
export class TodaysSalesComponent implements OnInit {
  public loggedInUser: any = 0;
  message: any;
  today: any;
  addSales = {
    selectedDate: '',
    todaysSales: '',
    updatedTime: '',
    owner: '',
  };
  mySales: any;
  constructor(
    public sharedService: SharedService,
    public commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.today = new Date();
    this.addSales.selectedDate =
      this.today.getFullYear() +
      '-' +
      String(this.today.getMonth() + 1).padStart(2, '0') +
      '-' +
      String(this.today.getDate()).padStart(2, '0');
    this.sharedService.loggedInUser.subscribe((data) => {
      this.loggedInUser = data;
      this.addSales.owner = this.loggedInUser.shopId;
    });
  }

  submitSales() {
    this.addSales.updatedTime =
      this.today.getHours() +
      ':' +
      this.today.getMinutes() +
      ':' +
      this.today.getSeconds();
    console.log(this.addSales);
    if (this.loggedInUser) {
      this.commonService.addTodaySales(this.addSales).subscribe((res) => {
        this.message = res.message;
      });
    }
  }

  fetchAllSales() {
    let user = { owner: this.loggedInUser.shopId };
    if (this.loggedInUser) {
      this.commonService.getAllSales(user).subscribe((res) => {
        this.mySales = res.data;
        // console.log(res.data);
        // this.message = res.message;
      });
    }
  }
}
