import { Component, OnInit } from '@angular/core';
import { Trabalho } from '../../models/trabalho';
import 'rxjs/add/operator/map';
import { TrabalhoService } from '../../services/trabalho.service';

@Component({
  selector: 'app-trabalhos-tabela',
  templateUrl: './trabalhos-tabela.component.html',
  styleUrls: ['./trabalhos-tabela.component.scss']
})
export class TrabalhosTabelaComponent implements OnInit {

  trabalhos: Trabalho[];
  hoje = Date.now();
  hojeData: Date;

  constructor(private trabalhoService: TrabalhoService) {
    this.hojeData = new Date();
    this.hojeData.setDate(this.hojeData.getDate());
  }

  ngOnInit() {
    this.trabalhoService.getTrabalhos().subscribe(trabalhos => {
      this.trabalhos = trabalhos;
      this.trabalhos.map(e => { // for it para forçar o evento onload()
        this.updateTrabalho(null, e);//
      });
    });
  }

  updateTrabalho(event, trabalho: Trabalho) {
    const dataEntregaTemp: any = trabalho.dataFinal; // necessário criar variabel temp p o angular liberar os metodos de uso.
    const statusTemp: any = trabalho.status;
    if (this.hojeData.valueOf() / 1000 > dataEntregaTemp.seconds && statusTemp != "Concluído") {// valueOf() retorna timestamp
      trabalho.atraso = true;
    } else {
      trabalho.atraso = false;
    }
    this.trabalhoService.updateTrabalho(trabalho);
  }
}
