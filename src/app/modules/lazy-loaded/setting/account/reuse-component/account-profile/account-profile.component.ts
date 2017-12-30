import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IStaff} from '../../../../../../model/staff';
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-account-profile',
  templateUrl: './account-profile.component.html',
  styleUrls: ['./account-profile.component.sass']
})
export class AccountProfileComponent implements OnInit {

  roleOptions: any;
  profileForm: FormGroup;
  @Input() set staffInfo(val) {
    if (val) {
      this.isOnAddNewProfile = false;
      if (val.role !== 2) {
        this.isAdmin = true;
      }
      this.initFormData(val);
    }
  }
  @Input() set disableForm(val) {
    setTimeout(() => this.requestFormDisable(val), 100);
  }
  @Output() profileFormValueChange = new EventEmitter();
  isOnAddNewProfile = true;
  isAdmin = false;

  constructor(private _fb: FormBuilder,
              private _alert: MatSnackBar) { }

  ngOnInit() {
    this.initFormData();
  }

  detectAvatarChange(event) {
    if (event.target.files[0].type.match('image.*')) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.profileForm.controls['avatar'].setValue(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    } else {
      this._alert.open('Plase make sure that you provide an Image file!', 'Ok', {
        duration: 3000,
        verticalPosition: 'top'
      });
    }

  }

  initFormData(data?: IStaff) {
    this.roleOptions = [
      {
        value: 0,
        label: 'Admin'
      },
      {
        value: 1,
        label: 'Receptionist'
      },
      {
        value: 2,
        label: 'Staff'
      }
    ];
    this.profileForm = this._fb.group({
      role: [data && data.role || null, Validators.required],
      username: [data && data.username || null],
      password: [data && data.password || null],
      fullName: [data && data.fullName || null, Validators.required],
      dob: [(data && data.dob) ? new Date(data.dob) : null, Validators.required],
      gender: [data && data.gender || null, Validators.required],
      address: [data && data.address || null],
      position: [data && data.position || null],
      phone1: [data && data.phone1 || null, Validators.required],
      phone2: [data && data.phone2 || null],
      email: [data && data.email || null, Validators.required],
      avatar: [data && data.avatar || null],
    });
    this.receiveFormValueChange();
  }

  receiveFormValueChange() {
    this.profileForm.valueChanges.subscribe(values => {
      let formValue: any = {
        valid: this.profileForm.valid,
        dirty: this.profileForm.dirty
      };
      this.isOnAddNewProfile = false;
      if (this.profileForm.controls['role'].value !== 2) {
        this.isAdmin = true;
      } else {
        this.isAdmin = false;
      }
      if (this.profileForm.valid && this.profileForm.dirty) {
        formValue = {
          ...formValue,
          values
        };
      }
      this.profileFormValueChange.emit(formValue);
    });
  }

  requestFormDisable(disable: boolean) {
    if (disable) {
      Object.keys(this.profileForm.controls).forEach(key => this.profileForm.controls[key].disable());
    } else {
      this.profileForm.enable();
    }
  }

}
