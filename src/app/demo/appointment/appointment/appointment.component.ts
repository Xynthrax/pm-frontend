import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedModule } from '@progress/kendo-angular-scheduler';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent {

}
