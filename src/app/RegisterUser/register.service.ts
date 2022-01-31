import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(public http: HttpClient) {}

  registerNewUser(registerBody: any): Observable<any> {
    return this.http.post(
      'https://testsagarexpress.herokuapp.com/medical/register',
      registerBody
    );
  }
}
