import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';

@Injectable({
  providedIn: 'root'
})
export class SampleService {
  constructor(private apiService: ApiService) {}

  ngOnInit() {}

  getDoctorList() {
    return this.apiService.get(`/doctors`);
  }

  getDoctorDetail(id) {
    return this.apiService.get(`/doctors/${id}`);
  }

  getAppointmentDetail(id) {
    return this.apiService.get(`/appointments/${id}`);
  }

  getDoctorAvailableTime(doctorId, dateTime) {
    console.log(this.setHours(dateTime))
    return this.apiService.post(`/appointments/doctor/date`, { doctorId, dateTime: this.setHours(dateTime) });
  }

  createAppointment(doctorId, dateTime) {
    return this.apiService.post(`/appointments`, {doctorId,dateTime: this.setHours(dateTime)});
  }

  setHours(date: Date) {
    const hours = (date.getTimezoneOffset() / 60) * -1;
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const milliseconds = date.getMilliseconds();
    date = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours() + hours, minutes, seconds, milliseconds);

    return date;
  }
}
