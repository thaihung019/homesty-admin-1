import { Component, OnInit } from '@angular/core';
import {AuthenService} from '../../../service/auth/authen.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IAccount} from '../../../model/account';
import {MatSnackBar} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  private account: IAccount;
  private returnUrl;
  loginForm: FormGroup;

  constructor(private _authen: AuthenService,
              private _alert: MatSnackBar,
              private _router: Router,
              private _activateRoute: ActivatedRoute,
              private _fb: FormBuilder) { }

  ngOnInit() {
    this._authen.logout();
    this.initFormData();
    this.returnUrl = this._activateRoute.snapshot.queryParams['returnUrl'] || '/hotel';
  }

  initFormData() {
    this.loginForm = this._fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
    this.loginForm.valueChanges.subscribe(values => {
      if (this.loginForm.valid && this.loginForm.dirty) {
        this.account = values;
      }
    });
  }

  handleLoginBtn() {
    if (this.account) {
      this._authen.login(this.account).then(
        success => {
          if (success) {
            this._alert.open('Hello. Have a good day!', '', {
              duration: 3000,
              verticalPosition: 'top'
            });
            const currentStaff = JSON.parse(localStorage.getItem('currentStaff'));
            if (currentStaff.role === 1) {
              this._router.navigate(['/room']);
            } else {
              this._router.navigate([this.returnUrl]);
            }
          } else {
            this._alert.open('Your password or username is invalid!', '', {
              duration: 3000,
              verticalPosition: 'top'
            });
          }
        }
      );
    }
  }

}
