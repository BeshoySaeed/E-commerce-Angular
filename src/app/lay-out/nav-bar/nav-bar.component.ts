import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faShop } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  shopIcon = faShop;
  constructor(private rout: Router) {}

  // ngOnChange() {
  //   this.loginOrlogOut = this.loginService.loginState ? 'Log Out' : 'Log In';
  // }
  checkLoginFirst() {
    if (localStorage.getItem('token')) {
      this.rout.navigate(['cart']);
    } else {
      alert('please login first');
      this.rout.navigate(['login']);
    }
  }

  isAuth() {
    return localStorage.getItem('token');
  }
}
