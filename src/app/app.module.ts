import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { routing } from './app.routing';
import { AuthGuard } from './guards/auth.guard';
import { HttpUtilService } from './services/http-util-service';
import { LoginComponent } from './login/login.component';
import { LoginService } from './services/login-service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';

import { MaterializeModule } from 'angular2-materialize';
import { Parallax } from './componentes/parallax/parallax.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TarefasComponent } from './componentes/tarefas/tarefas.component';
import { TrabalhosComponent } from './componentes/trabalhos/trabalhos.component';

export const firebaseConfig = {

  apiKey: 'AIzaSyCFEAdD1jZlcdNTy7WWm8GjWnFCdccEOUo',
  authDomain: 'workflow-irwin.firebaseapp.com',
  databaseURL: 'https://workflow-irwin.firebaseio.com',
  projectId: 'workflow-irwin',
  storageBucket: 'workflow-irwin.appspot.com',
  messagingSenderId: '1014981411125'
};


@NgModule({
  declarations: [
    TarefasComponent,
    TrabalhosComponent,
    AppComponent,
    HomeComponent,
    LoginComponent,
    Parallax,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    MaterializeModule
  ],
  providers: [AuthGuard, HttpUtilService, LoginService, AngularFireModule, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
