import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { SampleService } from './sample.service';
import { SchedulerEvent, SchedulerModule } from '@progress/kendo-angular-scheduler';
import { displayDate, sampleData } from './events-utc';
import { FormBuilder, Validators } from '@angular/forms';
import { MatListOption, MatSelectionListChange } from '@angular/material/list';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/alert';


@Component({
  selector: 'app-sample-page',
  templateUrl: './sample-page.component.html',
  styleUrls: ['./sample-page.component.scss']
})
export default class SamplePageComponent {
  constructor(
    private sampleService: SampleService,
    private _formBuilder: FormBuilder,
    private router: Router,
    public alertService: AlertService
  ) {}
  @ViewChild('selfClosingAlert', { static: false }) selfClosingAlert: NgbAlert;
  successMessage = '';
  minDate = new Date(new Date().setDate(new Date().getDate() + 1));
  maxDate = new Date().setMonth(new Date().getMonth() + 6);
  selected = new Date(new Date().setDate(new Date().getDate() + 1));
  doctorList;
  selectedTime = null;
  defaultTimes = [
    { disabled: false, text: '8 AM', value: 8 },
    { disabled: false, text: '9 AM', value: 9 },
    { disabled: false, text: '10 AM', value: 10 },
    { disabled: false, text: '11 AM', value: 11 },
    { disabled: false, text: '1 PM', value: 13 },
    { disabled: false, text: '2 PM', value: 14 },
    { disabled: false, text: '3 PM', value: 15 },
    { disabled: false, text: '4 PM', value: 16 }
  ];

  times = [
    { disabled: false, text: '8 AM', value: 8 },
    { disabled: false, text: '9 AM', value: 9 },
    { disabled: false, text: '10 AM', value: 10 },
    { disabled: false, text: '11 AM', value: 11 },
    { disabled: false, text: '1 PM', value: 13 },
    { disabled: false, text: '2 PM', value: 14 },
    { disabled: false, text: '3 PM', value: 15 },
    { disabled: false, text: '4 PM', value: 16 }
  ];

  doctorId = null;

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required]
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required]
  });

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

  public selectedDate: Date = displayDate;
  public events: SchedulerEvent[] = sampleData;

  ngOnInit() {
    this.sampleService.getDoctorList().subscribe((res) => (this.doctorList = res));
  }

  handleSelectionChange(e) {
    this.doctorId = e.id;
    console.log(e);
  }

  handleTimeSelectionChange(e) {
    if (!e.disabled) {
      this.selected.setHours(e.value);
      this.selectedTime = e.value;
    }
  }

  handleDateChange(e) {
    this.sampleService.getDoctorAvailableTime(this.doctorId, e).subscribe((res: any[]) => {
      this.times = JSON.parse(JSON.stringify(this.defaultTimes));
      res.forEach((resTime) => {
        this.times.map((time) => {
          if (time.text == resTime) {
            time.disabled = true;
          }
          return time;
        });
      });
    });
  }

  createAppointment() {
    this.sampleService.createAppointment(this.doctorId, this.selected).subscribe( r => {
      // this.successMessage = "Appointment has been created, Thank you";
      this.alertService.success("Appointment has been created, Thank you", {
        autoClose: true,
        keepAfterRouteChange: true
    });
      this.router.navigate(['home/default']);
      // setTimeout(() => this.selfClosingAlert.close(), 3000);
    });
  }

  chooseDate() {
    // console.log('choose', new Date());
    this.handleDateChange(this.selected);
  }
}
