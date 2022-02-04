import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todays-sales',
  templateUrl: './todays-sales.component.html',
  styleUrls: ['./todays-sales.component.css'],
})
export class TodaysSalesComponent implements OnInit {
  public loggedInUser: any = 0;
  customSales: any = 0;
  daySales: any = 0;
  loader: boolean = false;
  message: any;
  today: any;
  addSales = {
    selectedDate: '',
    todaysSales: '',
    updatedTime: '',
    owner: '',
  };
  mySalesOpen: boolean = false;
  mySales: any;
  constructor(
    public sharedService: SharedService,
    public commonService: CommonService,
    private route: Router
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
    this.loader = true;
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
        this.daySales = res.updatedSales;
        this.loader = false;
      });
    }
  }

  fetchAllSales() {
    let user = { owner: this.loggedInUser.shopId };
    // let user = { owner: 9945915370 };
    if (this.loggedInUser && !this.mySalesOpen) {
      this.commonService.getAllSales(user).subscribe((res) => {
        this.mySales = res.data.reverse();
        this.mySalesOpen = true;
      });
    } else {
      this.mySalesOpen = false;
    }
  }
  selctedDays(value: any) {
    let latestSales = this.mySales;
    let price = 0;
    latestSales.map((item: any, index: any) => {
      //console.log(item, index);
      if (value - 1 >= index) {
        price = price + item.todaysSales;
      }
    });
    this.customSales = price;
    console.log(price);
  }
  backHome() {
    this.route.navigate(['admin/' + this.loggedInUser]);
  }
}
