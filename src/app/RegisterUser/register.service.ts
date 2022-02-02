import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(public http: HttpClient) {}

  registerNewUser(registerBody: any): Observable<any> {
    if (window.location.href.includes('localhost')) {
      return this.http.post(
        'http://localhost:3000/medical/register',
        registerBody
      );
    }
    return this.http.post(
      'https://testsagarexpress.herokuapp.com/medical/register',
      registerBody
    );
  }
}
