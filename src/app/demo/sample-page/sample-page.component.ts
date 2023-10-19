import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { SampleService } from './sample.service';
import { SchedulerEvent, SchedulerModule } from "@progress/kendo-angular-scheduler";
import { displayDate, sampleData } from './events-utc';

@Component({
  selector: 'app-sample-page',
  standalone: true,
  imports: [CommonModule, SharedModule, SchedulerModule],
  templateUrl: './sample-page.component.html',
  styleUrls: ['./sample-page.component.scss']
})
export default class SamplePageComponent {
  constructor(private sampleService: SampleService) {}

  doctorList;

  public selectedDate: Date = displayDate;
  public events: SchedulerEvent[] = sampleData;

  ngOnInit() {
    this.sampleService.getDoctorList().subscribe((res) => (this.doctorList = res));
  }
}
