// Angular import
import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-nav-right',
  templateUrl: './nav-right.component.html',
  styleUrls: ['./nav-right.component.scss']
})
export class NavRightComponent {
  userName = '';
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.userName = JSON.parse(localStorage.getItem('user'))?.username;
  }

  logOut(){
    this.authService.doLogout();
  }
}
