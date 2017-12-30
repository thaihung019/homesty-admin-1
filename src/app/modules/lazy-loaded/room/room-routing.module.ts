import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {RoomComponent} from './room.component';

const roomRoute: Route[] = [
  {
    path: '',
    component: RoomComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(roomRoute)
  ],
  exports: [
    RouterModule
  ]
})

export class RoomRoutingModule {}
