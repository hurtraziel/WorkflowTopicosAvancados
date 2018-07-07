import { Component, OnInit } from '@angular/core';
import { Trabalho } from '../models/trabalho';
import 'rxjs/add/operator/map';
import { TrabalhoService } from '../services/trabalho.service';

@Component({
  selector: 'app-trabalhos-atrasados',
  template: `
  <div class="row" style="background-color: #343a40; box-shadow: 0px 0px 3px rgb(73, 73, 73);">
    <div class="col s0"></div>
    <div class="col s12">
        <div class="card-panel">
            <div class="card-action right-align">
                <a routerLink="/dashboard" routerLinkActive="dashboard" style="font-size: 12pt; font-weight: bold">Dashboard&ensp;</a>
            </div>
            <span class="card-title" style="font-size: 18pt; font-weight: bold; padding-left: 10%">Trabalhos Atrasados</span>
            <div class="row">
            <div class="main-content">
            <div class="row">
              <div class="col s1"></div>
              <div class="col s10">
                <table class="responsive-table highlight bordered">
                  <thead>
                    <tr>
                      <th>Nº</th>
                      <th>Nome</th>
                      <th>Data de início</th>
                      <th>Data de finalização</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr *ngFor="let trabalho of trabalhos" [routerLink]="['/trabalho',trabalho.idNumero]" style="cursor: pointer;">
                      <td>{{trabalho.idNumero}}</td>
                      <td>{{trabalho.nome}}</td>
                      <td>{{trabalho.dataInicio.toDate() | date: 'dd/MM/yyyy'}}</td>
                      <td>
                        <div *ngIf="hoje/1000 > trabalho.dataFinal.seconds && trabalho.status != 'Concluído'" style="color: red;">
                          {{trabalho.dataFinal.toDate() | date: 'dd/MM/yyyy'}}&ensp;
                          <i class="material-icons md-18" style="vertical-align: middle;">warning</i>
                        </div>
                        <div *ngIf="trabalho.status === 'Concluído'">{{trabalho.dataFinal.toDate() | date: 'dd/MM/yyyy'}}</div>
                        <div *ngIf="trabalho.dataFinal.seconds > hoje/1000 && trabalho.status !== 'Concluído'">{{trabalho.dataFinal.toDate() | date: 'dd/MM/yyyy'}}</div>
                      </td>
                      <td>
                        <div *ngIf="trabalho.status === 'Aberto'" style="color:rgb(27, 27, 27);">
                          <i class="material-icons" style="vertical-align: middle; color:orange;">fiber_manual_record</i>&ensp;{{trabalho.status}}</div>
                        <div *ngIf="trabalho.status === 'Concluído'" style="color:rgb(27, 27, 27);">
                          <i class="material-icons" style="vertical-align: middle; color: rgb(0, 99, 0);">fiber_manual_record</i>&ensp;{{trabalho.status}}</div>
                      </td>
                      <tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>  
            </div>
        </div>
    </div>
</div>
` ,
  styleUrls: ['./trabalhos.component.scss']
})
export class TrabalhosAtrasadosComponent implements OnInit {

  trabalhos: Trabalho[];
  hoje = Date.now();

  constructor(private trabalhoService: TrabalhoService) { }

  ngOnInit() {
    this.trabalhoService.getTrabalhosAtraso().subscribe(trabalhos => {
      this.trabalhos = trabalhos;
    })
  }
}
