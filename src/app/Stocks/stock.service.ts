import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  constructor(public http: HttpClient) {}

  getStock(): Observable<any> {
    return this.http.get('https://61500026a706cd00179b7357.mockapi.io/users');
  }
}
