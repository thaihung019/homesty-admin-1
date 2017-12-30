import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IStaff} from "../../../../../model/staff";
import {StaffService} from "../../../../../service/staff/staff.service";

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.sass']
})
export class EditAccountComponent implements OnInit {

  private staffId: any;
  selectedStaff: IStaff;
  updateData: IStaff;
  isSaveBtnDisable = true;
  isEditBtnVisible = true;

  constructor(private _activateRoute: ActivatedRoute,
              private _staff: StaffService) { }

  ngOnInit() {
    this.staffId = this._activateRoute.snapshot.params['id'];
    this.initData();
  }

  initData() {
    this._staff.readStaffById(this.staffId).then(staff => this.selectedStaff = staff);
  }

  receiveProfileValue(event) {
    this.isSaveBtnDisable = true;
    if (event.valid && event.dirty) {
      this.isSaveBtnDisable = false;
      this.updateData = event.values;
    }
  }

  onSaveBtnClick() {
    this._staff.updateStaffInfo(this.staffId, this.updateData);
  }

}
