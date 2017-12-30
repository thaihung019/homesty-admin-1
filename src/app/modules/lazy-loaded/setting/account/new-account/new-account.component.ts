import { Component, OnInit } from '@angular/core';
import {IStaff} from "../../../../../model/staff";
import {StaffService} from "../../../../../service/staff/staff.service";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.sass']
})
export class NewAccountComponent implements OnInit {

  private staffInfo: IStaff;
  isAddBtnDisable = true;

  constructor(private _staff: StaffService) { }

  ngOnInit() {

  }

  receiveProfileValue(event) {
    if (event.valid && event.dirty) {
      this.isAddBtnDisable = false;
      if (event.values) {
        this.staffInfo = event.values;
      }
    }
  }

  onAddBtnClick() {
    this._staff.addNewStaff(this.staffInfo);
  }

}
