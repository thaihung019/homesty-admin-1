import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {UserComponent} from './user.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';

const userRoute: Route[] = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: '',
        redirectTo: 'login', pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(userRoute)
  ],
  exports: [
    RouterModule
  ]
})

export class UserRoutingModule {}
