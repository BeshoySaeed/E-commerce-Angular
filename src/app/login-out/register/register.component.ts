import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  AbstractControl,
  ValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ObservService } from '../../services/observ.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerationForm: FormGroup;
  password: any;
  counter: number = 0;
  constructor(private rout: Router, private counterService: ObservService) {
    this.registerationForm = new FormGroup({
      nameControl: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      emailControl: new FormControl('', [
        Validators.email,
        Validators.pattern(/[a-zA-Z0-9]+@[a-zA-Z0-9]+/),
        Validators.required,
      ]),
      addressControl: new FormGroup({
        countryControl: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
        ]),
        cityControl: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
        ]),
        streetControl: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
        ]),
      }),
      passControl: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      confirmPassControl: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
    });
  }

  sumittedForm() {
    this.rout.navigate(['login']);
  }
  get nameC() {
    return this.registerationForm.get('nameControl');
  }
  get emailC() {
    return this.registerationForm.get('emailControl');
  }
  get countryC() {
    return this.registerationForm.get('addressControl')?.get('countryControl');
  }
  get cityC() {
    return this.registerationForm.get('addressControl')?.get('cityControl');
  }
  get streetC() {
    return this.registerationForm.get('addressControl')?.get('streetControl');
  }
  get passC() {
    return this.registerationForm.get('passControl');
  }
  get confirmC() {
    return this.registerationForm.get('confirmPassControl');
  }
}
