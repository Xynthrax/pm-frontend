// Angular import
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-left',
  templateUrl: './nav-left.component.html',
  styleUrls: ['./nav-left.component.scss']
})
export class NavLeftComponent {
  // public props
  @Output() NavCollapsedMob = new EventEmitter();

  username;

  ngOnInit() {
    const firstName = JSON.parse(localStorage.getItem('user')).firstName;
    const lastName = JSON.parse(localStorage.getItem('user')).lastName;

    this.username = `${firstName} ${lastName}`;
  }
}
