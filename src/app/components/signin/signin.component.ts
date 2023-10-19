import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  signupForm: FormGroup;
  user: User = { username: 'anar', password: 'password' };
  alert = false;
  alertText = '';
  status;
  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router,
    private route: ActivatedRoute
  ) {
    this.signupForm = this.fb.group({
      name: ['',Validators.required],
      lastname: [''],
      password: ['', Validators.required],
      city: [''],
      role: [''],
      doctor: [''],
      patient: [''],
      email: ['', ],
      street: [''],
      zipcode: ['']
    });
  }

  ngOnInit() {
    const msg = this.route.snapshot.paramMap.get('msg');
    const status = this.route.snapshot.paramMap.get('status');

    if (msg) {
      this.alert = true;
      this.alertText = msg;
      this.status = status;
    }
  }

  signIn() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.valid);
      console.log('submit');
      this.user.username = this.signupForm.controls['name'].value;
      this.user.password = this.signupForm.controls['password'].value;

      this.authService.signIn(this.user).subscribe( (res: any) => {
        localStorage.setItem('access_token', res.token);
        this.authService.getUserProfile(res.message).subscribe((res) => {
          localStorage.setItem('user', JSON.stringify(res));
          // this.userService.setUser(res);
          // this.currentUser = res;
          this.router.navigate(['/home/default']);
        });
      },
      (err) => {
        this.alert = true;
        this.alertText = err.error.message;
        this.status = 'error';
        console.log(err.error.message);
      });
    }
  }
}
