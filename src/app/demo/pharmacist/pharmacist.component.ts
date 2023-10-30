import { Component } from '@angular/core';
import { PharmasictService } from './pharmasict.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, Validators } from '@angular/forms';
import { AlertService } from 'src/app/alert';

@Component({
  selector: 'app-pharmacist',
  templateUrl: './pharmacist.component.html',
  styleUrls: ['./pharmacist.component.scss']
})
export class PharmacistComponent {
  prescriptionList = [];
  prescriptionDetail;
  netControl = new FormControl<Number | null>(null, Validators.required);

  constructor(
    private pharmacistService: PharmasictService,
    private modalService: NgbModal,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.pharmacistService.getPrescriptions().subscribe((res) => {
      this.prescriptionList = res;
    });
  }

  open(content, data) {
    this.prescriptionDetail = data;

    this.modalService.open(content);
  }

  deliver(modal) {
    this.pharmacistService.deliverPrescription(this.prescriptionDetail.id, this.netControl.value).subscribe((res) => {
      this.alertService.success('Delivered, Thank you', {
        autoClose: true,
        keepAfterRouteChange: true
      });
      modal.close();
    });
  }
}
