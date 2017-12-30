import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {HotelComponent} from './hotel.component';

const hotelRoute: Route[] = [
  {
    path: '',
    component: HotelComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(hotelRoute)
  ],
  exports: [
    RouterModule
  ]
})

export class HotelRoutingModule {}
