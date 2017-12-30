import {Component, OnInit} from '@angular/core';
import {AuthenService} from "./service/auth/authen.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  isLoggedIn = false;

  constructor(private _authen: AuthenService) {}

  ngOnInit() {
    this._authen.isLoggedIn.subscribe(loggin => {
      this.isLoggedIn = loggin;
      if (JSON.parse(localStorage.getItem('currentStaff'))) {
        this.isLoggedIn = true;
      }
    });
  }

}
