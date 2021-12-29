import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css'],
})
export class BaseLayoutComponent implements OnInit {
  public login = 'LOGIN';
  constructor() {}

  ngOnInit(): void {}

  loginUser() {
    this.login = 'LOGOUT';
    console.log(this.login);
  }
}
