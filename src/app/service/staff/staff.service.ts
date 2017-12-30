import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {IStaff} from '../../model/staff';
import {MockStaff} from '../../mock-data/staff';
import {ObjectHelper} from '../../helper/object-helper';
import UpdateObjectData = ObjectHelper.UpdateObjectData;
import immutableReplace = ObjectHelper.immutableReplace;
import immutableDelete = ObjectHelper.immutableDelete;
import immutableAdd = ObjectHelper.immutableAdd;
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class StaffService {

  private $staffList: BehaviorSubject<IStaff[]> = new BehaviorSubject(MockStaff);
  private baseUrl = environment.domain + '/staff';

  constructor(private _http: HttpClient) { }

  readStaffs(): Promise<IStaff[]> {
    return Promise.resolve(this.$staffList.getValue());
  }

  readStaffById(username: string): Promise<IStaff> {
    return Promise.resolve(this.$staffList.getValue().find(staff => staff.username === username));
  }

  addNewStaff(staffInfo: IStaff): Observable<any> {
    return this._http.post(this.baseUrl, staffInfo, {headers: {'Content-type': 'application/json'}, withCredentials: false});
    // this.$staffList.next(immutableAdd(staffInfo, this.$staffList.getValue()));
  }

  updateStaffInfo(username: string, updateData: IStaff) {
    const index = this.$staffList.getValue().findIndex(staff => staff.username === username);
    if (index > -1) {
      let currentStaff = this.$staffList.getValue().find(staff => staff.username === username);
      currentStaff = UpdateObjectData(currentStaff, updateData);
      this.$staffList.next(immutableReplace(index, currentStaff, this.$staffList.getValue()));
    } else {
      throw(new Error('Can not find this Staff'));
    }
  }

  deleteStaffById(username: string) {
    const index = this.$staffList.getValue().findIndex(staff => staff.username === username);
    if (index > -1) {
      this.$staffList.next(immutableDelete(index, this.$staffList.getValue()));
    } else {
      throw(new Error('Can not find this Staff'));
    }
  }

}
