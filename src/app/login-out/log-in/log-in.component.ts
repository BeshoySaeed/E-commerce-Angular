import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent {
  passWord: any;
  repeated: any;

  confirmVal: any;

  constructor(private route: Router) {}

  submitted() {
    localStorage.setItem('token', this.passWord);
    this.route.navigate(['projects']);
  }

  logOut() {
    this.confirmVal = confirm('press yes if you want to log out');
    if (this.confirmVal) {
      localStorage.removeItem('token');
      this.route.navigate(['projects']);
    }
  }

  isAuth() {
    return localStorage.getItem('token');
  }
}
