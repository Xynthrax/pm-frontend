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
}
