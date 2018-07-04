import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login-service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    
    private loginService: LoginService ,
    private router: Router

  ) { }

  ngOnInit() {
  }

  form_logout() {
    this.loginService.logout();
    delete localStorage['user'];
    delete localStorage['token'];
    location.reload();
  }

}
