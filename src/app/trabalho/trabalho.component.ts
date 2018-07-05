import { Component, OnInit } from '@angular/core';
import { Trabalho } from '../models/trabalho';
import { ActivatedRoute } from '@angular/router';
import { TrabalhoService } from '../services/trabalho.service';

@Component({
  selector: 'app-trabalho',
  templateUrl: './trabalho.component.html',
  styleUrls: ['./trabalho.component.scss']
})
export class TrabalhoComponent implements OnInit {

  dataTempFinal: any; //usado para concatenar com a data que p banco entende
 
  idRota: string;
  trabalho: Trabalho[];
  trabalhoNovo: Trabalho = { // gravar coleção
    descricao: '',
    idNumero: '',
    dataInicio: null, //retorna a data atual
    dataFinal: null,
    id: ''   
  }
 
  constructor(private trabalhoService: TrabalhoService, private route: ActivatedRoute ) { 

    this.dataTempFinal = new Date();    
  }
  

  ngOnInit() {
    this.route.params.subscribe(
      (params: any) => {
        this.idRota = params['id'];
      }
    );
    this.trabalhoService.getTrabalhoUnitario(this.idRota).subscribe(trabalho => {
      this.trabalho = trabalho;
      console.log(trabalho.length);
      console.log(this.idRota);
      })    
  }
  updateTrabalho(trabalho: Trabalho) {   
    this.trabalhoService.updateTrabalho(trabalho);
  }
  onSubmit() {
    if (this.trabalhoNovo.descricao != '') {
      this.trabalhoNovo.dataInicio = new Date(); // retorna a data atual
      this.trabalhoNovo.dataFinal = new Date(this.dataTempFinal+"T04:00:00.000Z"); // tipo de tada que o banco aceita: new Date("2018-07-05T00:00:00.000Z")
      this.trabalhoService.addTrabalho(this.trabalhoNovo); // inserico após as datas para pegar os valores corretos. 
      this.trabalhoNovo.id = '';
      this.trabalhoNovo.descricao = '';
      this.trabalhoNovo.dataInicio = null;
      this.trabalhoNovo.dataFinal = null;   
      this.trabalhoNovo.idNumero = '';       
    }
  }

  //metodo de teste apenas...pode ser apagado adiante
  onClick(){
    console.log("formato cru: " + this.dataTempFinal+"T04:00:00.000Z"); 
    //console.log(this.dataFinalLocal);
  }
 
}
