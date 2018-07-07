import { Component, OnInit } from '@angular/core';
import { Trabalho } from '../../models/trabalho';
import { TrabalhoService } from '../../services/trabalho.service';

@Component({
  selector: 'app-adicionar-trabalho',
  templateUrl: './adicionar-trabalho.component.html',
  styleUrls: ['./adicionar-trabalho.component.scss']
})
export class AdicionarTrabalhoComponent implements OnInit {

  trabalhos: Trabalho[]; //usado para gerar o length dos trabalhos.
  dataTempFinal: any; //usado para concatenar com a data que p banco entende

  trabalho: Trabalho[];
  trabalhoNovo: Trabalho = { // gravar coleção
    nome: '',
    descricao: '',
    idNumero: null,
    dataInicio: null, //retorna a data atual
    dataFinal: null,
    status: '',
    atraso: null,
    id: ''
  }

  constructor(private trabalhoService: TrabalhoService) {

    this.dataTempFinal = new Date();
  }


  ngOnInit() {
    this.trabalhoService.getTrabalhos().subscribe(trabalhos => {
      this.trabalhos = trabalhos;
    });
  }


  onSubmit() {
    if (this.trabalhoNovo.nome != '') {
      this.trabalhoNovo.atraso = false;
      this.trabalhoNovo.idNumero = this.trabalhos.length + 1;
      this.trabalhoNovo.dataInicio = new Date(); // retorna a data atual
      this.trabalhoNovo.dataFinal = new Date(this.dataTempFinal + "T03:00:00.000Z"); // tipo de data que o banco aceita: new Date("2018-07-05T00:00:00.000Z")
      this.trabalhoNovo.status = "Aberto";
      this.trabalhoService.addTrabalho(this.trabalhoNovo); // inserico após as datas para pegar os valores corretos. 
      this.trabalhoNovo.nome = '';
      this.trabalhoNovo.descricao = '';
      this.trabalhoNovo.dataFinal = null;
      alert("Trabalho cadastrado com sucesso!!");
    }
  }

  //metodo de teste apenas...pode ser apagado adiante
  onClick() {
    console.log("formato cru: " + this.dataTempFinal + "T04:00:00.000Z");
    console.log(":) formatado para o Firebase:  " + this.dataTempFinal + "T04:00:00.000Z");
    console.log(":) numero do ultimo trabalho:  " + this.trabalhos.length);
  }

}

