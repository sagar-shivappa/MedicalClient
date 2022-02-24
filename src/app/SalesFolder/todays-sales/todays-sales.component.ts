import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { UpdateSalesComponent } from '../update-sales/update-sales.component';

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
  errorMessage: string = '';
  message: any;
  today: any;
  p = 1;
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
    public dialog: MatDialog,
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
  editSales(item: any) {
    this.sharedService.addSaleData(item);
    const dialogRef = this.dialog.open(UpdateSalesComponent, {
      width: '550px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
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

    if (this.loggedInUser && this.addSales.paymentType) {
      this.errorMessage = '';
      parseInt(this.addSales.paymentMoney);
      this.commonService.addTodaySales(this.addSales).subscribe((res) => {
        this.daySales = '';
        this.message = res.message;
        this.daySales = res.data.todaysSales;
        this.loader = false;
        this.addSales.paymentMoney = '';
        this.addSales.paymentType = '';

        this.fetchAllSales();
      });
    } else {
      this.errorMessage = 'Please Select the Payment Type ';
      this.loader = false;
    }
  }

  fetchTodaysSales() {
    let user = {
      owner: this.loggedInUser.shopId,
      selectedDate: this.addSales.selectedDate,
    };

    if (this.loggedInUser) {
      this.commonService.getAllSales(user).subscribe((res) => {
        if (res.data != null) {
          this.daySales = res.data.todaysSales;
        }
        this.loader = false;
      });
    } else {
      this.errorMessage = 'User has not logged in. Kindly Relogin';
      this.loader = false;
      this.route.navigate(['login/']);
    }
  }
  fetchAllSales() {
    let user = {
      owner: this.loggedInUser.shopId,
      selectedDate: null,
    };
    // let user = { owner: 9945915370 };
    if (this.loggedInUser) {
      this.commonService.getAllSales(user).subscribe((res) => {
        this.mySales = res.data.reverse();
        this.mySalesOpen = true;
        //this.daySales = res.data.todaysSales;
        this.loader = false;
        //this.mySalesOpen = !this.mySalesOpen;
      });
    } else {
      this.mySalesOpen = false;
      // this.loader = false;
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
