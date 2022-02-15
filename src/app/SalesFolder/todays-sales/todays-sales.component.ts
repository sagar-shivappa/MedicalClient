import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todays-sales',
  templateUrl: './todays-sales.component.html',
  styleUrls: ['./todays-sales.component.css'],
})
export class TodaysSalesComponent implements OnInit {
  public loggedInUser: any = 0;
  customSales: any = 0;
  daySales: any = 0;
  loader: boolean = true;
  // paymentType: any;
  message: any;
  today: any;
  addSales = {
    selectedDate: '',
    todaysSales: 0,
    updatedTime: '',
    owner: '111',
    Cash_Payment: 0,
    UPI_Payment: 0,
    donors_Pay: 0,
    paymentType: '',
    paymentMoney: '',
  };
  mySalesOpen: boolean = false;
  mySales: any;
  paymentGroup: any;
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
      this.fetchTodaysSales();
    });
  }

  submitSales() {
    //this.today = new Date();
    this.loader = true;
    //this.addSales.paymentType = this.paymentType;
    this.addSales.updatedTime =
      this.today.getHours() +
      ':' +
      this.today.getMinutes() +
      ':' +
      this.today.getSeconds();
    console.log(this.addSales);
    if (this.loggedInUser) {
      parseInt(this.addSales.paymentMoney);
      this.commonService.addTodaySales(this.addSales).subscribe((res) => {
        this.daySales = '';
        this.message = res.message;

        this.daySales = res.data.todaysSales;

        this.loader = false;
        this.addSales.paymentMoney = '';
        this.addSales.paymentType = '';
      });
      // this.checkSales();
    }
  }
  // checkSales(data:any) {
  //   if (this.loggedInUser) {
  //     this.commonService.addTodaySales(this.addSales).subscribe((res) => {
  //       this.message = res.message;

  //       this.daySales = res.data.todaysSales;

  //       this.loader = false;
  //       this.addSales.paymentMoney = '';
  //       this.addSales.paymentType = '';
  //     });
  //   }
  // }
  fetchTodaysSales() {
    let user = {
      owner: this.loggedInUser.shopId,
      selectedDate: this.addSales.selectedDate,
    };
    // let user = { owner: 9945915370 };
    if (this.loggedInUser) {
      this.commonService.getAllSales(user).subscribe((res) => {
        // this.mySales = res.data.reverse();
        // this.mySalesOpen = true;
        if (res.data != null) {
          this.daySales = res.data.todaysSales;
        }
        this.loader = false;
      });
    }
  }
  fetchAllSales() {
    let user = {
      owner: this.loggedInUser.shopId,
      selectedDate: null,
    };
    // let user = { owner: 9945915370 };
    if (this.loggedInUser && !this.mySalesOpen) {
      this.commonService.getAllSales(user).subscribe((res) => {
        this.mySales = res.data.reverse();
        this.mySalesOpen = true;
        //this.daySales = res.data.todaysSales;
        this.loader = false;
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
