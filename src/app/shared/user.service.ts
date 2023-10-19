import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // userData = {
  //   username: '',
  //   password: '',
  //   firstName: '',
  //   lastName: '',
  //   sex: '',
  //   phone: '',
  //   street: '',
  //   city: '',
  //   zip: '',
  //   doctor: false,
  //   hourRate: null,
  //   medicalSpecialty: '',
  //   patient: false,
  //   insuranceId: '',
  //   pharmacist: false,
  //   pharmacyName: ''
  // };

  test = new Subject();

  constructor() {}

  setUser(data) {
    // this.userData = data;
    this.test.next(data);
  }

  getUser(){
    return this.test;
  }
}
