import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';

@Injectable({
  providedIn: 'root'
})
export class PharmasictService {

  constructor(private apiService: ApiService) { }

  getPrescriptions(){
    return this.apiService.get(`/prescriptions/pharmacist/1`);
  }

  deliverPrescription(id, netPayment){
    return this.apiService.post(`/prescriptions/delivery`, {id, netPayment});
  }
}
