import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { RegisterUserComponent } from '../RegisterUser/register-user/register-user.component';
import { LoginService } from './login.service';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public login = {
    phoneNumber: '',
    passWord: '',
  };
  errorMessage: any;
  password: any;
  loader: boolean = false;
  constructor(
    private router: Router,
    public dialog: MatDialog,
    public loginService: LoginService,
    public sharedService: SharedService
  ) {}

  ngOnInit(): void {}

  submitHandler() {
    this.loader = true;
    this.errorMessage = '';
    this.loginService.loginPost(this.login).subscribe((data: any) => {
      if (data.message === 'LogIn Success') {
        this.loader = false;
        this.sharedService.getLoggedInUser(data);
        this.router.navigate(['/admin', data.nickName]);
      } else {
        this.login = {
          phoneNumber: '',
          passWord: '',
        };
        this.loader = false;
        this.errorMessage = data.message;
        this.router.navigate(['/login']);
      }
    });

    // if (this.login.userName == 'sagar' && this.login.password == 'sagar') {
    //   this.router.navigate(['/admin', this.login.userName]);
    // } else {
    //   this.login = {
    //     userName: '',
    //     password: '',
    //   };
    //   this.router.navigate(['/login']);
    // }
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(RegisterUserComponent, {
      width: '550px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
  registerUser() {
    this.router.navigate(['/register']);
  }
}
