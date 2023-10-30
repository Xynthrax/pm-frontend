import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';

@Injectable({
  providedIn: 'root'
})
export class CheckupService {

  constructor(private apiService: ApiService) { }

  getAppointments(){
    return this.apiService.get(`/appointments/doctor`);
  }

  getPharmacies(){
    return this.apiService.get(`/pharmacists`);
  }

  checkUp(id, result, prescriptions){
    return this.apiService.post(`/appointments/checkup`, {id,result,prescriptions});

  }
}
