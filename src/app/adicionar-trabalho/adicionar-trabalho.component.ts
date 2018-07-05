import { Component, OnInit } from '@angular/core';
import { Trabalho } from '../models/trabalho';
import { TrabalhoService } from '../services/trabalho.service';

@Component({
  selector: 'app-adicionar-trabalho',
  templateUrl: './adicionar-trabalho.component.html',
  styleUrls: ['./adicionar-trabalho.component.scss']
})
export class AdicionarTrabalhoComponent implements OnInit {

  dataTempFinal: any; //usado para concatenar com a data que p banco entende

  trabalho: Trabalho[];
  trabalhoNovo: Trabalho = { // gravar coleção
    descricao: '',
    idNumero: '',
    dataInicio: null, //retorna a data atual
    dataFinal: null,
    status: '',
    id: ''
  }

  constructor(private trabalhoService: TrabalhoService) {

    this.dataTempFinal = new Date();
  }


  ngOnInit() { }

  onSubmit() {
    if (this.trabalhoNovo.descricao != '') {
      this.trabalhoNovo.dataInicio = new Date(); // retorna a data atual
      this.trabalhoNovo.dataFinal = new Date(this.dataTempFinal + "T04:00:00.000Z"); // tipo de tada que o banco aceita: new Date("2018-07-05T00:00:00.000Z")
      this.trabalhoNovo.status = "Aberto";
      this.trabalhoService.addTrabalho(this.trabalhoNovo); // inserico após as datas para pegar os valores corretos. 
      this.trabalhoNovo.descricao = '';
      this.trabalhoNovo.dataFinal = null;
      this.trabalhoNovo.idNumero = '';
    }
  }

  //metodo de teste apenas...pode ser apagado adiante
  onClick() {
    console.log("formato cru: " + this.dataTempFinal + "T04:00:00.000Z");
    console.log(":) formatado para o Firebase:  " + this.dataTempFinal + "T04:00:00.000Z");
  }

}

