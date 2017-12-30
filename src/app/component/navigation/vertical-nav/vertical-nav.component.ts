import { Component, OnInit } from '@angular/core';
import {INavItem, NavItem} from '../../../model/nav-bar';
import {Router} from "@angular/router";
import {AuthenService} from "../../../service/auth/authen.service";
import {IAccount} from "../../../model/account";

@Component({
  selector: 'app-vertical-nav',
  templateUrl: './vertical-nav.component.html',
  styleUrls: ['./vertical-nav.component.sass']
})
export class VerticalNavComponent implements OnInit {

  navItems: INavItem[] = NavItem;
  currentStaff: IAccount;

  constructor(private _router: Router,
              private _authen: AuthenService) { }

  ngOnInit() {
    this.getStaffDetail();
  }

  getStaffDetail() {
    const staff = JSON.parse(localStorage.getItem('currentStaff'));
    if (staff) {
      this.currentStaff = staff;
      if (staff.role === 1) {
        this.navItems = [...this.navItems.filter(item => item.title !== 'Dashboard')];
      }
    }
  }

}
