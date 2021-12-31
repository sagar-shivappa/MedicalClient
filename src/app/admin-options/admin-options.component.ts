import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-options',
  templateUrl: './admin-options.component.html',
  styleUrls: ['./admin-options.component.css'],
})
export class AdminOptionsComponent implements OnInit {
  loggedInUser: any;
  userOptions = [
    {
      name: 'Bills',
      id: '123',
      img: 'https://cms.cloudinary.vpsvc.com//image/fetch/q_auto:best,w_700,f_auto,dpr_auto/https://s3-eu-west-1.amazonaws.com/sitecore-media-bucket/prod%2Fen-IN%2F%7B29558972-FE75-46B7-9A16-7A7A49B9864C%7D%3Fv%3D1d87d9d063b8aebffd9b68c77adc6ed1',
    },
    {
      name: 'Sales',
      id: '121',
      img: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_539953664_213316.jpg',
    },
    {
      name: 'Stock',
      id: '131',
      img: 'https://image.shutterstock.com/image-vector/various-meds-pills-capsules-blisters-260nw-1409823341.jpg',
    },
  ];
  constructor(public actRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.actRoute.params.subscribe(
      (data) => (this.loggedInUser = data['name'])
    );
  }
  optionHandler(value: any) {
    if (value == 'Stock') {
      this.router.navigate(['stock']);
    }
  }
}
