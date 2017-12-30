import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-horizontal-nav',
  templateUrl: './horizontal-nav.component.html',
  styleUrls: ['./horizontal-nav.component.sass']
})
export class HorizontalNavComponent implements OnInit {

  private isSideBarToggle = false;
  private isSideBarVisible = true;
  // pageTitle: string;

  constructor(private _router: Router) { }

  ngOnInit() {
    this._router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        console.log(e);
      }
    });
  }

  toggleVerticalBar() {
    const body = document.getElementsByTagName('body')[0];
    if (this.isSideBarToggle) {
      body.classList.remove('sidebar-mini');
    } else {
      body.classList.add('sidebar-mini');
    }
    this.isSideBarToggle = !this.isSideBarToggle;
  }

  toggleNavBarOnMobile() {
    const toggleBtn = document.getElementsByClassName('navbar-toggle')[0];
    const body = document.getElementsByTagName('body')[0];
    if (this.isSideBarVisible) {
      toggleBtn.classList.add('toggled');
      body.classList.add('nav-open');
    } else {
      toggleBtn.classList.remove('toggled');
      body.classList.remove('nav-open');
    }
    this.isSideBarVisible = !this.isSideBarVisible;
  }

}
