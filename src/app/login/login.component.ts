import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login-service';
import { Router } from '@angular/router';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';


import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  hide = true;
  
  constructor(private loginService: LoginService) { }

  logOn(mail, password) {
    this.loginService.login(mail, password);
  }

}
