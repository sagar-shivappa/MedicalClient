import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(public http: HttpClient) {}

  loginPost(loginBody: any): Observable<any> {
    if (window.location.href.includes('localhost')) {
      return this.http.post('http://localhost:3000/medical/login', loginBody);
    }
    return this.http.post(
      'https://testsagarexpress.herokuapp.com/medical/login',
      loginBody
    );
  }
}
