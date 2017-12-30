import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AuthenService} from '../service/auth/authen.service';
import 'rxjs/add/operator/first';
import {IAccount} from '../model/account';

@Injectable()
export class AuthenGuard implements CanActivate {

  constructor(private _authen: AuthenService,
              private _router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this._authen.isLoggedIn.first().toPromise().then(loggin => {
      const staffData: IAccount = JSON.parse(localStorage.getItem('currentStaff'));
      if (loggin || staffData) {
        if (staffData.role === 1) {
          if (state.url === '/room' || state.url === '/hotel') { return true; }
          this._router.navigate(['/page-not-found']);
          return false;
        }
        return true;
      }
      this._router.navigate(['/login'], {queryParams: { returnUrl: state.url}});
      return false;
    });
  }
}
