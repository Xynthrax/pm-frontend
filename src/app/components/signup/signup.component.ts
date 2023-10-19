import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signupForm: FormGroup;
  specialization = [
    "ALLERGIST_IMMUNOLOGIST",
    "ENT_SPECIALIST",
    "DERMATOLOGIST",
    "ENDOCRINOLOGIST",
    "OPHTHALMOLOGIST",
    "PULMONOLOGIST",
    "ONCOLOGIST",
    "GERIATRICIAN",
    "EMERGENCY_MEDICINE_PHYSICIAN",
    "GASTROENTEROLOGIST",
    "PEDIATRICIAN",
    "UROLOGIST",
    "PSYCHIATRIST",
    "RHEUMATOLOGIST",
    "CARDIOLOGIST",
    "ORTHOPEDIC_SURGEON",
    "NEUROLOGIST",
    "OBSTETRICIAN_GYNECOLOGIST",
    "NONE"
  ]
  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router,
  ) {
    this.signupForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      password: [''],
      city: [''],
      role: [''],
      doctor: [false],
      patient: [false],
      username: [''],
      street: [''],
      zipcode: [''],
      speciality: [],
      insurance: [''],
      rate: [''],
      pharmacist: [false]
    });
  }
  ngOnInit() {
    this.signupForm.valueChanges.subscribe(console.log);
  }
  registerUser() {
    switch (this.signupForm.controls['role'].value) {
      case 'patient':
        this.signupForm.controls['patient'].setValue(true);
        break;
      case 'doctor':
        this.signupForm.controls['doctor'].setValue(true);
        break;
      case 'pharmacist':
        this.signupForm.controls['pharmacist'].setValue(true);
        break;
    }

    this.authService.signUp(this.signupForm.value).subscribe((res) => {
      if (res) {
        this.signupForm.reset();
        this.router.navigate(['login', { msg: 'Successful', status: 'success' }]);
      }
    });
  }
}
