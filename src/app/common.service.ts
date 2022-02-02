import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(public http: HttpClient) {}

  checkWindow() {
    if (window.location.href.includes('localhost')) {
      return true;
    }
    return false;
  }

  addTodaySales(info: any): Observable<any> {
    if (this.checkWindow()) {
      return this.http.post('http://localhost:3000/sales/addSales', info);
    }
    return this.http.post(
      'https://testsagarexpress.herokuapp.com/sales/addSales',
      info
    );
  }

  getAllSales(info: any): Observable<any> {
    if (this.checkWindow()) {
      return this.http.post('http://localhost:3000/sales/getSales', info);
    }
    return this.http.post(
      'https://testsagarexpress.herokuapp.com/sales/getSales',
      info
    );
  }
}
