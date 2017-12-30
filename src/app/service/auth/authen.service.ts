import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {IStaff} from '../../model/staff';
import {MockStaff} from '../../mock-data/staff';
import {Observable} from 'rxjs/Observable';
import {IAccount} from "../../model/account";

@Injectable()
export class AuthenService {

  private $staffList: BehaviorSubject<IStaff[]> = new BehaviorSubject(MockStaff);
  private $isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public isLoggedIn: Observable<boolean> = this.$isLoggedIn.asObservable();

  constructor() { }

  public login(account: IAccount): Promise<boolean> {
    if (account.username && account.password) {
      const loginAccount = this.$staffList.getValue().find(staff => staff.username === account.username && staff.password === account.password);
      if (loginAccount) {
        const currentUser: IAccount = {
          username: loginAccount.username,
          password: loginAccount.password,
          role: loginAccount.role,
          fullName: loginAccount.fullName,
          avatar: loginAccount.avatar,
        };
        localStorage.setItem('currentStaff', JSON.stringify(currentUser));
        this.$isLoggedIn.next(true);
        return Promise.resolve(true);
      } else {
        return Promise.resolve(false);
      }
    }
  }

  logout() {
    localStorage.clear();
    setTimeout(() => this.$isLoggedIn.next(false));
  }

}
