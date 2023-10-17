import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { RegisterUserComponent } from '../RegisterUser/register-user/register-user.component';
import { LoginService } from './login.service';
import { SharedService } from '../shared.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  errorMessage: any;
  loader: boolean = false;

  constructor(
    private router: Router,
    public dialog: MatDialog,
    public loginService: LoginService,
    public sharedService: SharedService,
    public fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.login = this.fb.group({
      phoneNumber: ['', Validators.required],
      passWord: ['', Validators.required],
    });
  }

  submitHandler() {
    if (this.login.valid) {
      this.loader = true;
      this.errorMessage = '';
      this.loginService.loginPost(this.login.value).subscribe((data: any) => {
        if (data.status === 200) {
          this.loader = false;
          this.sharedService.getLoggedInUser(data);
          this.router.navigate(['/admin', data.nickName]);
        } else {
          this.loader = false;
          this.errorMessage = data.message;
          this.router.navigate(['/login']);
        }
      });
    }
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
