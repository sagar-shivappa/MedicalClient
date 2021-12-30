import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public login = {
    userName: '',
    password: '',
  };
  password: any;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  submitHandler() {
    if (this.login.userName == 'sagar' && this.login.password == 'sagar') {
      this.router.navigate(['/admin', this.login.userName]);
    } else {
      this.login = {
        userName: '',
        password: '',
      };
      this.router.navigate(['/login']);
    }
  }
}
