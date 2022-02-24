import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private data = new BehaviorSubject('');
  private User = new BehaviorSubject('');
  private salesData = new BehaviorSubject('');
  currentData = this.data.asObservable();
  loggedInUser = this.User.asObservable();
  sendSalesData = this.salesData.asObservable();
  constructor() {}

  updateMessage(item: any) {
    this.data.next(item);
  }

  getLoggedInUser(item: any) {
    this.User.next(item);
  }
  addSaleData(item: any) {
    this.salesData.next(item);
  }
}
