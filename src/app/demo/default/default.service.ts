import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';

@Injectable({
  providedIn: 'root'
})
export class DefaultService {
  constructor(private apiService: ApiService) {}

  ngOnInit() {}

  getAppointments(username) {
    return this.apiService.get(`/appointments/patient/${username}`);
  }

  getDoctorDetail(id){
    return this.apiService.get(`/doctors/${id}`)
  }

  getAppointmentDetail(id){
    return this.apiService.get(`/appointments/${id}`);
  }
}
