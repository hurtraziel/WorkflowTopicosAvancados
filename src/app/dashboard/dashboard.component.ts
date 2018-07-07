import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login-service';
import { TrabalhoService } from '../services/trabalho.service';
import { Trabalho } from '../models/trabalho';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  trabalhos: Trabalho[]; // todos
  trabalhosAbe: Trabalho[]; // abertos
  trabalhosAtr: Trabalho[]; // atrasados
  trabalhosCon: Trabalho[]; // concluidos
  abertos: any; // contador dash
  atrasados: any;
  concluidos: any;
  todos: any;

  constructor(private loginService: LoginService, private trabalhoService: TrabalhoService) {
    const results = [];

  }

  ngOnInit() {
    this.trabalhoService.getTrabalhos().subscribe(trabalhos => {
      this.trabalhos = trabalhos;
      this.todos = this.trabalhos.length;
    });
    this.trabalhoService.getTrabalhosAberto().subscribe(trabalhosAbe => {
      this.trabalhosAbe = trabalhosAbe;
      this.abertos = this.trabalhosAbe.length; // contador dash
    });
    this.trabalhoService.getTrabalhosAtraso().subscribe(trabalhosAtr => {
      this.trabalhosAtr = trabalhosAtr;
      this.atrasados = this.trabalhosAtr.length;
    });
    this.trabalhoService.getTrabalhosConcluido().subscribe(trabalhosCon => {
      this.trabalhosCon = trabalhosCon;
      this.concluidos = this.trabalhosCon.length;
    });    
  }

  form_logout() {
    this.loginService.logout();
    delete localStorage['user'];
    delete localStorage['token'];
    location.reload();
  }
}
