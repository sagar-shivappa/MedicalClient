import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-sales-home',
  templateUrl: './sales-home.component.html',
  styleUrls: ['./sales-home.component.css'],
})
export class SalesHomeComponent implements OnInit {
  userName: any;
  welcome: boolean = true;
  constructor(public actRoute: ActivatedRoute) {}

  ngOnInit(): void {
    let name = this.actRoute.params.subscribe((data) => {
      this.userName = data['name'];
    });
    setTimeout(() => {
      this.welcome = false;
    }, 3000);
  }
}
