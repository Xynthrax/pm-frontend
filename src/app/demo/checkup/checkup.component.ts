import { Component, ViewEncapsulation } from '@angular/core';
import { CheckupService } from './checkup.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, Validators } from '@angular/forms';
import { DataSource, CollectionViewer } from '@angular/cdk/collections';
import { BehaviorSubject, Observable, catchError, of, finalize } from 'rxjs';
import { AlertService } from 'src/app/alert';

interface Pharmacist {
  pharmacyName: string;
  id: number;
  city;
}

class DynamicGrid {
  drugList: string;
  pharmacy: string;
}

@Component({
  selector: 'app-checkup',
  templateUrl: './checkup.component.html',
  styleUrls: ['./checkup.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CheckupComponent {
  constructor(
    private checkupService: CheckupService,
    private modalService: NgbModal,
    private alertService: AlertService
  ) {}

  dynamicArray: Array<DynamicGrid> = [];
  newDynamic: any = {};

  appointmentList = [];
  appointmentDetail;
  patientDetail;
  pharmacistControl = new FormControl<Pharmacist | null>(null, Validators.required);
  prescriptionControl = new FormControl<String | null>(null, Validators.required);
  resultControl = new FormControl<String | null>(null, Validators.required);
  pharmacies = [];
  prescriptionList = [
    {
      pharmacy: 'test',
      prescription: 'prersf'
    }
  ];

  checkupData = {
    id: null,
    result: '',
    prescriptions: []
  };

  ngOnInit() {
    this.checkupService.getAppointments().subscribe((e) => {
      console.log(e);
      this.appointmentList = e;
    });

    this.checkupService.getPharmacies().subscribe((res) => {
      this.pharmacies = res;
    });
  }

  open(content, data) {
    this.appointmentDetail = data.appointmentDTO;
    this.patientDetail = data.patientDTO;

    this.modalService.open(content, { fullscreen: true });
  }

  addPres(a) {}

  removeItem(idx) {
    console.log(idx, this.prescriptionList);
    this.prescriptionList = this.prescriptionList.splice(idx, 1);
  }

  addRow() {
    this.newDynamic = {
      drugList: this.prescriptionControl.value,
      pharmacy: this.pharmacistControl.value?.pharmacyName,
      pharmacistId: this.pharmacistControl.value?.id
    };
    this.dynamicArray.push(this.newDynamic);
    console.log(this.dynamicArray);
    return true;
  }

  deleteRow(index) {
    console.log(index);
    this.dynamicArray.splice(index, 1);
    return true;
  }

  checkUp(modal) {
    this.checkupService.checkUp(this.appointmentDetail.id, this.resultControl.value, this.dynamicArray).subscribe((res) => {
      this.alertService.success('Checked up, Thank you', {
        autoClose: true,
        keepAfterRouteChange: true
      });
      modal.close();
    });
  }
}
