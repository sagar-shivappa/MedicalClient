import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css'],
})
export class RegisterUserComponent implements OnInit {
  myForm: FormGroup;
  successMessage: any = '';
  phonePattern = '';
  passWordFirst: any = '';
  passWordFinal: any;
  checkPassError: boolean = false;
  successSwitch = false;
  failSwitch = false;
  loader: boolean = false;
  pass = new FormGroup({
    passWordFirst: new FormControl(),
  });
  constructor(
    public fb: FormBuilder,
    public registerService: RegisterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      userName: new FormControl('', Validators.required),
      gmail: new FormControl('', [Validators.required, Validators.email]),
      passWord: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9]{10,12}$/),
      ]),
      gstPint: new FormControl('', [Validators.required]),
      gender: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
    });
  }
  checkPassword() {
    if (this.passWordFirst === this.myForm.value.passWord) {
      this.checkPassError = false;
    } else {
      this.checkPassError = true;
    }
  }
  onSubmit(form: FormGroup) {
    this.loader = true;
    console.log('Valid?', form.valid); // true or false
    console.log('Message', form.value);
    if (form.valid) {
      this.registerService.registerNewUser(form.value).subscribe((res) => {
        console.log(res);
        if (res.message === 'User Exsists') {
          this.failSwitch = true;
          this.successMessage = 'Account with this E-Mail Id exsists';
          this.loader = false;
          setTimeout(() => {
            this.failSwitch = false;
            this.successMessage = '';
          }, 3500);
        } else if (res.message === 'User Account Created') {
          this.successSwitch = true;
          this.successMessage = 'Thanks for Successful Creation of Account';
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 3500);
        }
        this.loader = false;
      });
    } else {
      this.failSwitch = true;
      this.loader = false;
      this.successMessage = 'Check all the fields before Submitting';
    }
    setTimeout(() => {
      this.failSwitch = false;
      this.successMessage = '';
    }, 3500);
  }
  loginEnter() {
    this.router.navigate(['/login']);
  }
}
