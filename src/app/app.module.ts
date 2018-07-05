import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';

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
import { TrabalhosTabelaComponent } from './trabalhos-tabela/trabalhos-tabela.component';
import { TrabalhoService } from './services/trabalho.service';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { TrabalhoComponent } from './trabalho/trabalho.component';
import { AdicionarTrabalhoComponent } from './adicionar-trabalho/adicionar-trabalho.component';

export const firebaseConfig = {

  apiKey: "AIzaSyBcguEUiZU-r49D8rmGoBpV1zwe5P6FGDU",
  authDomain: "workflow-sistema-de-tarefas.firebaseapp.com",
  databaseURL: "https://workflow-sistema-de-tarefas.firebaseio.com",
  projectId: "workflow-sistema-de-tarefas",
  storageBucket: "workflow-sistema-de-tarefas.appspot.com",
  messagingSenderId: "894268588170"
};


@NgModule({
  declarations: [
    TarefasComponent,
    TrabalhosComponent,
    AppComponent,
    LoginComponent,
    Parallax,
    DashboardComponent,
    TrabalhosTabelaComponent,
    TrabalhoComponent,
    AdicionarTrabalhoComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    MaterializeModule,
    FormsModule,
    AngularFirestoreModule
  ],
  providers: [AuthGuard, HttpUtilService, LoginService, AngularFireModule, AngularFireAuth, TrabalhoService, AngularFirestoreModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
