import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingComponent } from './setting.component';
import {SettingRoutingModule} from './setting-routing.module';
import { RoomComponent } from './room/room.component';
import { AccountComponent } from './account/account.component';
import { HotelInfoComponent } from './hotel-info/hotel-info.component';
import { RoomTypeComponent } from './room/room-type/room-type.component';
import { RoomInfoComponent } from './room/room-info/room-info.component';
import { ListRoomTypeComponent } from './room/room-type/list-room-type/list-room-type.component';
import { NewRoomTypeComponent } from './room/room-type/new-room-type/new-room-type.component';
import { EditRoomTypeComponent } from './room/room-type/edit-room-type/edit-room-type.component';
import { ListRoomInfoComponent } from './room/room-info/list-room-info/list-room-info.component';
import { NewRoomInfoComponent } from './room/room-info/new-room-info/new-room-info.component';
import { EditRoomInfoComponent } from './room/room-info/edit-room-info/edit-room-info.component';
import { ListAccountComponent } from './account/list-account/list-account.component';
import { NewAccountComponent } from './account/new-account/new-account.component';
import { EditAccountComponent } from './account/edit-account/edit-account.component';
import {
  MatDatepickerModule, MatDialogModule, MatInputModule, MatNativeDateModule, MatSelectModule,
  MatTooltipModule
} from '@angular/material';
import {StaffService} from "../../../service/staff/staff.service";
import { AccountProfileComponent } from './account/reuse-component/account-profile/account-profile.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SettingRoutingModule,

    // Material module
    MatTooltipModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule
  ],
  declarations: [
    SettingComponent,
    RoomComponent,
    AccountComponent,
    HotelInfoComponent,
    RoomTypeComponent,
    RoomInfoComponent,
    ListRoomTypeComponent,
    NewRoomTypeComponent,
    EditRoomTypeComponent,
    ListRoomInfoComponent,
    NewRoomInfoComponent,
    EditRoomInfoComponent,
    ListAccountComponent,
    NewAccountComponent,
    EditAccountComponent,
    AccountProfileComponent
  ],
  providers: [
    StaffService
  ]
})

export class SettingModule { }
