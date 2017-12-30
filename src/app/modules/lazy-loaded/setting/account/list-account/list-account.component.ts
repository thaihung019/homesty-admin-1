import { Component, OnInit } from '@angular/core';
import {StaffService} from '../../../../../service/staff/staff.service';
import {IStaff} from '../../../../../model/staff';
import {MatDialog, MatSnackBar} from '@angular/material';
import {ConfirmDeleteComponent} from "../../../../../component/dialog/confirm-delete/confirm-delete.component";

@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.sass']
})
export class ListAccountComponent implements OnInit {

  staffList: IStaff[];

  constructor(private _staff: StaffService,
              private _alert: MatSnackBar,
              private _confirm: MatDialog) { }

  ngOnInit() {
    this.initData();
  }

  initData() {
    this._staff.readStaffs().then(staffs => this.staffList = staffs);
  }

  handleDeleteStaff(staffId, staffName) {
    let dialogRef = this._confirm.open(ConfirmDeleteComponent, {
      data: { name: staffName, value: staffId }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._staff.deleteStaffById(result);
        this.initData();
        this._alert.open('Deleted successfully!', '', {
          duration: 3000,
          verticalPosition: 'top',
        });
      }
    });
  }

}
