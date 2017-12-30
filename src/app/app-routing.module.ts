import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AuthenGuard} from './guard/authen.guard';

const lazyRoutes: Routes = [
  {
    path: 'dashboard',
    loadChildren: 'app/modules/lazy-loaded/dashboard/dashboard.module#DashboardModule',
    data: { title: 'Dashboard' },
    canActivate: [AuthenGuard]
  },
  {
    path: 'hotel',
    loadChildren: 'app/modules/lazy-loaded/hotel/hotel.module#HotelModule',
    data: { title: 'Hotel' },
    canActivate: [AuthenGuard]
  },
  {
    path: 'room',
    loadChildren: 'app/modules/lazy-loaded/room/room.module#RoomModule',
    data: { title: 'Room' },
    canActivate: [AuthenGuard]
  },
  {
    path: 'setting',
    loadChildren: 'app/modules/lazy-loaded/setting/setting.module#SettingModule',
    data: { title: 'Setting' },
    canActivate: [AuthenGuard]
  }
];

const mainRoutes: Routes = [
  ...lazyRoutes,
  {
    path: '',
    redirectTo: 'hotel',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(mainRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthenGuard,
  ]
})

export class AppRoutingModule {}
