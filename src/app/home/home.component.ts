import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(

    private afAuth: AngularFireAuth,
    private router: Router

  ) { }

  ngOnInit() {
  }

  form_logout() {
    this.afAuth.auth.signOut();
    delete localStorage['user'];
    delete localStorage['token'];
    location.reload();
    this.router.navigate(['/login']);
  }

}
