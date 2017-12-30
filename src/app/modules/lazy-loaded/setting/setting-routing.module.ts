import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {SettingComponent} from './setting.component';
import {AccountComponent} from './account/account.component';
import {RoomComponent} from './room/room.component';
import {HotelInfoComponent} from './hotel-info/hotel-info.component';
import {RoomInfoComponent} from './room/room-info/room-info.component';
import {RoomTypeComponent} from './room/room-type/room-type.component';
import {ListRoomInfoComponent} from './room/room-info/list-room-info/list-room-info.component';
import {NewRoomInfoComponent} from './room/room-info/new-room-info/new-room-info.component';
import {EditRoomInfoComponent} from './room/room-info/edit-room-info/edit-room-info.component';
import {ListRoomTypeComponent} from './room/room-type/list-room-type/list-room-type.component';
import {NewRoomTypeComponent} from './room/room-type/new-room-type/new-room-type.component';
import {EditRoomTypeComponent} from './room/room-type/edit-room-type/edit-room-type.component';
import {ListAccountComponent} from './account/list-account/list-account.component';
import {NewAccountComponent} from './account/new-account/new-account.component';
import {EditAccountComponent} from './account/edit-account/edit-account.component';

const settingRoute: Route[] = [
  {
    path: '',
    component: SettingComponent,
    children: [
      {
        path: 'staff',
        component: AccountComponent,
        children: [
          {
            path: 'list',
            component: ListAccountComponent
          },
          {
            path: 'new',
            component: NewAccountComponent
          },
          {
            path: 'detail/:id',
            component: EditAccountComponent
          },
          {
            path: '',
            redirectTo: 'list', pathMatch: 'full'
          }
        ]
      },
      {
        path: 'room',
        component: RoomComponent,
        children: [
          {
            path: 'room-info',
            component: RoomInfoComponent,
            children: [
              {
                path: 'list',
                component: ListRoomInfoComponent
              },
              {
                path: 'new',
                component: NewRoomInfoComponent
              },
              {
                path: 'detail/:id',
                component: EditRoomInfoComponent
              },
              {
                path: '',
                redirectTo: 'list', pathMatch: 'full'
              }
            ]
          },
          {
            path: 'room-type',
            component: RoomTypeComponent,
            children: [
              {
                path: 'list',
                component: ListRoomTypeComponent
              },
              {
                path: 'new',
                component: NewRoomTypeComponent
              },
              {
                path: 'detail/:id',
                component: EditRoomTypeComponent
              },
              {
                path: '',
                redirectTo: 'list', pathMatch: 'full'
              }
            ]
          },
          {
            path: '',
            redirectTo: 'room-type', pathMatch: 'full'
          }
        ]
      },
      {
        path: 'hotel',
        component: HotelInfoComponent
      },
      {
        path: '',
        redirectTo: 'staff', pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(settingRoute)
  ],
  exports: [
    RouterModule
  ]
})

export class SettingRoutingModule {}
